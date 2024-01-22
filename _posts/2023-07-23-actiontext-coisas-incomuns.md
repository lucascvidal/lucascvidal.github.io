---
layout: post
title:  "ActionText: Coisas incomuns"
date:   2023-07-23 11:18:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
categories: "Tech"
---
Este artigo não é uma introdução ao ActionText, nem ao Rails. Se você já conhece os blocos de construção do Rails talvez entenda tudo o que vou escrever sobre. Se não conhece, recomendo parar de ler por aqui.

[ActionText](https://guides.rubyonrails.org/action_text_overview.html) é a cola de [Trix](https://trix-editor.org/) + [ActiveStorage](https://guides.rubyonrails.org/active_storage_overview.html). É a parte que faltava para o Rails resolver de fábrica as coisas envolvendo um editor de texto WYSIWYG. Acabei usando esse componente extensivamente em um projeto, e por conta de necessidades do negócio tive que customizar boa parte dele. Neste artigo vou entrar em detalhes do que foi feito, e espero que sirva não só de referência para mim em projetos futuros, mas para outras pessoas que usem este componente também.

## ActionText e Multitenancy

O projeto era de um SaaS multitenant. O desafio aqui foi conciliar o uso da gem [Apartment](https://github.com/influitive/apartment) com o ActionText, em especial com a parte ActiveStorage dele.

O ActiveStorage funciona da seguinte forma: metadados de um anexo são armazenados em uma tabela de anexos no banco de dados, e o arquivo em si é armazenado em algum lugar. Esse lugar pode ser um bucket S3 na AWS, um blob container no Azure, ou ainda alguma outra coisa.

O Apartment tem algumas maneiras de lidar com tenants. Quando usamos o PostgreSQL, podemos separar os tenants por schemas no banco de dados. Schemas podem ser encarados como diretórios do banco, e os dados armazenados nesses diretórios ficam isolados dos dados em outros schemas.

Para acessar esses schemas, o Apartment modifica o nome da tabela a ser acessada no banco. Por exemplo, se temos um tenant chamado dev_tenant, e uma tabela chamada blobs, para acessarmos os registros desta tabela específica, o Apartment configura o caminho de busca no Postgres para dev_tenant.blobs. Outra coisa que é interessante notar aqui é que as tabelas são replicadas para todos os schemas, então essa tabela blobs existe em todos os schemas de tenants e também no schema público do Postgres.

Aqui é que se colocava o problema. Existem maneiras de configurar o tenant ativo no Apartment, e fazemos isso através dos Elevators da gem. A forma usada nesse projeto foi através da URL, e aí em algumas partes do código do ActiveStorage esse tenant não era configurado. Isto acontecia porque o Rails não é pensado logo de cara para ser multitenant como o Apartment funciona, então o código de partes padrão não leva em consideração a conjuntura específica de cada projeto.

O resultado era que toda vez que a aplicação precisava encontrar os dados de um anexo do ActionText, seja para renderizar o texto como HTML ou para renderizar miniaturas no momento da edição do texto no Trix, ele procurava os metadados do anexo na tabela do ActiveStorage que existia no schema público, mas esses metadados eram salvos na tabela do ActiveStorage do schema de um tenant específico, e então o blob não era encontrado. Miniaturas eram quebradas, anexos pareciam perdidos e eu ficava com mais cabelos brancos.

Para resolver essa situação, depois de descobrir como as coisas se davam entre Apartment e ActiveStorage, eu acabei sobrescrevendo o controller padrão do ActiveStorage com uma versão customizada dele, na qual eu chamava o método em que configurávamos o tenant pelo Apartment e os blobs passaram a ser encontrados. No entanto, os cabelos não voltaram para a cor original.

## Upload e download de blobs via app

Um outro problema que me apareceu foi o de não poder acessar os blobs diretamente de qualquer browser, e nem poder fazer o upload de qualquer lugar. Para atender a um requisito de conformidade, o armazenamento de blobs só podia ser acessado da mesma rede em que ele se encontrava, o que obrigaria a passar pelo pod do Kubernetes que servia a aplicação. Isto levantou alguns problemas com o comportamento padrão do Trix.

O Trix faz o que ele chama de direct upload quando um arquivo é adicionado ao conteúdo do editor. Isto significa que o arquivo é processado pela biblioteca de JS do Trix e é enviado para onde vai ser armazenado diretamente do browser. Como isto não seria possível, eu precisaria enviar o arquivo para a aplicação, e a aplicação teria de ser responsável por subir esse arquivo para o armazenamento.

Esta questão foi resolvida também sobrescrevendo o controller de blobs do ActiveStorage, mais especificamente alterando a URL do direct upload para uma URL da própria aplicação, onde escrevi um pedaço de código para receber o arquivo do Trix, ajustar os metadados e subi-lo para o armazenamento. Assim se resolvia a questão do upload.

Para o download fizemos algo parecido. Em vez de colocarmos um link direto para o blob armazenado no HTML da partial do blob, passávamos pela aplicação para baixar o blob de lá. Fizemos isso através de um form com as informações que precisávamos em inputs não-visíveis. Quando o usuário envia o form para o backend, identificamos o blob, baixamos-o no servidor e enviamos-o de volta para o front através do método send_data dos controllers do Rails. Assim fechamos os pontos para atender aos requisitos de conformidade do ambiente na nuvem para esse produto.

### Um adendo interessante ao download via app

Além dos anexos enviados por usuários em todos os campos que utilizavam o ActionText, a gente também armazenava as imagens usadas em várias páginas da aplicação no mesmo lugar que os blobs. Isto implicava em precisar baixar essas imagens no servidor também, pois não poderíamos simplesmente jogar um link lá do bucket como src nas tags <img>. Porém, como poderíamos baixar esse asset para uma pasta do servidor e servi-lo diretamente (isto é, sem precisar processar a request na aplicação) sem o arquivo existir num primeiro momento? Teríamos 404 a dar com pau. Poderíamos baixar todas as imagens para essa pasta antes, mas esses arquivos poderiam ser modificados pelos usuários administradores do produto no bucket, e aí ficaríamos com arquivos diferentes até que a pasta temporária fosse atualizada com as novas imagens. Poderíamos tentar gerar links dinâmicos a partir de uma pasta temporária, criar uma action em algum controller que fosse responsável por lidar com essas demandas e alterar as configurações do servidor do Rails para servir esses assets diretamente quando fossem requisitados e já existissem, mas com certeza não seria algo tão fácil quanto a outra solução que encontramos.

Esta solução foi baixar os assets e convertê-los em strings codificadas em Base64 para usar como fonte das imagens. Esse processamento ocorre junto com a renderização dos templates e layouts das páginas do mesmo jeito que qualquer outra aplicação server-side rendered feita com Rails, e não foi tão difícil de implementar quanto as outras ideias que surgiram.

## Signed Global ID expirado

Um outro cenário de uso da aplicação requisitava que um campo de um model do Rails que usava o Trix para preenchê-lo fosse preenchido programaticamente, sem o envolvimento de um usuário usando um browser.

Para desenvolver essa funcionalidade acabei descobrindo que os anexos do ActionText não eram salvos completamente como registros em uma tabela do ActiveStorage, e sim como um conjunto de tags HTML especiais dentro do próprio texto gerado no Trix e na tabela do ActiveStorage.

Essas tags tinham o [Signed Global ID](https://github.com/rails/globalid) do anexo como um atributo. Quando um desses campos de ActionText precisava ser renderizado, a string era processada, essas tags especiais eram separadas, e seus Signed Global IDs lidos e usados para encontrar os registros nas tabelas de ActiveStorage. A partir daqui, a partial do blob era renderizada com os dados do registro encontrado e encaixada no texto do ActionText.

O que fiz então foi criar o registro do ActiveStorage antes de salvar o texto do Trix, replicar a escrita dos anexos no padrão em que o Trix escrevia com essas tags especiais, e aí armazenar o texto com a referência para o blob do ActiveStorage (Signed Global ID).

O que eu não sabia na época era que dessa maneira, programaticamente, eu precisava explicitar que o Signed Global ID não deveria expirar. Aparentemente o Trix resolve isso sozinho quando um anexo passa por ele, mas como não passava, os Signed Global IDs eram gerados com a configuração padrão de expirar depois de 30 dias. Depois de 1 mês em produção, os anexos todos sumiram. Não foram excluídos, mas não eram encontrados pois o identificador tinha expirado. Imagine o susto, mais de 14 mil registros na aplicação desaparecendo de um dia para o outro. Enfim, descobrimos esse problema, definimos a solução e a executamos.

## Falta de renderizador

A última coisa incomum que vou escrever sobre aqui neste artigo foi a falta de um renderizador para o ActionText. Quem faz o processamento da string salva como HTML em qualquer model usando ActionText é uma [instância de controller do Rails](https://github.com/rails/rails/blob/main/actiontext/lib/action_text/rendering.rb). Se a gente checar o código da versão mais recente do ActionText no GitHub vamos ver que o ActionText busca um controller já definido em uma variável, e se não encontrar nada nessa variável, ele cria uma nova instância desse controller. Pois bem, na versão em que a aplicação estava usando do ActionText essa verificação não existia, e se não houvesse nada na variável, simplesmente um erro estourava e o texto não era renderizado.

Demorei um pouco para entender esse problema, mas graças a [essa PR](https://github.com/rails/rails/pull/46119) eu consegui definir uma solução. Esta solução foi sobrescrever a classe de rendering do ActionText com o código da nova versão.

Seria mais fácil subir a versão do ActionText? Se fosse só para resolver este problema específico sim, mas não era possível subir só a versão do ActionText, eu teria que subir a versão do Rails, e aí a versão de praticamente todas as dependências também, o que já tinha me causado problemas com uma gem chamada OmniAuth. Como o tempo e o orçamento para a resolução do problema eram curtos, acabei puxando o código mais novo para a versão mais antiga pela sobrescrita mesmo.

## Considerações finais

Os problemas descritos aqui e as soluções apresentadas foram desafios interessantes para superar, e me fizeram aprender mais sobre como o Rails funciona, como o ActionText funciona, e também me deram uma experiência interessante em como resolver um problema sem nenhuma documentação avançada e muito menos gente que já tinha tido algum problema similar.

Passei horas lendo o código do ActionText, testando coisas no console do Rails, e , graças a Deus, consegui sair do outro lado. Espero que o compartilhamento desses obstáculos e aprendizados possam servir para alguém além de mim, e que também me sirvam para refrescar a memória daqui a algum tempo. Agradeço a leitura, e fique à vontade para comentar algo.
