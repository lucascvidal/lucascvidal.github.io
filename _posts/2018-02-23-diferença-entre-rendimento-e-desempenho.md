---
layout: post
title:  "Diferença entre rendimento e desempenho"
date:   2018-02-23 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
categories: ["Automotive Engineering"]
---
Algumas pessoas confundem rendimento com desempenho do motor. Na engenharia mecânica, essas são duas coisas diferentes e não têm como ser sinônimas.

Na cabeça dessas pessoas aumentar o quanto um motor pode produzir de torque e potência é aumentar o seu rendimento. Se você tem alguma familiaridade com motores e com o conceito de rendimento, sabe que isso pode ser verdade. A palavra-chave em foco é _pode_.

Vou explicar a diferença entre desempenho e rendimento de um jeito simples e depois entro mais a fundo nas minúcias técnicas. Imagine que você faz 300 ml de suco de laranja e que você use 4 laranjas para isso. Vamos supor que cada laranja tenha 150 ml de suco dentro de si. 4 laranjas teriam então 600 ml, mas o resultado final é de 300 ml de suco no copo. A definição de rendimento é o quanto você usa do quanto você tem disponível, nesse caso, a gente vai usar 300 ml de 600 ml disponíveis, ou seja, 300/600 = 0,5 = 50% de rendimento. Se eu fizer 600 ml de suco com 8 laranjas, o rendimento continua sendo de 50% (600/1200). Apesar da quantidade de suco ser maior, o rendimento é igual. Se você por acaso conseguir fazer 450 ml de suco com as mesmas 4 laranjas disponíveis, aí sim você aumentaria o rendimento de 50% para 75% (450/600).

Levando o exemplo para os carros, produzir 400 cavalos enquanto você poderia produzir 1200 cavalos é a mesma coisa que produzir 100 cavalos enquanto poderia produzir 300 cavalos, do ponto de vista do rendimento. O desempenho do motor aumenta, mas não o seu rendimento.

Para reforçar, rendimento não é desempenho. Agora vou detalhar isso com um pouco mais de rigor técnico.

Em qualquer máquina que realize algum trabalho há uma perda de energia. Por exemplo, se um carro queima etanol para se movimentar, uma parte da energia dessa queima não vai virar movimento, vai se transformar em outra coisa (o mais comum é se transformar em calor). Na verdade, falar que a energia é perdida não é o mais correto, visto que ela se transformou em outra forma de energia e não simplesmente sumiu, então o termo dissipada é melhor. Em um carro há inúmeros jeitos que a energia pode ser dissipada. Um dos mais evidentes é o sistema de transmissão. A potência que é gerada no virabrequim do motor não é a mesma que chega nas rodas. Nesse caso isso acontece devido ao atrito da embreagem, à inércia do câmbio, diferencial e rodas, além da histerese dos pneus.

Provavelmente você já deve ter visto uma puxada em dinamômetro de rolo e ouviu alguém tentando estimar o quanto de potência estaria sendo gerada no motor a partir da medida nas rodas. Se desconectássemos o motor do carro e fizéssemos um ensaio dele em dinamômetro de bancada, teríamos o valor real de potência gerada no virabrequim. Dividindo o valor de potência nas rodas (potência útil) pelo valor de potência no virabrequim (potência total recebida), a gente encontra o rendimento mecânico do sistema de transmissão.

η = Pu/Pt

Na transmissão de força e potência, esse valor é sempre maior que 0 e menor que 1. Quando extrapolamos o conceito de rendimento para outras coisas, é possível que o valor seja maior do que 1. Um exemplo disso é no caso de um motor sobre-alimentado com um turbo ou um compressor. Nesse caso, o rendimento volumétrico do motor pode ser maior do que 1.
