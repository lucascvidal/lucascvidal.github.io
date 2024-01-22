---
layout: post
title:  "Definindo um swap de motor"
date:   2018-04-24 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
categories: ["Automotive Engineering"]
---
Swap de motor está quase sempre no Top 5 das coisas que um entusiasta gostaria de fazer no seu carro. Tenho certeza que já passou pela sua cabeça trocar o motor do seu carro por outro mais potente.

## Só mais potência

É isso que as pessoas que encaram essa aventura de um swap de motor buscam, mais potência. Existem outras formas de obter mais potência para o seu carro que te dariam menos trabalho do que um swap de motor, como por exemplo usar um turbocompressor, um sistema de nitro, um outro comando de válvulas, sistema de escape diferente, enfim, existem muitas outras formas de se obter mais potência de um motor que não seja o swap.

Então por que a gente ainda fantasia com a troca de um motor? Existem os fatores emocionais, por exemplo o ronco de um 5 cilindros ou um V8 em um carro que sempre existiu com motores 4 cilindros, e existem os fatores técnicos, como o formato da curva de torque.

Esse é o fator que me faria considerar um swap de motor, ter uma curva de torque com um formato melhor. Por melhor eu quero dizer a mais horizontal possível.

Então o primeiro passo para definir um swap de motor seria encontrar um motor com a curva mais plana possível? Exato. No entanto, a gente ainda precisa enxergar como esse novo motor se comportaria com o câmbio e a aderência do nosso projeto, além do que pode ser o mais óbvio, verificar se esse motor se encaixa no espaço do cofre do nosso projeto.

## Uma coisa de cada vez

Então agora que já temos um critério para escolher um motor pela sua curva de torque, como a gente vai para o próximo passo? Como a gente enxerga se esse novo motor se encaixa com o câmbio e a aderência do nosso projeto? Eu gosto de comparar todas essas informações com um gráfico igual ao da figura abaixo.

![Curva de torque para o Uno 1.0 Vivace]({%- asset_path uno-stock-data.png -%})

Como a gente lê esse gráfico? O eixo horizontal indica a velocidade do nosso carro, e o eixo vertical mostra uma escala de forças. A linha horizontal amarela é a capacidade de aderência do nosso carro. Tudo o que estiver acima dela os pneus não conseguem passar para o chão, e tudo o que estiver abaixo dela os pneus conseguem tracionar e fazer o carro acelerar.

Eu também coloco nesse gráfico a quantidade de força que cada marcha transfere (e multiplica) do motor para as rodas. Como você já deve ter percebido ao dirigir, a primeira marcha de um carro tem mais força para arrancar mas ela tem menos capacidade de atingir altas velocidades. Esse gráfico nos mostra exatamente isso, a curva da primeira marcha tem mais força, está numa posição mais alta na escala de forças, mas ela acaba antes do veículo atingir os 40 km/h.

Além das curvas de força para cada marcha do câmbio, eu também coloco uma curva de resistência ao movimento, que é a soma de duas coisas, a resistência à rolagem dos pneus e a resistência aerodinâmica. A intersecção da curva das últimas marchas com essa curva de resistência ao movimento acontece na velocidade máxima teórica do carro.

Se eu quero avaliar um swap de motor com esse método primeiro eu construo um gráfico com as informações do carro original, depois coleto as informações do motor que quero utilizar e substituo os valores da curva de torque, gerando um novo gráfico. O gráfico acima é do último carro que tive aqui em casa, um Uno Vivace 1.0. Eu avaliei um possível swap de motor para um 1.4 T-Jet do Punto, mantendo o câmbio original do Uno 1.0 e o resultado foi o gráfico abaixo.

![Curva de torque para o Uno 1.0 Vivace]({%- asset_path uno-t-jet-data.png -%})

Se a gente comparar esse gráfico do 1.4 T-Jet com o Vivace 1.0 a gente vai perceber que com esse swap de motor muito mais força seria aplicada nos pneus (as curvas da 1ª e 2ª marchas estão bem mais acima na escala de forças). Nesse caso isso significa que o carro ficaria muito mais arisco, derraparia os pneus muito mais fácil e perderia a dirigibilidade original. Além disso, esse gráfico indica que um swap de motor somente não seria o ideal para um carro equilibrado, seria interessante trocar o câmbio também. No entanto, essas conclusões fogem do escopo desse post, que é apresentar esse método de análise, e não dar diretrizes de projeto.

## Construindo o gráfico

Então, como a gente constrói esse gráfico? Algumas informações serão necessárias, são elas:

- Peso do carro em condições de uso normal (motorista e combustível dentro);
- Distribuição de peso;
- Altura do centro de gravidade;
- Entre-eixos do carro;
- Raio do pneu carregado;
- Coeficiente de atrito pneu-pista;
- Coeficiente de arrasto aerodinâmico;
- Área frontal;
- Densidade do ar;
- Curva de torque WOT do motor;
- Relações de transmissão das marchas e diferencial.

Com essas informações em mãos, a gente vai calcular a capacidade de aderência, a força que o motor e o câmbio aplicam nos pneus em cada marcha e a resistência ao movimento que os pneus e o ar impõem ao nosso carro. Começando pela capacidade de aderência, calculamos a partir da fórmula:

F = (Pd x μ)/(1 + Hcg x μ/L)

Onde Pd é o peso estático no eixo dianteiro, μ é o coeficiente de atrito pneu-pista, Hcg é a altura do centro de gravidade e L é o entre-eixos do carro. Essa fórmula foi definida para os carros com tração dianteira. Para os carros com tração traseira a gente muda o sinal logo depois do 1 para negativo e usamos o peso na traseira do carro. Esse valor vai ser constante durante todas as velocidades em que o carro estiver, visto que é o máximo de aderência que o carro consegue produzir. Vamos passar para as curvas das marchas.

A gente calcula o quanto de força está sendo gerada pelo motor e câmbio multiplicando os valores pelas relações de transmissão de cada marcha e do diferencial (relação total):

Torque aplicado nas rodas = Torque no motor x relação de total de transmissão

Força aplicada no chão = Torque nas rodas / Raio do pneu carregado

Se essa força vinda do motor aplicada no chão for maior do que a capacidade de aderência que a gente calculou, o carro vai derrapar. Vale lembrar que esses valores vão variar conforme a rotação do motor (e a velocidade do carro). A relação entre a rotação do motor e a velocidade do carro em cada marcha é calculada por:

Velocidade do carro em km/h = rpm x Raio do pneu x (2π/60)/relação total de transmissão

Agora você já tem em mãos como calcular a capacidade de aderência, a força que o motor e câmbio aplicam nas rodas e só falta calcular a resistência ao movimento. Como escrevi antes, a resistência ao movimento é causada pelos pneus e pelo ar, e a gente estima elas da seguinte forma:

Resistência à rolagem dos pneus = 2% x Peso do carro

Resistência Aerodinâmica = 0,5 x densidade do ar x Área frontal do carro x Coeficiente de arrasto x Velocidade do carro²

Todas as fórmulas e dados necessários para gerar o gráfico foram descritos. Agora você pode usar essa ferramenta para definir se um swap de motor é viável, mas não só isso, você pode usar esse mesmo gráfico para prever o comportamento do carro em situações de aceleração, projetar um escalonamento de marchas para uma aplicação específica e também pode usar esse método para verificar se uma modificação no motor original do carro foi bem-vinda para a performance ou não. Tudo isso com esse gráfico que parece bem besta.
