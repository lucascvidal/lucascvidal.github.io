---
layout: post
title:  "Controle de pressão do turbo pela FT600"
date:   2018-05-08 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
categories: ["Automotive Engineering"]
---
Há um tempo eu vi uma série de vídeos falando sobre um recurso da FuelTech FT600. Esse recurso era o Boost Controller, que é um módulo de controle da pressão do turbo. Se você não tiver uma FT600, pode comprar esse módulo separado.

Segundo o próprio manual da FT600, "a função de controle ativo de pressão da válvula wastegate é utilizada para controle mais preciso da pressão de turbo em carros de rua, circuito e principalmente arrancada. O controle pode ser efetuado por tempo após 2-step, marcha e RPM, marcha e tempo após troca, valor único e RPM do motor, além do controle com alvos específicos para arrancada (2-step, 3-step e burnout)."

Nos 2 projetos em que eu vi esse recurso sendo utilizado a intenção era colocar mais pressão de turbo nas marchas mais altas, porque, segundo os preparadores e os donos dos carros, se a gente colocasse mais pressão logo nas primeiras marchas o câmbio não aguentaria.

Essa explicação não me desceu.

## Por que ela não me desceu?

Primeiro, a curva de torque fica bem longe de ser a mais horizontal possível segundo essa abordagem, o que prejudica as retomadas e consequentemente os tempos de volta em pista.

Segundo, essa explicação de poupar o câmbio não tem sentido nenhum do ponto de vista da engenharia. As últimas marchas são as menos resistentes a uma força pontual, como o pico de torque. Isso acontece porque as engrenagens que formam essas marchas têm os dentes ligeiramente menores do que as primeiras marchas, onde o torque é mais multiplicado.

Então colocar mais força nessas últimas marchas é, na verdade, colocar uma parte do câmbio para sofrer, e não poupá-lo, como foi justificado pelos preparadores.

## O que eles querem dizer então?

Eles querem dizer que mais pressão nas últimas marchas vai resultar em um torque menor nas rodas do que nas primeiras marchas (mesmo com menos pressão). E eles querem que isso aconteça porque eles não querem que os pneus derrapem em 1ª, 2ª e 3ª. A partir disso, a gente pode concluir que eles estão usando um recurso de controle eletrônico para esconder um escalonamento de marchas mal feito.

Em outras palavras, eles querem usar a eletrônica para encobrir um projeto mecânico ruim.

É a melhor solução? Não.

## Como resolver um escalonamento de marchas mal-feito?

Contrate alguém que saiba o que está fazendo. Grosserias à parte, você precisa enxergar se os pneus conseguem passar para o chão o quanto de torque que você está gerando no motor e no câmbio.

Já detalhei essa questão do escalonamento de marchas na análise de um Gol para chegar aos 600 cv e também quando escrevi sobre como definir um swap de motor.

Para te dar uma noção de custos, uma FT600 custa aproximadamente R$ 10 mil, um câmbio bem escalonado pode te custar 5, talvez 6 mil.
