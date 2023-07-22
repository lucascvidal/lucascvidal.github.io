---
layout: post
title:  "Dinâmica automobilística - 02 - Aceleração e frenagem"
date:   2016-01-24 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
---
Nas primeiras partes desta série vocês viram as características básicas do pneu e de seu comportamento, observados pelo ponto de vista da dinâmica de um carro. Agora que vocês já têm uma noção do que acontece com os borrachudos, podemos continuar a clarear alguns tópicos deste tema.

Não dá pra começar a discutir quais molas, amortecedores, barras e rodas comprar para seu projeto sem entender o que acontece fisicamente com o veículo e sem ter um objetivo claro para o projeto. Em relação ao objetivo de cada projeto não posso dizer nada, afinal, cada um supostamente sabe o que quer, mas posso apresentar o que ocorre com carros em determinadas situações e como, às vezes, o senso comum e a nossa própria experiência ou conhecimento limitado nos faz tomar decisões que podem não ser as melhores possíveis. Para tentar facilitar a compreensão (e escrita também) do tema, vamos dividi-lo em três partes, longitudinal, lateral e vertical. Esta postagem é sobre a dinâmica longitudinal, ou, como é mais conhecida por todos, sobre a aceleração e frenagem.

## Distribuição e transferência de carga

Um carro é, geralmente, apoiado em 4 pneus, divididos em 2 eixos. Dependendo de onde estão as coisas, como o motor, passageiros e o tanque de combustível, um eixo do carro pode acabar suportando um peso maior do que o outro. Se estivermos em um local plano, com o carro parado, essa distribuição de peso não muda com o tempo, e é este valor que vemos por aí, em revistas, sites de fabricantes e outros. É chamada de distribuição de peso estática. Cabe dizer que ela não é sempre a mesma, por exemplo, se pararmos em uma rampa, a distribuição de peso será diferente do plano. Tudo isso é óbvio, mas às vezes acabamos esquecendo justamente por ser tão óbvio.

Bom, até agora as coisas estão paradas, mas o que acontece quando as coisas começam a se mexer? Quando o carro se movimenta mudando de velocidade, ou seja, sofrendo uma aceleração, ocorre uma transferência de carga entre os eixos. Essa transferência ocorre por que são os pneus e rodas que geram as forças de tração ou frenagem, e como eles não estão alinhados com o centro de gravidade, um momento, ou torque, é criado, e aí o carro se apoia onde dá para segurar as pontas.

[Neste vídeo](https://www.youtube.com/watch?v=miENduXJivI&t=1349s) é possível ver vários Opalões transferindo carga para o eixo traseiro.

As transferências de carga são boas para a dinâmica veicular? Em outras palavras, fazem o carro ir, parar, ou virar mais rápido? Depende, a transferência de carga retira carga de um eixo e o passa a outro, isso tem influência direta no comportamento dos pneus.

Imagine um veículo de tração dianteira, com distribuição estática de peso de 60% na frente e 40% na traseira. Em uma situação de aceleração, carga é transferida do eixo dianteiro para o eixo traseiro, imaginemos que o carro seja potente o suficiente para alterar essa distribuição para 30% na frente e 70% na traseira, o que acontece? Os pneus dianteiros terão uma força vertical menor aplicada neles, quando comparados com os traseiros. Se o objetivo é acelerar o mais forte possível, neste caso as transferências de carga não são boas. Lembre-se de que os pneus são capazes de gerar mais forças de aceleração, frenagem ou laterais quando a força vertical aplicada neles é maior. Se as rodas que vão tracionar têm menos força vertical, sua capacidade de acelerar fica comprometida.

Para os carros de tração traseira, a história é um pouco diferente. A transferência de carga para o eixo traseiro aumenta a força vertical nos pneus, que acabam sendo capazes de entregar maior aceleração. Os carros com tração nas quatro rodas acabam ficando no meio do caminho entre as duas alternativas. Dependendo da potência do veículo, a tração integral acaba sendo a melhor alternativa se pensarmos somente em capacidade de tração. Se o veículo for muito potente a ponto de causar perda de contato das rodas dianteiras em aceleração, como é comum em arrancadas, a tração traseira seria melhor, pois aproveitaria toda a carga vertical.

Agora, pensando em uma situação de frenagem, a transferência de carga não é uma coisa boa. Diferentemente dos sistemas de tração, os sistemas de frenagem sempre são instalados nas quatro rodas, assim, em uma situação de freada forte, a transferência de carga vai ocorrer do eixo traseiro para o dianteiro, mas todos os pneus estarão causando-a. Os pneus traseiros terão menos força vertical aplicada neles, diminuindo sua capacidade de frenagem, comprometendo a performance do conjunto. Mas se o pneu dianteiro tiver mais força vertical ele pode compensar o pneu traseiro, não? Difícil falar sem números, e geralmente isso implica em discos de freios maiores e que acabam mais quentes no eixo dianteiro, implicando em um desgaste maior nestes pneus. Além disso, há grande possibilidade de travar a roda traseira com menos carga vertical no pneu traseiro. [Neste vídeo](https://www.youtube.com/watch?v=NBoMTYZAyJc) é possível ver os carros em situação de frenagem forte.

O que seria o mundo ideal, tanto para frenagem quanto aceleração? Tração nas quatro rodas, distribuição de peso de 50% na frente e 50% na traseira, em todas as situações. Isso é impossível de se obter, pois não há como acabar com a transferência de carga. Ela é intrínseca à aceleração do veículo, há meios de minimizá-la, mas ela sempre ocorrerá.

## Um pouco de engenharia

Como havia comentado nas primeiras postagens desta série, a engenharia gosta de usar modelos matemáticos para prever as coisas e imaginar possíveis resultados. Neste caso, não é nada diferente, no entanto, esse modelo é um pouco mais chato de entender do que o apresentado na outra postagem, mas é na verdade somente uma aplicação da segunda lei de Newton, aquela que a gente não presta muito atenção na aula de física do ensino médio.

![Forças atuantes no veículo na vista lateral](https://www.researchgate.net/profile/Jony-Eckert/publication/297918368/figure/fig3/AS:668910516977673@1536492103554/Figura-23-Forcas-que-atuam-no-veiculo-GILLESPIE-1992.jpg)

Não vou entrar em detalhes, mas as cargas suportadas por cada eixo consistem de uma parcela estática e de carga sendo transferida da dianteira para a traseira e vice-versa. Fazendo uma somatória de momentos em A e B pode-se obter algumas equações, para não ficar muito entediante, vou simplificá-las para uso no plano, em situações estáticas e com aceleração. Primeiro no plano e sem se mexer:

Wf = W*c/L

Wr = W*b/L

Em uma situação de aceleração, partindo do zero:

Wf = W*(c/L - ax*h/g*L)

Wr = W*(b/L + ax*h/g*L)

Em uma situação de frenagem, os sinais da soma se invertem. Se analisarmos as equações, um veículo com o CG (centro de gravidade) mais baixo e um entre-eixos maior transfere menos carga. Hipoteticamente, se o CG estiver no solo, na mesma linha que o ponto de contato dos pneus, ou se o entre eixos for infinito, não há transferência de carga. Como escrevi parágrafos acima, é impossível acabar com as transferências.

## O próximo capítulo

Apresentadas as características dos pneus e a transferência de carga na aceleração e frenagem, veremos como é o comportamento dos carros nas curvas. Se se interessarem pelo assunto e quiserem se aprofundar ainda mais, o livro do Gillespie, Fundamentals of Vehicle Dynamics, e o do Milliken, Race Car Vehicle Dynamics, são ótimas fontes de informação.
