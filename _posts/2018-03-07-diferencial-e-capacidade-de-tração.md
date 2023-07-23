---
layout: post
title:  "Diferencial e capacidade de tração"
date:   2018-03-07 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
---
Um diferencial pode atrapalhar na reta? Pode. Dependendo do nível de aderência dos pneus e do torque disponível, pode atrapalhar sim. Eu vou mostrar o porquê disso com números no próximo tópico, mas para você entender de onde veio esse post e não ficar boiando em algumas partes do texto, eu sugiro que você leia o post sobre o meu fim de semana como engenheiro na F-Inter.

O carro pelo qual eu estava responsável estava com as cargas entre as rodas desequilibradas. O piloto tinha algum problema nesse carro que fazia ele perder potência nas retas, coisa de 12 km/h em 2 carros iguais nas mesmas condições de pneu e pista.

Para mim, além de algum pequeno problema no motor do carro, a capacidade de tração do carro estava comprometida por causa do diferencial aberto e do desequilíbrio de cargas nos pneus. Como não tive acesso aos dados da corrida, fiquei com dúvida se o meu raciocínio tinha algum sentido. Antes de explicar esse raciocínio, sugiro que leiam esse [post do FlatOut](https://www.flatout.com.br/como-funciona-e-para-que-serve-o-diferencial-dos-carros/), que explica como um diferencial funciona.

## Diferencial e capacidade de tração

No carro da Fórmula Inter o torque é dividido igualmente para as duas rodas, pois as engrenagens planetárias têm o mesmo tamanho, o mesmo número de dentes e o diferencial é aberto. A força que o pneu pode transmitir ao solo, e consequentemente, movimentar o carro, é este torque dividido pelo raio do pneu. Acontece que esta força, oriunda do torque do motor, só vai movimentar o carro enquanto o pneu conseguir transmitir isso ao solo por meio da aderência.

Esta força de aderência, ou atrito, é proporcional à força vertical agindo no pneu. Quanto maior for essa força vertical, maior será a força de atrito. No caso do carro #06, o pneu traseiro esquerdo era o pneu com menos força vertical (40 kg de diferença), assim, se o torque enviado às duas rodas é igual, o pneu do lado esquerdo destracionaria antes do pneu do lado direito, o que poderia causar uma perda de performance, pois quando o pneu derrapa o carro não é movimentado para a frente tudo o que poderia ser, e a tendência é que o piloto segure o acelerador para que o carro pare de destracionar e vá para a frente.

Em outras palavras, o pneu esquerdo limitaria o conjunto. Isso foi o que eu pensei quando olhei para a caixa de câmbio e aquela diferença de velocidade do carro #06 para os ponteiros na reta oposta. O que eu não pensei na hora, e o que nem o Tadau e nem o Seu Minelli perceberam, é que a resposta para a minha pergunta estava no próprio conceito inicial da minha suposição. Esse desequilíbrio nas cargas verticais só afetaria a performance se o torque do motor fosse o suficiente para extrapolar o limite de aderência.

Não tenho a curva de torque do motor do F-Inter MG-15, que é um Ford Duratec 2.0. No entanto, tenho uma curva de torque de um Formula Ford genérico, que tem uma preparação muito parecida com a do MG-15, e níveis de potência e torque similares. Abaixo é possível ver esta curva de torque.

![Curva de torque F-Ford]({%- asset_path curva-torque-f-ford.png -%})

No início da reta oposta, o carro #06 estava a aproximadamente 153 km/h, e seu motor estava por volta das 5450 rpm. O tamanho dos pneus traseiros utilizados na categoria são 265-540 VR13, o que nos dá um raio de 0,270 m, e uma relação de transmissão próxima de 3,63:1 do motor para as rodas.

Supondo que a curva de torque seja a mesma do Fórmula Ford genérico, estariam chegando às rodas 689 Nm de torque. Dividindo isso pelo diferencial e pelo raio do pneu, temos 1276 N de força agindo no contato do pneu com o asfalto. Supondo que a distribuição de peso seja de 45% na frente e supondo que o peso do carro com o piloto e combustível seja de 590 kg, teríamos 1592 N em cada pneu traseiro.

O pneu utilizado é um Pirelli P Zero de composto duro, podemos assumir um valor conservador baixo de 1,1 para o coeficiente de atrito, o que nos daria uma capacidade de tração de 1751 N por pneu. Além da carga estática, teríamos a transferência de carga devido à aceleração e também a carga aerodinâmica, o que só fariam aumentar a capacidade de tração.

Os valores são aproximações e várias suposições foram feitas, mas podemos perceber que a capacidade de tração é maior do que a capacidade do motor fornecer torque, o que acaba respondendo minha pergunta, o diferencial, neste caso, não influenciou em nada na performance, e havia sim algo de errado com o motor do carro #06.

Extrapolando um pouco a análise, 40 kg são 392 N em termos de força, mesmo subtraindo isto dos 1751 N de capacidade normal de tração, ainda teríamos 83 N de aderência, novamente, sem contar com a transferência de carga e a carga aerodinâmica, que só fariam esse número crescer.

Se tivéssemos um pneu pior, por exemplo um pneu de rua com 0,8 de coeficiente de atrito, esses 40 kg de diferença se fariam muito mais importantes e poderiam ocasionar a perda de performance que tinha pensado, especialmente se não houvessem dispositivos aerodinâmicos no carro.

Um último comentário sobre esta ideia que tive, quando a pista estava úmida, o coeficiente de atrito dos pneus de chuva pode ter baixado um pouco, e talvez algo parecido com o que descrevi poderia acontecer, mas o piloto não se queixou de nada, e um destracionamento por desequilíbrio das cargas poderia muito bem ter sido disfarçado pelo problema de óleo na pista.

## O que a gente tira de tudo isso?

Definitivamente o diferencial pode causar um problema em retas, mas nesse caso ele não influenciava em nada, o carro tinha mais chão do que motor, como o pessoal fala por aí. Eu fui na etapa seguinte da F-Inter como visitante e conversei com o Alexandre (piloto do carro) sobre o que tinha acontecido. Perguntei se eles tinham achado alguma coisa no motor e ele me disse que o sensor do acelerador estava com um problema, a borboleta abria mais tarde do que o piloto pisava. Isso era o que estava causando a diferença de velocidade nas retas.
