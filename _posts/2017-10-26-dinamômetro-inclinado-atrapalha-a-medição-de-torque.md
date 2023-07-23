---
layout: post
title:  "Dinamômetro inclinado atrapalha a medição de torque?"
date:   2017-10-26 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
---
Para quem gosta de carro mexido assistir puxadas no dinamômetro é um bom passatempo. Em uma tarde que eu estava com um tempo livre eu fiz isso. Fuçando no YouTube eu vi vários dinamômetros de rolo diferentes. Alguns eram subterrâneos, outros eram em uma plataforma elevada e alguns eram inclinados. Esses inclinados eram usados para medir carros com tração em 2 rodas somente. Na hora eu lembrei do comportamento dos Fórmula Vee no laranjinha em Interlagos.

Talvez você esteja pensando "O que tem a ver uma coisa com a outra?". A resposta é que o laranjinha é uma curva em subida, que deixa o carro inclinado e faz com que os Fórmula Vee (pelo menos todos os que eu vi até agora), saiam de frente porque falta carga vertical em cima dos pneus dianteiros. "Ainda não entendi". No dinamômetro inclinado as rodas motrizes vão ter menos carga nelas porque uma parte do peso do carro vai ser apoiada nos pneus que estão no mesmo nível do chão. Isso pode diminuir a capacidade de aderência dos pneus que estão no rolo, e a aderência é o que põe o torque no chão, no caso aqui, no rolo.

Aí eu me fiz a pergunta que dá título ao post, esse tipo de dinamômetro inclinado atrapalha a medição de torque? Eu pensei um pouco e cheguei à conclusão de que só atrapalharia se a marcha em que a medição fosse feita jogasse mais força nos pneus do que eles conseguissem passar para o rolo. A solução nesse caso seria passar para a marcha seguinte (onde a força jogada nos pneus é menor) e realizar a medição. Até o momento em que eu estou escrevendo esse post o único inconveniente que eu encontrei é o tempo de medição, que é mais longo quando a gente usa uma marcha mais longa.

## Calculando a aderência no rolo

Dá para calcular o quanto de aderência um carro vai ter no rolo, calcular o quanto de torque o motor jogaria em cada marcha nos pneus, comparar os 2 e ver se uma mudança na inclinação do rolo causaria algum problema de aderência e consequentemente um problema na medição de torque. A fórmula usada para calcular o quanto de carga vertical os pneus teriam no rolo é:

Peso no eixo dianteiro = Peso total x (distância do centro de massa até o eixo traseiro x cos θ - sen θ x altura do centro de massa) / distância entre-eixos

Vamos supor que um carro com tração dianteira, com 65% de carga suportada pelo eixo dianteiro, peso de 915 kg, entre-eixos de 1400 mm e altura do CG de 400 mm seja colocado em um dinamômetro. Se este dinamômetro for plano, a carga em cima do eixo dianteiro é 5834 N. Se o dinamômetro for inclinado em 15°, a carga é 4972 N. Assumindo um coeficiente de atrito de 0,6 entre os pneus e o rolo de aço do dinamômetro, temos que a capacidade de aderência (força de atrito) é de 3500 N para o plano e 2983 N para o inclinado.

Como os números mostram e como eu comentei antes, essa inclinação tira capacidade de tração, mas inclinar o carro só influenciaria na medição se o motor e o conjunto de transmissão estivessem transmitindo torque ao rolo em valores entre 2983 e 3500 N no plano, assim, quando inclinado o carro deslizaria no rolo porque não haveria mais aderência disponível. É um jeito de provar pelos números o que eu estava pensando quando lembrei dos Fórmula Vee no laranjinha.
