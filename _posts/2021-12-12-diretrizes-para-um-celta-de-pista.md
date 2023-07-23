---
layout: post
title:  "Diretrizes para um Celta de pista"
date:   2021-12-12 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
---
Há muito tempo eu escrevi sobre alguma coisa de engenharia mecânica por aqui, mas depois de migrar para a área de engenharia e desenvolvimento de software eu acabei deixando isso de lado. Este artigo é, de certa forma, um retorno à engenharia mecânica, e nele vou discorrer sobre algumas ideias que tenho para construir um carro de pista de tração dianteira e peso majoritariamente apoiado no eixo dianteiro, o famoso Chevrolet Celta, que eu cheguei a ter um e até esbocei alguma coisa para ser feita nele, mas acabei vendendo-o depois de algumas turbulências pessoais.

## Qual o objetivo de um carro de pista?

Um carro é um veículo, assim como um avião ou um navio, e como todo veículo, foi feito para transportar pessoas e coisas. Essa é a função genérica dele, e podemos rastrear máquinas com esta mesma função até a invenção da roda.

O que mudou desde então? Basicamente a quantidade de pessoas e coisas que se pode e quer transportar, e é daí que vêm todas as formas de carros no mercado atual. Furgões, vans, hatches, sedãs, peruas, picapes, caminhões, ônibus, todos estes tipos de veículos têm essa mesma função. No entanto, para aplicações específicas, cada um destes esquemas básicos cumpre as tarefas de uma maneira melhor.

Por exemplo, 2 pais com 4 filhos pequenos vão se sentir muito mais satisfeitos com uma minivan do que com um carro esportivo de 2 lugares. A minivan é um carro muito mais amigável, confortável e prático para levar as crianças para a escola, ir ao supermercado e viajar com bagagem para todo mundo.

Um outro exemplo, um piloto quer dar uma volta em um circuito no menor tempo possível. O carro ideal nesse caso não é a minivan e nem o esportivo de 2 lugares, mas um monoposto pensado somente para realizar aquela função. A função genérica de transportar pessoas é a mesma, mas um carro não tem muito a ver com o outro a não ser pelo fato de que têm 4 rodas e espaço para um motorista.

Apesar de anos de desenvolvimento da indústria automobilística terem dividido muito bem os melhores esquemas básicos para as funções específicas, o ser humano é um bicho imprevisível e teima em misturar as coisas.

Muitas vezes isso é o resultado das oportunidades que aparecem no local. Por exemplo, motores de 4 cilindros são os mais preparados no Brasil simplesmente porque são os mais abundantes e com o preço mais acessível.

Outro exemplo, transformar um carro de passeio popular, feito para andar na rua com um certo conforto, em um carro de corridas acontece porque é um caminho mais fácil e barato do que projetar e construir um bólido específico para as pistas.

A gente sempre, por teimosia ou por pura oferta e demanda, arruma novas funções e objetivos para os carros. É claro que pegar uma máquina que foi pensada, construída e otimizada para realizar uma função específica dedicada e transformá-la em uma máquina que consiga ter o desempenho desejado em uma aplicação diferente requer um processo de engenharia parecido com o processo de criação e desenvolvimento do projeto original.

O primeiro passo para transformar um carro de passeio em qualquer outra coisa é descobrir o que é essa coisa. No caso deste artigo, essa coisa é um carro de pista, e o objetivo de todo carro de pista é cobrir uma distância no menor tempo possível. Para atingir esse objetivo, o piloto precisa fazer o seguinte:

- Acelerar o carro até a velocidade máxima possível;
- Frear o carro o mais tarde e dentro da menor distância possível;
- Contornar as curvas no menor tempo e carregar a maior velocidade possível na saída dela.

Assim, o carro precisa ter os seus sistemas de frenagem, de trem de força e de suspensão repensados para que seja possível ter uma performance melhor do que a do carro original em pista, senão for assim, é simplesmente desperdício de dinheiro.

## Engenheirando o carro para acelerar mais rápido

Quando lidamos com um carro de pista, acelerar é mais do que pisar no pedal da direita em linha reta, como é comum de se pensar em um carro de passeio. Temos basicamente duas situações em que estaremos acelerando o carro, uma limitada pela tração e a outra limitada pela potência. Essas duas situações se manifestam em uma largada e na saída de curvas.

Em uma largada, precisamos dosar o acelerador para usar o máximo de aderência disponível, lançando o carro no menor tempo possível até a velocidade mais alta que a gente possa alcançar antes de frear. Em uma saída de curva temos mais ou menos a mesma situação, precisamos retomar a aceleração o mais rápido possível para lançar o carro até o próximo ponto de frenagem.

Quando estamos discutindo sobre carros com caixas de câmbio, como é comum nos carros de passeio disponíveis no mercado brasileiro e é o caso do Celta, precisamos lidar com a relação de transmissão de cada marcha para conseguirmos usar a chamada faixa útil do motor e aproveitar a maior aceleração que ele pode nos dar, seja na largada ou nas saídas de curva.

Na largada o cálculo é simples, a marcha escolhida não deve multiplicar o torque máximo do motor acima do limite de aderência dos pneus. Já nas saídas de curva o objetivo é ter uma relação de marcha que mantenha o motor próximo às rotações de torque máximo enquanto o carro estiver na velocidade mínima de curva, assim, quando o piloto acelerar, teremos a máxima entrega de torque do motor imediatamente e seguiremos até a rotação de potência máxima antes da próxima troca de marcha.

Eu poderia escrever todas as equações que modelam esse fenômeno de aceleração, mas é muito melhor ver o resultado delas em um gráfico como o abaixo.

![Curva de torque em função da velocidade do carro para o Celta 1.4]({%- asset_path curva-torque-velocidade-celta.png -%})

A gente usa o gráfico acima para visualizar o quanto de força o motor e câmbio entregam para cada marcha, e de quebra o quanto a resistência ao movimento do carro (aerodinâmica e também dos próprios pneus) consome desta força. A linha quase horizontal em amarelo é a capacidade de aderência do carro.

Plotei essas linhas a partir do motor 1.4 Família 1 da GM, com o câmbio específico das versões 1.4 do Corsa C e do Prisma. Um Celta com esse motor 1.4 e esse câmbio não existiu, mas como aqui estamos escrevendo sobre um projeto de um Celta de pista isso é possível, e é o que eu gostaria de ter feito com o meu antigo carro.

O gráfico mostrado anteriormente indica que em 1ª marcha a gente romperia o limite de aderência do Celta, e que em 2ª marcha deixaríamos de usar quase 1000 N de força de aceleração. Nesse caso, para melhor aproveitarmos o Celta em alguma prova automobilística, faria mais sentido encurtarmos a primeira ou a segunda marcha para não deixar de usar essa força a mais nas largadas. Em track days, onde eu tinha como objetivo usar o carro, a largada não é problema porque sempre damos voltas lançadas, então podemos deixar a primeira marcha como ela está.

Até agora comentamos sobre a largada, mas ainda precisamos analisar as saídas de curva. Elas precisam levar em consideração as curvas, como é óbvio, e isso implica em uma outra obviedade, cada circuito tem seu conjunto de curvas, e a não ser que as curvas sejam muito parecidas de pista para pista, a realidade é que precisaríamos de um conjunto de relações de marcha específico para cada circuito a fim de virarmos o melhor tempo que o carro pode nos entregar.

Essa variedade de situações em que o carro precisa performar no mais alto nível é um dos motivos para os carros da F1 terem 8 marchas, por exemplo. No caso do Celta discutido aqui no artigo, eu usaria-o muito provavelmente em eventos de track day em Interlagos, por ser o autódromo mais próximo de mim (e por ser um dos mais legais do Brasil, claro).

Acabei de comentar que precisamos levar em consideração as curvas para analisarmos as modificações no trem de força do Celta, mas o que exatamente a gente precisa analisar da curva? A resposta é simples, precisamos analisar o quanto o carro consegue carregar de aceleração lateral por ela, assim podemos calcular a velocidade em que ele estará a partir do momento em que vamos pisar no acelerador na saída de curva.

A inclinação da pista e o raio da curva são as coisas que precisamos conhecer da curva em específico para, juntamente com as informações do coeficiente de atrito dos pneus e do quanto de carga vertical o carro está aplicando nos pneus, chegarmos a um valor de aceleração lateral máximo que vai ser carregado na curva. Pois bem, usando o Google Maps eu tracei a linha que seguiria se estivesse pilotando o Celta em Interlagos e medi os raios de curva de interesse aqui para a gente, a inclinação das curvas vou ignorar simplesmente porque não sei onde encontrar essa informação e sinceramente não acho que seriam tão influentes aqui nessa análise. O resultado desse levantamento é a tabela abaixo:

![Velocidade máxima do Celta nas curvas de Interlagos]({%- asset_path velocidade-interlagos-celta-1.4.png -%})

Se as marchas estivessem muito bem escalonadas para o circuito de Interlagos a gente deveria ter pelo menos uma célula verde nas colunas que analisam a diferença entre a relação de transmissão ideal e a relação de transmissão das 5 marchas. Isso indicaria que estamos em uma faixa de 10% de tolerância da relação de transmissão ideal.

Em linhas da tabela acima em que não há nenhuma célula verde temos um indicativo de que nessas curvas poderemos ter um desconforto com o câmbio, pode parecer que o carro ou está muito arisco e em alto giro ou muito xoxo, sem potência e em giros baixos demais quando a diferença percentual é muito grande (> 10%).

Para resolver esse problema teríamos três opções:

1. Melhorar a curva de torque do motor, fazendo-a ter a famosa mesa de torque durante a maior parte das rotações (como acontece com os motores 1.0 TSI da VW, por exemplo);
1. Trocar as relações de marcha para melhorar a performance nessas curvas em específico (o que não é o mais interessante porque isso pioraria a situação em outras curvas);
1. Adicionar marchas ao Celta (impossível sem trocar o câmbio).

Temos uma bucha, em outras palavras, mas vamos em frente. Para investigar com mais profundidade, acabei calculando a rotação em que o motor estaria em cada uma das marchas para as curvas.

![Rotação de motor do Celta nas curvas de Interlagos]({%- asset_path rotacao-interlagos-celta-1.4.png -%})

As células em verde indicam que a rotação está entre 4300 e 5000, que é a faixa onde o motor consegue desenvolver o máximo torque. Aliás, no gráfico abaixo eu coloquei a curva de torque (azul) e a de potência (vermelho) em função da rotação do motor para que a gente pudesse visualizar a quase mesa de torque entre 4000 e 5000 rpm e a área próxima à potência máxima ali nos 6000 rpm.

![Curva de torque e potência 1.4 Família 1 GM]({%- asset_path torque-potencia-1.4-f1-gm.png -%})

As curvas 1, 8 e 9 seriam prejudicadas na retomada da aceleração porque a gente cairia no vale entre 3000 e 4000 rpm da curva de torque.  As curvas 11 e 12 também cairiam fora da faixa ótima mas ainda longe do vale, e por isso não devem sofrer tanto. Voltando às 3 opções para resolver esse problema, depois de analisar mais a fundo o escalonamento das marchas, eu focaria em remover, ou ao menos minimizar aquele vale da curva de torque. Acho que seria o caminho com menos investimento necessário para uma melhoria significativa.

## Engenheirando o carro para frear melhor

Frear parece ser uma coisa mais fácil do que acelerar, visto que há mais coisas ajudando esse fenômeno a acontecer quando o comparamos com a aceleração. Esses auxílios vêm na forma de resistência do ar, resistência ao rolamento dos pneus e até a resistência mecânica dos eixos e juntas ao movimento. Por isso, podemos ter a impressão de que esse sistema é menos importante e que precisa de menos atenção para funcionar melhor. Isso não é verdade, especialmente no caso do Celta, que tem seu peso majoritariamente no eixo dianteiro.

Em uma freada, por conta da inércia, a já pouca carga do carro apoiado no eixo traseiro fica ainda menor e a carga no eixo dianteiro maior. Isso pode acarretar em uma perda da traseira na entrada de curva e em uma sobrecarga dos pneus do eixo dianteiro. Para minimizar esse fenômeno de transferência de carga para o eixo dianteiro, a gente precisa diminuir a altura do centro de gravidade do carro, e a gente faz isso rebaixando-o.

Para rebaixar o carro, precisamos trocar as molas por molas de menor comprimento (geralmente mais rígidas, para evitar de bater o assoalho na pista) e idealmente trocar os amortecedores para lidar com esse curso mais curto da suspensão. Essa modificação afeta também o comportamento em curvas, porque a rigidez das molas influencia o quanto de carga a gente tem apoiado em cada roda em uma curva, e consequentemente o equilíbrio do carro.

Além desse problema com a rigidez das molas, o rebaixamento do carro também afeta a geometria de suspensão. Isso acaba afetando também o equilíbrio do carro, e o desgaste dos pneus. Infelizmente não tenho os pontos de fixação da suspensão do Celta para simular um rebaixamento, analisar a geometria e calcular as novas molas para essa nova situação, mas posso registrar aqui que eu analisaria a possibilidade de ajustar a geometria dos centros de rolagem (o que poderia implicar em uma nova peça acessória à manga de eixo do Celta) antes de pensar nas molas, e só rebaixaria se fosse possível fazer essa modificação, porque se não a gente acaba tendo mais problemas do que benefícios rebaixando o carro.

Voltando aos freios do Celta, eu trocaria os discos originais sólidos por discos ventilados do mesmo tamanho, menos propensos a entortarem e flutuarem durante a frenagem. Também trocaria as pastilhas de freio por pastilhas da Tecpads, que são mais abrasivas (gerando uma maior força de frenagem para a mesma força no pedal) e resistem melhor às altas temperaturas frequentes na pista, exigindo menos voltas de cooldown. Para complementar esse pacote, trocaria os flexíveis da linha de freio pelos chamados Aeroquip, que são mangueiras flexíveis feitas com material bem menos dilatável do que o polímero comum dos flexíveis de freio do Celta. Além disso, para fechar com chave de ouro, trocaria o fluido de freio por um DOT 5.1 voltado para uso em pista, e fabricaria dutos de ventilação para os freios, a fim de os deixar o mais fresquinho possível.

## Engenheirando o carro para contornar curvas melhor

Carros são veículos terrestres, assim como bicicletas, triciclos e quadriciclos. Como o nome sugere, são veículos suportados pelo chão, pela terra, diferente por exemplo de aviões e navios, que são suportados pelo ar e pela água, respectivamente. A gente pode dividir os veículos terrestres em duas grandes categorias, guiados e não-guiados.

Os guiados são os que estão restritos a se mover por um caminho definido, como um trem. Já os não-guiados podem se mover, por escolha do motorista, em várias direções pelo solo, tanto em estradas asfaltadas quanto em estradas de terra. Eles conseguem fazer isso por conta da interação entre os pneus e o asfalto, e esse é um assunto que literalmente dá para escrever um livro e ainda falta coisa para comentar (especificamente sobre pneus eu tenho 2 livros e em todos os outros sobre dinâmica veicular há um capítulo sobre os pneus, de tão importante que são essas coisas escuras).

Pois bem, não vou escrever aqui sobre modelagem de pneus e nem sobre os fenômenos viscoelásticos de histerese que permitem que esses pneus gerem forças para que o carro faça a curva, só vou comentar que para que um carro faça curvas bem, os 2 eixos dele precisam gerar forças proporcionais à carga que eles estão levando. Se um carro, como é o caso do Celta, tem mais carga no eixo dianteiro do que no eixo traseiro, os pneus do eixo dianteiro vão precisar gerar mais forças do que os pneus do eixo traseiro na interação com o asfalto para que o carro faça a curva.

Como os pneus geram essas forças? Se deformando. Assim, se um carro tem os 4 pneus iguais, mas tem mais carga no eixo dianteiro, os pneus dianteiros vão se deformar mais (e consequentemente ter maior desgaste). O Celta sendo um carro que originalmente tem os 4 pneus iguais vai sofrer desse problema. Essa deformação maior nos pneus da frente é o que dá o comportamento de saída de frente, também chamado de subesterço ou understeer em inglês.

Para resolver esse problema temos alguns caminhos:

1. Retirar massa do eixo dianteiro e passá-la para o eixo traseiro;
1. Retirar carga do eixo dianteiro e passá-la para o eixo traseiro.

Reparem que carga e massa não são sempre a mesma coisa. A gente consegue, através da geometria de suspensão e da rigidez das molas, distribuir a carga que cada eixo suportará em uma curva, mas a distribuição de massa do carro permanece igual. Eu demorei um tempo para me acostumar com essa ideia, mas enfim, é assim que a realidade acontece.

O que eu faria para meu Celta de pista contornar melhor as curvas? Como escrevi nos tópicos anteriores, rebaixaria o carro para que a gente transferisse menos carga do lado interno para o lado externo da curva, mas só faria isso se fosse possível manter a geometria de suspensão bem próxima da original, evitando precisar colocar muita cambagem negativa por conta da geometria errada e evitando precisar de molas muito fora da proporção original de rigidez para compensar as alturas de centro de rolagem diferentes quando comparadas com o carro original.

Só isso já me daria uma vantagem bem grande em comparação aos Celta de pista feitos hoje em dia, que ignoram esses pontos discutidos aqui. Para finalizar esse tópico e me ajudar tanto com o comportamento em curvas quanto com aceleração e frenagem, eu usaria pneus de medidas diferentes nos eixos dianteiro e traseiro do Celta.

Faria isso por conta da deformação diferente que esses pneus teriam, o que ajudaria a conter o subesterço natural do Celta. As medidas seriam 195/55 R15 na frente e 165/70 R13 na traseira, pneus de rua radiais mesmo. Montaria o carro assim e veria qual o comportamento ele teria, a partir daí conseguiria validar o que foi feito na geometria e rigidez de molas e alteraria o que fosse necessário chegar o mais próximo possível de um comportamento neutro.

## Conclusão

Além dessas modificações eu removeria toda a parte de estofado, bancos originais, painel, chicote elétrico que não fosse usado, máquina de vidro, os vidros laterais e traseiros (substituiria-os por policarbonato) e construiria uma gaiola em aço dentro do Celta para servir tanto de célula de sobrevivência quanto como um reforço de rigidez.

Com tudo isso acredito que teria um carro de pista por volta de 40 mil reais na data de hoje, 12/12/2021, que não me daria dor de cabeça em trackdays e que não me custaria os olhos da cara para manter.
