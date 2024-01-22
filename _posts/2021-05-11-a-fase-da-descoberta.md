---
layout: post
title:  "A fase da descoberta"
date:   2021-05-11 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
categories: ["Business", "Product Development"]
---
Vou contar uma história sobre os perrengues que passei com a tal da fase da descoberta. Na criação de produtos ou serviços a fase da descoberta é a fase inicial do processo de desenvolvimento. É nela que a gente destrincha e começa a definir o que deverá ser feito efetivamente.

Existem variações de área para área, mas o objetivo dessa fase é traçar um panorama geral do problema que a gente vai resolver e enxergar os possíveis caminhos a serem explorados.

Qualquer profissão que crie algo, seja um app, uma casa, uma chave de fenda, uma máquina, enfim, qualquer produto ou serviço, precisa passar por uma fase de descoberta. Não existe a falta da descoberta, existe a descoberta malfeita, então dá para dizer que é algo fundamental no processo e não acessório.

## O quão difícil pode ser?

Sou engenheiro mecânico, fiz a maioria dos meus estágios em desenvolvimento de produto e cheguei a trabalhar com a mesma coisa depois de formado. Em nenhuma situação nessas funções pregressas à mudança de carreira para desenvolvimento de software eu participei de uma fase de descoberta.

Como comentei nos parágrafos anteriores, para desenvolver qualquer coisa é necessário passar por essa fase, então como eu consegui desenhar componentes de máquinas e até máquinas inteiras sem essa fase? A resposta é simples, eu recebia as informações da descoberta de outra pessoa.

Vou dar um exemplo, o meu projeto de graduação foi o desenho e a construção de um triciclo com duas rodas na frente. A escolha das peças de mercado, o dimensionamento da estrutura, avaliação da dinâmica, a escolha e compra dos materiais, os desenhos de fabricação, enfim, tudo o que precisava ser desenvolvido até chegar no momento de sair pedalando esse triciclo fui eu quem fiz. No entanto, a ideia de se fazer um triciclo, que foi definida na fase de descoberta do projeto, veio de um professor da faculdade, e já veio com as justificativas do porquê ter duas rodas na frente e se inclinar como uma bicicleta (para os curiosos, a sogra do professor não conseguia mais andar de bicicleta, por falta de equilíbrio, e queria ter a mesma sensação, mas com uma segurança maior, daí o terceiro ponto de apoio no chão).

Quando eu comecei a participar de projetos de desenvolvimento de software, onde a presença de um engenheiro de software e de um designer é bastante comum, comecei a perceber que definir o que deveria ser feito, em outras palavras, participar da fase de descoberta, não era algo tão simples assim. É aquela história, existe opinião de arquibancada e opinião de quadra, até o momento em que eu precisei entrar em quadra eu só tinha opinião de arquibancada sobre a fase de descoberta, e tomando inspiração em Sócrates, a gente só sabe que não sabe quando precisa saber.

Inclusive eu já escrevi sobre quando precisei puxar uma fase de descoberta e os problemas que aconteceram neste artigo sobre meu [primeiro contato com UX](https://lucascvidal.github.io/posts/meu-primeiro-contato-com-ux).

## Erros na descoberta em projetos seguidos

Pois bem, para dar uma noção de linha do tempo dos acontecimentos até aqui vou fazer um resumo da minha experiência com descoberta:
- Todos os projetos que participei desde 2010 até 2019 na área de engenharia mecânica eu não participei de fase de descoberta;
- O primeiro projeto que participei como engenheiro de software teve uma fase de descoberta conturbada, eu participei mas não entendia muito bem o que acontecia e não fui eu quem puxou a fase e definiu o que deveria ser feito;
- O segundo projeto que participei como engenheiro de software já estava em andamento e eu peguei o bonde andando, não participei da fase de descoberta;
- O terceiro projeto que participei como engenheiro de software foi o do artigo sobre UX, deu problema e um UX designer refez a descoberta mas o projeto foi arquivado (pelo menos por enquanto);
- O quarto projeto que participei como engenheiro de software também deu problema com a descoberta e aqui a gente parou algumas horas para entender o que tinha acontecido.

Dá para perceber que  a descoberta malfeita foi um problema em vários projetos seguidos. Vou escrever a partir de agora sobre a descoberta do último projeto da lista, pois foi nele que a gente conseguiu enxergar o que tínhamos de problema.

## Habilidades para puxar a descoberta

Tanto na engenharia de software quanto no design existem métodos e ferramentas para conseguir chegar no panorama geral do problema e enxergar possíveis caminhos a serem tomados.

Para exemplificar, na engenharia de software é comum escrever casos de uso do sistema, e inclusive há uma notação especial, chamada de UML (Unified Modeling Language) para mostrar esses casos de uso visualmente. Para enxergar praticamente a mesma coisa, o design propõe a jornada do usuário, que, cá entre nós, eu acho muito mais intuitiva e fácil de entender do que um diagrama de casos de uso feito em UML.

Quando eu precisei puxar a fase de descoberta no penúltimo projeto da lista do tópico anterior, eu não conhecia nem as ferramentas de engenharia de software nem as de design para lidar com a descoberta. Não foi à toa que deu problema, porém, no projeto mais recente da lista eu já tinha estudado os fundamentos da engenharia de software e já tinha feito um bootcamp de UX design, então achei que dava para encarar o desafio (até porque eu seria suporte de um outro engenheiro de software que estaria efetivamente tocando a descoberta).

Pois bem, conseguimos mapear os processos que deveriam ser seguidos usando o sistema (usamos uma notação chamada BPMn para isso), mas colocamos essa informação em fluxos segmentados e não conseguimos comunicar o que seria a jornada principal dos usuários da aplicação que íamos desenvolver. Além disso, cometemos o erro de envolver os desenvolvedores que iriam nos auxiliar na construção da aplicação nessa fase de descoberta e queimamos centenas de horas do orçamento porque eles efetivamente não conheciam nada sobre as regras de negócio (e não eram responsáveis por saber, pelo menos não nessa fase), e ficavam mais de espectadores nas reuniões, observando como a gente tentava mapear esses processos.

## Enxergando as causas dos erros

A dificuldade em passar da fase de descoberta começou a ficar evidente nas métricas que a gente usa nos projetos (Lead Time, CFD, entre algumas outras). A gente demorava para entregar coisas e essas entregas muitas vezes pareciam desconexas. Foi analisando duas métricas em específico que o nosso CTO pediu para falar conosco para ver o que estava acontecendo. A primeira delas foi o tamanho do backlog, que não crescia (parecia estar longe de um backlog comum para o tamanho do projeto que a gente estava tocando), e a outra foi a quantidade de horas consumidas do orçamento até aquele momento.

Em torno de 10% do orçamento tinha sido consumido, não tínhamos nada do projeto entregue, e pior, não tínhamos um backlog próximo do esperado para conseguir tirar o atraso nas semanas seguintes. Na verdade, a tendência era de que a gente gastasse mais 10%, 15% do orçamento e ainda ficasse patinando na descoberta.

Nessa conversa com o nosso CTO a gente mostrou o que tinha sido feito, como estávamos puxando a descoberta e ele nos disse que as coisas pareciam desconexas, dando até a impressão de que não tínhamos conseguido avançar em nada. Olhando somente os diagramas que a gente tinha feito realmente parecia tudo avulso e sem uma linha de raciocínio em comum, mas eu já estava sentindo que tinha entendido boa parte do processo que a gente precisaria automatizar e consegui pescar nessa conversa com o CTO que a gente precisava juntar aquele monte de fluxos em uma jornada que fizesse sentido para o usuário.

Esse foi o meu primeiro aprendizado no meio dessa bagunça toda. O processo que deve ser mapeado não é o que os funcionários de uma empresa fazem no back-office, e sim a jornada que o usuário percorre para conseguir chegar no objetivo dele. Em outras palavras, o processo que a gente precisava mapear era o processo que fazia a proposta de valor do produto efetivamente se tornar valor para o usuário.

Seguindo esse raciocínio, o usuário deve ser o protagonista desse mapeamento e os outros atores dentro desse processo devem ir aparecendo ao longo dessa jornada e dando sua contribuição para chegar-se no objetivo. Com isso mais claro conseguimos juntar os fluxos avulsos em um grande fluxo único que cobria todos os passos do usuário e do pessoal do back-office para que o usuário chegasse lá.

Depois disso contamos com a chegada de um UX designer no projeto e ele, partindo desse grande mapeamento, tocou o resto da fase de descoberta, refinando alguns outros pontos de entrada nesse processo, definindo e validando todos os atores e suas funções e desenhando as telas que seriam implementadas posteriormente.

Eu e o outro engenheiro de software que estávamos tocando essa descoberta até passar a bola para o UX designer acabamos indo para um outro projeto que precisava de uma ajuda para correção de bugs e desenvolvimento de algumas novas funcionalidades. No entanto, depois de algumas semanas eu voltei para o projeto e percebi que todo o resto da jornada principal (e algumas outras jornadas acessórias) tinha sido mapeado entre o UX designer e a PO do projeto, basicamente.

Aí eu enxerguei um segundo aprendizado. A fase de descoberta não deve contar com muitas pessoas, tanto por economia de horas quanto por velocidade na compreensão. Além disso, os desenvolvedores não podem entrar no projeto sem que haja fila de trabalho para eles, o que indica que o momento para isso seja com certeza depois da descoberta e talvez até da fase de definição, que geralmente é onde as telas estão sendo desenhadas, o ambiente de desenvolvimento sendo levantado e etc.

## Só mais um para encerrar

Para finalizar esse artigo vou comentar sobre um outro aprendizado que tive nesse projeto, este mais voltado para o gerenciamento em si. Como tínhamos consumido muitas horas logo no início do projeto, a gente estava com um problema para fechar a lacuna entre o percentual de coisas do backlog entregue e o orçamento consumido.

Durante as semanas do projeto definimos que essa lacuna não poderia ser maior do que 10% (número arbitrário, que simplesmente parecia certo), e foi um bom direcionador para criarmos o senso de urgência necessário para conseguirmos sair do outro lado desse projeto e não ficar pelo caminho.

No final das contas estávamos avaliando a evolução do backlog e cruzando esses dados com o que tínhamos de grana disponível, e nessa avaliação percebemos que [simulações de monte-carlo](https://www.youtube.com/watch?v=PMISi2ZyuR8) feitas semana a semana também são um ótimo direcionador para se usar, em conjunto com a tolerância de 10% entre backlog entregue e orçamento consumido, para termos mais segurança na definição do término do projeto.

Por este artigo é só, agradeço a leitura e até a próxima!
