---
layout: post
title:  "Tipos de seção para um chassis"
date:   2017-10-02 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
categories: ["Automotive Engineering"]
---
Quando você for projetar um chassis tubular (ou um rollcage), você vai, em algum momento, dimensionar a seção a ser usada. Se você fizer uma pesquisa rápida no Google, vai ver que existem um monte de tipos de perfil, com várias espessuras de parede diferentes, feitos de várias ligas metálicas e ainda podendo ser costurados, laminados, laminados a frio, enfim, existe uma série de especificações que vão fazer o seu projeto um pouquinho mais complexo.

No entanto, pelo menos para mim, antes de entrar nesse nível de detalhe, eu quero saber se devo usar uma seção quadrada ou uma seção circular (existem outros tipos, mas esses são os mais utilizados). Como eu sei se um tipo de seção vai ser melhor do que o outro para o meu chassis? Primeiro a gente precisa definir como a gente vai analisar isso. Como dizia Einstein (ou pelo menos a internet diz que essa frase é dele):

>Todo mundo é um gênio. Mas, se você julgar um peixe por sua capacidade de subir em uma árvore, ele vai gastar toda a sua vida acreditando que ele é estúpido.

A gente precisa de um critério de avaliação para definir qual dos tipos vai ser melhor. O que eu vou usar aqui é o critério da menor tensão para uma carga definida. Eu já escrevi algumas coisas sobre chassis tubulares e sugiro que você dê uma olhada nos posts sobre as 2 chaves para um rollcage bem feito e sobre o Sandero RS da Fullpower antes de continuar lendo.

## Tensão e concentração de tensão

Em um desses 2 posts que eu comentei acima escrevi que a tensão de um material é a razão entre a força aplicada e a área que vai resistir essa força. Quando a gente vai dimensionar alguma coisa, a gente sempre quer que a tensão máxima no uso dessa coisa não ultrapasse a tensão de ruptura do material (ou a de escoamento em alguns casos, que é quando o metal estica antes de quebrar).

ensa em uma coisa comigo aqui, se eu disse que a tensão é o que vai acabar definindo se o tubo vai romper, e a tensão é definida a partir da força dividida pela área, o tipo de força que gerar uma maior tensão vai ser o mais preocupante na hora de projetar alguma coisa, visto que a área do tubo não vai mudar, certo? Os esforços em uma barra podem ser de tração, compressão, torção ou de flexão, ou ainda uma combinação deles. Em um chassis tubular é melhor definir a geometria, o desenho da estrutura, de forma que os esforços sejam de tração e compressão, porque as tensões que eles causam são menores do que as tensões de torção e flexão, geralmente.

Quando entramos no mundo da resistência dos materiais é comum definirmos o tipo de seção pela relação entre a tensão e o momento de inércia. Esta é a metodologia ensinada nas faculdades e é bastante aplicada para cálculos rápidos e estruturas simples. No entanto, os exercícios didáticos e as estruturas são muito mais focados em aplicações estáticas e quase sempre previsíveis. Chassis tubulares não se encaixam muito nessa definição. Alguns esforços são previsíveis e sempre parecidos, como o torque máximo do motor que o chassis precisa reagir, mas a maioria dos esforços envolvidos no uso do carro, e consequentemente do chassis, são variáveis e imprevisíveis. Ainda assim, por facilidade e lógica, dimensionamos o chassis pelo caso mais severo de uso e pela [maior concentração de tensões](https://pt.wikipedia.org/wiki/Concentra%C3%A7%C3%A3o_de_tens%C3%B5es).

![Fluxo de concentração de tensões]({%- asset_path fluxo-concentracao-tensoes.png -%})

A tensão definida como a força dividida pela área é um valor médio das tensões que aparecem no uso de um componente. Uma mudança na forma da seção ou uma descontinuidade causa uma redistribuição de tensões, e consequentemente deformações, ao seu redor. Na imagem acima é possível ver linhas de fluxo de tensão em componentes com diferentes descontinuidades e a concentração que cada geometria causa. A escolha entre um tubo quadrado e redondo para a fabricação de um chassis, ou de parte dele, é feita analisando os esforços envolvidos e o quão previsíveis eles podem ser. Para esclarecer e estabelecer algumas diretrizes de projeto em um chassis, vou calcular alguns exemplos com geometria simples.

## Flexão

O modelo que eu vou usar para analisar as seções tubulares em flexão é o de uma viga apoiada com uma força no seu centro, como na figura abaixo. O valor da Força Cortante (V) é 50 N, e o máximo valor do Momento Fletor (Mf) é 2000 Nmm. As especificações dos tubos são as seguintes:

- Espessura de parede dos tubos = 1,5 mm;
- Diâmetro externo da seção circular = 25 mm;
- Lado da seção quadrada = 25 mm.

![Diagrama de esforços iternos solicitantes]({%- asset_path deis.png -%})

As tensões de cisalhamento são 0,35 MPa para a seção quadrada e 0,45 MPa para a seção circular. As tensões normais devido ao momento fletor são 2,41 MPa para a seção quadrada e 4,09 MPa para a seção circular. A seção quadrada é melhor em ambas as situações (cisalhamento e flexão) neste caso, então em todas as áreas do chassis que sofrerem esforços predominantemente de flexão, usar a seção quadrada é melhor. Não comentei nada sobre a concentração de tensões aqui porque não há muito o que comentar, nesse tipo de análise a geometria da seção só entra em compressão ou tração, sendo o momento de inércia muito mais importante do que as concentrações, o que não é verdade para o próximo caso.

## Torção

No caso de um momento torçor, o desenho da seção é mais importante por causa da direção do esforço. O modelo que eu vou usar para avaliar esse tipo de situação é o da figura abaixo. As especificações dos tipos de seção a serem analisados são os mesmos do tópico acima. O momento torsor é de 2000 Nmm e o comprimento da barra é de 80 mm.

![Tubos em torção]({%- asset_path torcao-ufpr.png -%})

A tensão máxima de cisalhamento pela torção é 1,63 MPa para a seção circular e 1,21 MPa para a seção quadrada. A deformação angular da seção circular é de 0,00796° e da seção quadrada é de 0,00668°. Pelos números a seção quadrada seria novamente melhor, mas os cantos em 90° formados por ela são concentradores de tensão, e quando a carga é aplicada, a seção não mantém sua forma, ficando parecida com a figura abaixo. O que isso significa? A seção circular é mais adequada para partes do chassis onde haja torção, pela estabilidade dimensional maior e menor concentração de tensões.

![Quadrado em torção]({%- asset_path quadrado-torcao.png -%})

## O que a gente tira de tudo isso?

Os tubos quadrados são mais adequados para as partes em flexão e os circulares para as partes em torção, acho que isso ficou claro com os exemplos dos tópicos anteriores, mas será que é só isso que a gente deve levar em conta? Não, tem algumas outras coisas que a gente deve considerar.

A primeira delas é a facilidade de fabricação utilizando um tipo ou o outro. Um chassis tubular pode ser bastante complexo, com vários nós e muitos tubos se encontrando neles. Como os tubos circulares são iguais em qualquer direção da seção, pode ser mais fácil na hora de soldar um nó com vários tubos. Geralmente a seção quadrada é mais fácil de cortar e também de soldar em geometrias simples, então essa vantagem do tubo circular seria somente mesmo em nós com muitos tubos em diferentes direções.

Outras coisas a serem consideradas são o custo, disponibilidade na liga que se deseja e quantidade que pode ser comprada. O chassis de um carro que faça mais curvas do que ande em linha reta tende a torcer mais do que fletir, então a quantidade de tubos circulares será maior do que a quantidade de tubos quadrados se a gente seguir o que foi explicado nesse post. Às vezes é mais vantajoso comprar uma quantidade maior do mesmo tipo de seção, no caso a seção circular, do que ter que ficar garimpando pedaços menores de tubos quadrados no tamanho e na liga que a gente quer.
