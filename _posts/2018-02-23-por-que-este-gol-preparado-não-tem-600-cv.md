---
layout: post
title:  "Por que este Gol preparado não tem 600 cv"
date:   2018-02-23 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
---
Este post é sobre [este VW Gol](https://www.youtube.com/watch?v=l1i7_h1RuiU) preparado.

Potência não é nada sem controle. Esse slogan da Pirelli é tão bom e tão correto (na minha opinião) para a engenharia automobilística que deveria estar em todos os livros sobre o assunto e ser mencionado em todas as aulas em faculdades, seminários, palestras e até nas conversas de postinho. Se para bom entendedor meia palavra basta, esse slogan já respondeu a pergunta que dá título ao post. Se você (como eu) acha que a resposta é muito curta e gostaria de mais detalhes, continua lendo que eu vou destrinchar algumas coisinhas e dar um respaldo técnico para ela.

Primeiro, acho importante definir o que seria o controle que a Pirelli usa no slogan. Considerando que é uma fabricante de pneus, eu acho que o que eles queriam dizer com esse slogan é que não adianta ter números enormes de potência se você não consegue colocar toda essa potência no chão. Aí a gente pode concluir que o controle, nesse caso, é aderência.

Complementando a resposta, o Gol em questão não tem 600 cv por que ele não tem aderência suficiente para colocar toda essa potência no chão. E eu não estou dizendo nada que o dono mesmo não diga nos seus próprios vídeos, apesar de ele dar essa resposta com palavras mais parecidas com "Galera, não vamos esquecer que é um Gol, com 250 cv já destracionava de segunda".

Mas o que é aderência? E como a gente pode usar a engenharia para prever o quanto de potência dá (ou não) para buscar num carro? Ou ainda, como a gente coloca 600 cv em um Gol? Vamos lá.

## Aderência

Para quem quer se aventurar com o projeto de um carro para pista, a resposta curta é que aderência é a capacidade de transmitir forças através dos pneus. Vou detalhar um pouco mais isso. A primeira lei de Newton diz o seguinte:

>Um objeto em movimento tende a se manter em movimento com a mesma velocidade e a mesma direção a não ser que uma força externa aja neste corpo.

Isso é o que ocorre com um carro. Para mudarmos de direção, acelerar ou frear, uma força externa precisa agir no carro. A principal fonte dessa força é a área de contato entre os pneus e o chão. Forças aerodinâmicas também podem mudar a velocidade do carro, mas os pneus são as fontes principais. A capacidade de um carro acelerar, frear e mudar de direção depende da força de atrito, ou contato, entre o pneu e a superfície da estrada, seja asfalto ou qualquer outra coisa.

## O quanto de potência dá para colocar em um carro?

No tópico acima eu escrevi que qualquer movimento do carro depende da aderência disponível dos pneus. Para prever o quanto de potência um carro consegue colocar no chão a gente precisa analisar o quanto ele tem de aderência e o quanto de força chega às rodas. Se há mais força do que aderência, o carro derrapa e não vai para frente. Simples assim.

Ok, mas como a gente vai saber se tem mais força ou aderência? Analisando o quanto de torque o motor e o câmbio colocam nas rodas e verificando o quanto os pneus podem gerar de força de atrito. Vamos começar com a parte dos pneus.

## Analisando a aderência dos pneus

Para estimar o limite de aderência a gente vai usar um modelo matemático. Um modelo matemático é uma interpretação simplificada da realidade, uma fórmula. Se tratando de um hatch de tração dianteira, a fórmula é a seguinte:

Força de Atrito = Força Normal x μ (coeficiente de atrito);

Força Normal = Peso no Eixo Dianteiro;

Assim, juntando as informações:

Força de Atrito = Peso no Eixo Dianteiro x μ (coeficiente de atrito);

Para um pneu de rua o coeficiente de atrito é geralmente entre 0,8 e 0,9. Para um pneu com uma proposta mais esportiva, esse valor fica entre 0,95 e 1,1. Como referência, um slick aquecido pode gerar até 1,6 de coeficiente de atrito.

![Diagrama de forças na vista lateral de um Fiat Uno]({%- asset_path aderencia-uno.png -%})

Eu assisti alguns vídeos do Gol em questão e pincei os dados necessários para calcular a capacidade de aderência dele. O carro tem 900 kg com o dono dentro. Sem o dono a distribuição de peso é de 65% para o eixo dianteiro e 35% para o eixo traseiro. Com o dono eu vou supor que essa distribuição mude para 60% na dianteira. O Gol usa pneus Advan Neova AD08R 205/50 R15, que gera mais ou menos 1,0 de coeficiente de atrito, segundo um teste da Car and Driver americana. Se você já está um pouco mais familiarizado com a física de um carro acelerando, sabe que há uma transferência de carga da dianteira para a traseira, o que deixa o peso efetivo no eixo dianteiro menor. Se a gente estender um pouco mais a análise, é possível prever o quanto de carga será transferida.

Com os dados acima e usando a fórmula da força de atrito:

Força de Atrito = Peso no Eixo Dianteiro x μ (coeficiente de atrito);

Força de Atrito = (0,6 x 900 x 9,81) x 1,0 = 5297 N;

O Gol analisado consegue gerar por volta de 5297 N de força de atrito. Agora que a gente já sabe o quanto de aderência os pneus podem gerar, é hora de descobrir o quanto de torque chega nas rodas. Hoje, dia 23/02/2018, o Gol não tem um motor pronto, então eu fui buscar a curva de torque lá do [começo de 2017](https://www.youtube.com/watch?v=aC_oTiMlc3g), quando o motor tinha sido feito por um cara chamado Keller, aqui de São Bernardo do Campo. Nesse momento um novo motor está sendo feito pela MVS Preparações, de São Paulo, quando ficar pronto talvez eu faça um adendo aqui e calcule as coisas de novo.

## O caminho do torque desde o motor do Gol até o chão

O torque gerado no motor tem que ser transmitido até o chão pelo câmbio, diferencial e pelo pneu. Nesse caminho ele é multiplicado. A curva de torque do motor (WOT) feito pelo Keller é a seguinte:

![Curva de torque do VW Gol em 2017]({%- asset_path curva-torque-keller-gol-darth-vader-murta.png -%})

As relações de transmissão e do diferencial que eram usadas quando esse motor estava no Gol eram:
1. 2,66;
1. 1,69;
1. 1,23;
1. 0,91;
1. 0,73;

Diferencial. 3,89.

Com tudo isso a gente consegue calcular o quanto de torque está chegando nas rodas. No pico de torque na 1ª marcha:

Torque nas rodas = Torque no motor x Relação da 1ª marcha x Relação do diferencial;

Torque nas rodas = 325 x 2,66 x 3,89 = 3363 Nm.

A gente precisa saber o quanto de força os pneus estariam jogando pro chão quando esse pico de torque fosse atingido:

Força no chão (N) = Torque nas rodas (Nm) / Raio do pneu (m)
Força no chão = 3363 / (15 x 0,0254 / 2 + 0,5 x 205 / 1000) = 11478 N

Os 11478 N que o motor, câmbio e diferencial jogam no pneu são maiores do que os 5297 N de aderência que eles têm, então em primeira marcha com certeza o Gol fritaria os pneus.

Para ficar mais fácil de enxergar o que acontece em todas as marchas, a gente pode refazer todas as contas acima para cada ponto da curva de torque e para cada marcha. Em vez de analisar isso pela rotação do motor, a gente analisa pela velocidade do carro. Como a gente calcula a velocidade do carro a partir das marchas? Através da fórmula abaixo:

Velocidade do carro (km/h) = [Velocidade do motor (rpm) / (Relação da marcha x Relação do diferencial)] x (2π / 60) x 3,6 x Raio do pneu (m)

Usando tudo o que eu expliquei até agora, a gente consegue gerar um gráfico igual ao abaixo:

![Escalonamento de marchas do VW Gol preparado]({%- asset_path escalonamento-gol-darth-vader-murta.png -%})

Dá para ver que com 100% do acelerador aberto o Gol teria problemas para tracionar na 1ª e 2ª marcha, porque a força que é jogada nos pneus é maior do que a aderência que eles conseguem prover. Legal Lucas, mas tudo isso que você falou acontece de verdade? Dá para usar esses dados e contas para alguma coisa? Primeiro eu queria mostrar que acontece mesmo, e para isso é só assistir [este vídeo](https://www.youtube.com/watch?v=hHSTwUUtN8Q).

Quando o Rubens Barrichello faz a volta rápida com o Gol dá para ver e ouvir ele falando que o Gol destraciona e que a derrapada aconteceu na mudança de 2ª para 3ª, por volta das 6000 rpm. Se você olhar o gráfico acima vai ver que na curva da 2ª marcha, por volta das 6000 rpm, a força que chega no chão é bem maior do que a aderência, o que prova que tudo o que eu falei até agora funciona sim.

Talvez você tenha percebido, talvez não, mas a gente acabou de usar engenharia básica para confirmar o comportamento real do Gol, o que significa que a gente pode usar as mesmas fórmulas para prever o comportamento dele se alguma modificação no motor, no câmbio ou nos pneus for feita. O melhor de tudo isso é que só foi preciso uma planilha no Excel e um tempinho coletando os dados. Não foi gasto nada com peças novas e quando for efetivamente gasto alguma coisa a tendência é que o investimento trará o comportamento esperado.

## Como colocar 600 cv neste Gol?

Agora é hora de dar a solução para o problema. O que a gente precisa fazer para colocar 600 cv no Gol? Em qualquer projeto de carro, o que importa é o conjunto da obra, não só o motor, não só o pneu, e não só a suspensão. Aqui não é diferente. Para conseguir colocar 600 cv no Gol e aproveitá-los, a gente precisa equilibrar o motor, o câmbio e os pneus. Vamos quebrar essa análise em 3 partes.

Primeiro, a gente precisa gerar 600 cv no motor. As duas coisas a serem destacadas na preparação do motor são o formato da curva de torque e o limite de rotações. O ideal para um número de potência desses para circuito seria ter o que é chamado de uma mesa de torque, que nada mais é do que uma curva de torque bastante próxima de uma linha horizontal. Além disso, seria interessante ter um limite maior de rotações para alcançar essa potência. Basicamente eu estou falando que o Gol precisa de um outro motor. Para esclarecer as coisas, dá uma olhada [neste vídeo](https://youtu.be/7h0dpcnQ9qg?t=264) que o Marcelo da MVS (mesmo preparador do Gol analisado aqui) fez sobre um Gol com quase o mesmo motor deste (que é um 1.9 8V) atingindo mais de 600 cv.

O motor gira quase a mesma coisa que o do Gol analisado aqui, por volta de 7000 rpm, e precisa produzir por volta de 70 kgfm (687 Nm) para alcançar a potência de 629 cv. Além disso, a curva de torque não é nada parecida com uma mesa, tendo uma subida enorme de torque em uma faixa relativamente pequena de rotações (que é onde o turbo acorda). Colocar esse motor em um carro de track day, como é o do Gol analisado aqui, é perda de tempo (sem falar na grana envolvida) porque o carro seria uma merda, para usar um português claro, em retomadas e teria um lag considerável. Cabe dizer que a curva de torque do motor feito pelo Keller tem as mesmas características, e dá para ver em vários vídeos do dono do Gol que ele fica esperando o carro acordar (e perdendo tempo enquanto isso não acontece). Então agora que a gente já sabe como um motor AP modificado para atingir 600 cv entregaria esse torque (e depois de eu escrever que não seria bom para track days), eu vou te dar um exemplo de um motor turbo com mais ou menos a mesma quantidade de torque, mais de 600 cv e com a curva de torque no formato de mesa. Dá uma olhada no gráfico abaixo:

![Escalonamento de marchas do VW Gol preparado]({%- asset_path curva-torque-488-gtb.png -%})

Com a plataforma VW AP é bastante difícil chegar em alguma coisa parecida com a curva acima, mas vamos supor que fosse possível, então qual seria o próximo passo? Preparar o câmbio. Como eu disse lá no começo do post, quando o torque passa pelo câmbio e pelo diferencial ele é multiplicado. Isso acontece porque em uma aplicação comum para um carro de rua o torque do motor geralmente não é suficiente para colocá-lo em movimento. Conforme a gente vai produzindo mais torque no motor, essa multiplicação no câmbio e no diferencial vai se tornando inútil porque na grande maioria das vezes a força que é jogada no pneu ultrapassa a aderência que ele tem com o chão (se ainda tiver dúvida disso, é só reler os tópicos anteriores porque é exatamente isso que aconteceu com o Gol do analisado aqui e foi que eu provei com as contas). Colocando em palavras mais diretas, é preciso refazer o escalonamento de marchas do Gol, deixando-as mais longas. Curiosamente, às vezes o câmbio, diferencial e os pneus não são preparados pela mesma pessoa e não há a preocupação de casar os 3. Aí quando um carro preparado sem ter em mente o conjunto todo de motor, câmbio e pneus vai enfrentar um carro que foi pensado para trabalhar em harmonia o resultado é que o harmonioso sai na frente.

A última coisa que pode ser modificada para conseguir colocar o torque no chão é o pneu. Se o carro está destracionando pouca coisa, aumentar o raio do pneu pode resolver o problema. Colocar um pneu que consiga gerar um coeficiente de atrito maior (como um pneu slick em vez de um pneu de rua) também pode resolver. No caso específico do Gol analisado aqui, nenhuma dessas duas coisas sozinhas seria a solução. Se o dono realmente quisesse colocar 600 cv no Gol, teria que trocar as relações de marcha do câmbio, mexer no formato da curva de torque e aí sim conseguir um ajuste fino com o tamanho do pneu e composto. É possível? É. É viável? De jeito nenhum.

## O que a gente tira de tudo isso?

Eu queria fazer uma última conta aqui, que seria o quanto de torque é possível colocar no Gol, teoricamente. Para isso, vamos supor que o motor estivesse ligado direto nas rodas, sem nenhum câmbio. Assim, o torque máximo que os pneus conseguiriam passar para o chão seria:

Torque máximo dos pneus = Força de Atrito x Raio do pneu;

Torque máximo dos pneus = 5297 x 0,293 = 1552 Nm = 158 kgfm.

Haveria alguns outros problemas, como gerar torque o suficiente pro carro sair de 0 km/h direto pra aproximadamente 88 km/h perto da rotação de marcha lenta (por volta de 800 rpm), e se um mapa de acelerador parcial muito bem feito não fosse prioridade no projeto, muito provavelmente o carro seria impossível de dirigir.

Uma outra coisa que eu queria destacar é que o formato da curva de torque é muito mais importante do que o número máximo de torque e potência que o motor pode produzir. Uma entrega constante de torque, como acontece nos motores elétricos, seria o ideal para aproveitar o máximo de aderência de qualquer carro. Além disso, um motor monstruoso é inútil se acoplado a uma caixa de câmbio que não foi feita para ele. Inclusive, o escalonamento de marchas só deve ser feito depois de conhecer a curva de torque do motor e de ter definido a função que o carro vai ter.

Se você não pode (ou não quer) definir o câmbio em função do motor, você vai precisar definir o motor em função do câmbio. Talvez em outro post eu faça uma análise desse tipo.


