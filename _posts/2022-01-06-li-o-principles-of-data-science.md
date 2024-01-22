---
layout: post
title:  "Li o Principles of Data Science"
date:   2022-01-06 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
categories: "Tech"
---
Terminei de ler o livro Principles of Data Science, escrito pelo Sinan Ozdemir, e resolvi compartilhar aqui as anotações que fui fazendo conforme fui avançando nos assuntos apresentados no livro.

O meu objetivo nessa primeira leitura do livro foi pinçar as definições importantes e ter uma visão geral do tema ciência de dados. O livro oferece mais do que isso, se aprofundando em códigos de exemplo e em uma base fundamental técnica para conseguir fazer ciência de dados efetivamente, mas isso não aparecerá por aqui. Pois bem, vou começar apresentando definições sobre dados e sobre ciência de dados.

Dados são um conjunto de informações organizadas ou desorganizadas. Ciência de dados é a arte e ciência de adquirir conhecimento através dos dados. Esse conhecimento pode nos permitir tomar decisões, prever o futuro, entender o passado ou o presente e criar novas indústrias ou produtos.

O objetivo da ciência de dados é usar os dados para ter discernimento que de outra forma não conseguiríamos ter.

## Modelo de dados

Um modelo de dados é uma relação formal e organizada entre elementos dos dados, geralmente com o objetivo de simular um fenômeno do mundo real. Machine Learning tem como objetivo encontrar o melhor modelo baseado nos dados. Esses modelos são divididos em 2 tipos basicamente:
1. Probabilísticos;
2. Estatísticos.

Antes de sairmos testando modelos em cima dos dados, é importante fazer uma análise exploratória deles. Essa análise consiste em arranjar os dados para gerar insights rapidamente, por exemplo através de gráficos. Assim, conseguimos identificar funcionalidades e relacionamentos chave a serem explorados no modelo de dados.

Em meio a esse processo o termo mineração de dados aparece também. Uma definição para ele pode ser: o processo de encontrar relações entre elementos dos dados, o que se traduz em encontrar relações entre variáveis.

## Tipos de dados

Dados podem ser divididos em estruturados ou não-estruturados. Essa definição é basicamente a mesma apresentada anteriormente de dados organizados ou desorganizados. Quando dizemos que os dados são estruturados, queremos dizer que eles estão organizados em um formato de matriz, com linhas e colunas definidas.

É bastante comum haver um pré-processamento de dados, que é um processo cujo objetivo é transformar os dados não-estruturados em dados estruturados. Uma outra categorização que podemos fazer com os dados é entre dados qualitativos e dados quantitativos.

Os dados quantitativos podem ser descritos usando números, e procedimentos matemáticos básicos, como adição ou subtração, são possíveis no conjunto de dados. É possível ainda dividir os dados quantitativos em contínuos ou discretos. Discretos descrevem uma escala em degraus e contínuos em uma rampa.

Já os dados qualitativos não podem ser descritos usando números e matemática básica. Este tipo de dado é geralmente descrito através de categorias naturais e linguagem.

### Níveis de dados

Conseguimos classificar dados em 4 níveis:
- Nominal: descritos puramente pela categoria ou pelo nome;
- Ordinal: permitem serem ordenados em um ranking;
- Intervalo: permitem subtração;
- Razão: permitem ordenação, diferenciação, além de multiplicação e divisão.

## Diferença entre análise e ciência de dados

A diferença entre análise de dados e ciência de dados é que a ciência de dados segue um passo-a-passo estruturado que preserva a integridade dos resultados. Os passos a seguir para fazer ciência de dados podem ser resumidos em:
1. Fazer uma pergunta interessante;
1. Obter os dados;
1. Explorar os dados;
1. Modelar os dados;
1. Comunicar e visualizar os resultados.

## Diferença entre Machine Learning e um algoritmo clássico

Machine Learning concerne a habilidade de encontrar certos padrões, ou sinais, nos dados, mesmo se houverem erros, ou ruídos, neles. A diferença entre um algoritmo clássico e um modelo de Machine Learning é que para um algoritmo clássico funcionar, um humano precisa primeiro encontrar a melhor solução, enquanto um modelo de Machine Learning é exposto aos dados e a partir daí é orientado a encontrar a melhor solução.

## Tipos de Machine Learning

É possível separar os modelos de Machine Learning de acordo com alguns critérios:
- O tipo de dados ou estruturas orgânicas que eles usam (árvore, grafo, rede neural);
- Estatístico ou Probabilístico;
- Nível de recursos necessários (Deep Learning).

Além desse tipo de separação, podemos dividi-los de acordo com o tipo de aprendizado:
- Supervisionado: utilizados para prever ou classificar algo;
- Não-supervisionado: utilizados para agrupar ou reduzir a dimensão de um conjunto de dados;
- Reforçado: utilizados para recompensar ações de agentes dentro de um ambiente.

Parece um pouco óbvio que usamos modelos supervisionados para prever ou classificar alguma coisa, como por exemplo classificar se um objeto presente em uma foto é de um tipo específico. Já para os modelos não-supervisionados não é tão óbvia a função, por isso vale explicitar alguns casos de uso:
1. Quando não há uma variável clara a ser encontrada, ou seja, não sabemos o que prever ou correlacionar;
1. Quando precisamos estruturar dados não-estruturados;
1. Quando precisamos extrair funcionalidades de uma funcionalidade já existente.

### Árvore de decisão

Um modelo de Machine Learning do tipo árvore de decisão é um modelo supervisionado usado para prever ou classificar algo, e tem como objetivo segmentar dados similares por várias e várias vezes, em vários nós, para conseguir prever ou classificar com maior precisão.

### k-means clustering

É um modelo não-supervisionado, ou seja, não busca fazer previsões, e sim extrair estrutura de dados aparentemente não-estruturados.

Clustering é uma família de modelos de Machine Learning que visa agrupar dados em torno de um centróide. Esse centróide não é um dos dados presentes no dataset, é somente uma abstração em torno da qual são agrupados os dados.

O conceito de similaridade é muito importante para trabalharmos com clusters. Em geral, maior similaridade entre pontos leva a um melhor agrupamento (cluster). Na maioria dos casos, transformamos os dados em pontos dentro de um espaço n-dimensional, e a partir daí calculamos a distância entre esses pontos e a usamos para definir a similaridade entre eles.

O propósito de uma análise de cluster é melhorar o nosso entendimento de um conjunto de dados dividindo-os em grupos. Isto nos provê uma camada de abstração dos pontos de dados individuais. O objetivo é extrair e deixar mais evidente a estrutura natural dos dados.

O método k-means para clustering é iterativo, e particiona o conjunto de dados em k clusters. Funciona seguindo 4 passos:
1. Escolha k centróides iniciais (k é um parâmetro informado);
1. Para cada ponto nos dados, designe-o para o centróide mais próximo;
1. Recalcule a posição dos centróides;
1. Repita o passo 2 e 3 até que o critério de parada seja atingido.

## Além do essencial

### Erros devidos a viés

Quando falamos de erros devido ao viés estamos nos referindo à diferença entre a previsão do nosso modelo e o valor correto, o qual estamos tentando prever.

Viés, ou bias em inglês, mede, geralmente, o quão longe dos valores corretos o nosso modelo está. Se um modelo de machine learning prevê valores próximos aos corretos, dizemos que é um modelo com viés baixo, se não, é um modelo com viés alto.

### Erros devido à variância

Um erro devido à variância é um erro dependente da variabilidade de um modelo para um ponto. Imagine que repetimos várias vezes o processo de treinamento de um modelo. Para um valor de previsão fixo, podemos medir o quanto esses diferentes treinamentos estiveram mais próximos ou mais longes. Essa diferença é o erro devido à variância.

### Underfitting

O underfitting acontece quando o modelo não se encaixa nos dados. Geralmente se dá através de modelos que têm alto viés e baixa variância.

### Overfitting

O overfitting acontece quando o modelo se encaixa demais ao conjunto de dados, resultando em baixo viés, mas com uma variância muito mais alta.

### K folds cross-validation

Geralmente dividimos nossos conjuntos de dados em conjuntos de treinamento e conjuntos de teste. Um método mais eficiente de avaliação da performance do nosso modelo é o k folds cross-validation.

Este método efetivamente usa múltiplas divisões de treino-teste no mesmo conjunto de dados, e isto é feito por algumas razões, mas principalmente por que assim conseguimos estimar de forma mais honesta o erro OOS (erro de fora da amostra).

### Técnicas de ensembling

Ensembling learning, ou somente ensembling, é o processo de combinar múltiplos modelos preditivos para produzir um supermodelo que é mais preciso do que qualquer modelo individual sozinho:
1. Regressão: Pegamos a média das previsões de cada modelo;
1. Classificação: Usamos a previsão mais comum, ou a média das probabilidades previstas.

### Random forests

A principal fraqueza de árvores de decisão é que diferentes divisões nos dados de treinamento podem levar a árvores bem diferentes. Bagging é um processo de uso geral para reduzir a variância de um algoritmo de machine learning, e é especialmente útil para árvores de decisão.

Bagging é uma abreviação de Bootstrap samples aggregation. Uma amostra de bootstrap é uma amostra de dados feita a partir de uma amostra maior, passando por um processo de reamostragem, onde pequenas amostras são retiradas, copiadas, e depois devolvidas para a amostra maior. Deste jeito, a quantidade de elementos da amostra que vai ser usada pode conter elementos duplicados.

Random forests são uma variação de bagging trees. A diferença se encontra no momento de escolher as features a cada divisão dos dados.

### Comparando random forests com decision trees

Vantagens de random forests:
1. A performance é competitiva com os melhores métodos supervisionados;
1. Fornecem uma estimativa melhor de importância da feature;
1. Permitem estimar erros de OOS sem usar treino/teste ou validação cruzada.

Desvantagens:
1. São menos interpretáveis (não é possível visualizar uma floresta inteira de árvores de decisão);
1. São mais devagar para treinar e prever (não são boas para produção ou uso em tempo real).

### Redes neurais

São redes computacionais construídas para modelar sistemas nervosos de animais. As vantagens são:
1. Redes neurais são capazes de estimar qualquer formato de função (isso é chamado de ser não-paramétrico);
1. Redes neurais podem se adaptar e literalmente modificar sua estrutura interna baseada no ambiente.

As redes neurais são feitas de nós interconectados (perceptrons). Cada nó recebe um input (valor quantitativo) e fornece outro valor quantitativo. Sinais viajam pela rede e eventualmente caem em um nó de previsão.

Redes neurais podem ser usadas para aprendizado supervisionado, não-supervisionado, e aprendizado reforçado. Pela flexibilidade e capacidade de adaptação, as redes neurais são as preferidas nos seguintes campos:
1. Reconhecimento de padrões;
1. Movimento de entidades;
1. Detecção de anomalias.

A forma mais simples de uma rede neural é um único perceptron. Redes neurais com muitas camadas intermediárias podem formar uma rede profunda, que é o começo da discussão de deep learning.

O livro acaba por aqui, definitivamente é uma leitura interessante para quem quer se aprofundar na área.
