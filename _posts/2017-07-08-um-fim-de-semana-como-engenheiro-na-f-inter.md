---
layout: post
title:  "Um fim de semana como engenheiro na F-Inter"
date:   2017-07-08 09:26:00 -0300
author: Lucas Cezere Vidal
permalink: /posts/:title
categories: ["Automotive Engineering"]
---
Dia 19/05/2017, sexta-feira, 04h40. Acordo com o dia escuro, tomo um banho, como 2 torradas com requeijão, separo uma banana para levar e vou para a garagem. Abro o portão da garagem debaixo de uma chuva leve, espero o Uno esquentar um pouco e pego a Via Anchieta sentido São Paulo. Estou indo para o Autódromo José Carlos Pace, o famoso circuito de Interlagos. A chuva leve vira uma enxurrada, dificultando bastante a visão. Chego em Interlagos por volta das 6 horas da manhã. A chuva ainda não cessou. Estaciono o Uno no terrão onde a bomba de combustível para os carros de corrida do Paulista de Automobilismo fica, e vou subindo as escadas para chegar aos boxes.

O tênis que eu estou calçando não é o melhor para encarar os degraus molhados da chuva e meus pés ficam encharcados. Encontro mais algumas figuras madrugueiras no caminho até o box da Fórmula Inter. Chegando lá encontro os outros engenheiros. Como a banana que trouxe esperando o dia começar. Logo depois me avisam que tem um pão com margarina, um pouco café e água no andar de cima do box. Subo e como no escuro, porque a eletricidade no autódromo ainda não foi liberada. Esse foi o começo do meu fim de semana como engenheiro de dados na F-Inter.

## O fim de semana precedente

No sábado anterior à 6ª Etapa do Paulista de Automobilismo, dia 13/05/2017, eu fui até a sede da Fórmula Inter na Vila Mariana para ter uma aula sobre o que a gente ia fazer durante o fim de semana de corrida. Peguei um trânsito pesado e cheguei uns 15 minutos atrasado. Quando eu chego depois de todo mundo em um lugar que eu não conheço geralmente me sinto um pouco estranho, meio fora do grupo. Nesse dia não foi diferente, mas não era só porque eu cheguei atrasado, a grande maioria do pessoal já se conhecia porque estudaram juntos.

Eu e esse pessoal fomos a segunda turma da academia técnica da Fórmula Inter. O projeto original deles era criar um curso em parceria com a Bosch, utilizando a estrutura do Centro de Treinamento em Campinas para as aulas e as etapas da Fórmula Inter para a experiência em pista. No entanto, o curso foi cancelado por causa de uma reforma no Centro, ou pelo menos essa foi a justificativa. Era um curso bastante completo e interessante, e o preço acompanhava. Eu tinha me inscrito, mas confesso que não sei como iria pagar. Enfim, cancelaram o curso e não se falou mais nada até abril, quando decidiram pegar um tópico da grade, aquisição e interpretação de dados, e fazer um curso gratuito para estudantes de engenharia mecânica sobre ele. Mesmo já tendo me formado, decidi me inscrever, e, para a minha surpresa, fui chamado para a segunda turma de um total de três.

## Aquisição de dados

Se você gosta de acompanhar o lado mais técnico do automobilismo com certeza já ouviu a palavra telemetria. Telemetria é a aquisição de dados em tempo real. Aquisição de dados é exatamente o que as palavras significam. Dados, ou informações, são coletadas por diversos sensores posicionados no carro para uma análise mais precisa do que está acontecendo no momento da sua utilização. Somente a aquisição de dados não resolve e nem soma nada, a não ser aos custos, à performance do carro. A gente precisa observar o carro na pista, interpretar os dados e, juntamente com o feedback do piloto, verificar as causas de um possível problema, ou definir que caminho traçar com o desenvolvimento do carro, por exemplo.

![Pro Tune Analyzer]({%- asset_path pro-tune-analyzer-exemplo.png -%})

Acima há um exemplo de arquivo de dados, aberto no programa de análise de dados da Pro Tune, o Analyzer. O autódromo em que foram gravadas as informações foi o de Tarumã, no Rio Grande do Sul, e na tela é possível ver dois canais de informação, o de velocidade e o de rotação do motor, além de um mapa do circuito abaixo e à direita na imagem. A grande maioria dos carros de corrida semi-profissionais acaba coletando informações dos sensores que já estão presentes no carro, como por exemplo o TPS (posição de borboleta) e o de pressão de óleo do motor.

Isso acontece pois equipar o carro com outros sensores, por exemplo uma célula de carga no amortecedor ou um sensor de pressão do ar em uma asa, é mais caro e não é visto como um investimento pela equipe, visto que ter a informação somente pelo fato de possui-la, sem utilizar aquilo para a construção de um caminho até um objetivo final, é gastar dinheiro a toa, e muitas vezes a equipe não possui conhecimento para utilizar aquela informação, ou não pode utilizá-la por regulamento.

Antigamente, um datalogger, como são chamados esses dispositivos que armazenam a informação dos sensores, era simplesmente um módulo eletrônico pequeno. Hoje, a grande maioria dos dataloggers é incorporado à painéis eletrônicos, e são chamados dashloggers. No caso do curso da Fórmula Inter, a maioria dos carros eram equipados com dashloggers Pro Tune TDL 3.2″, e alguns outros com o TDL 4.3″, como na foto abaixo. Em ambos os casos, eles registravam informações dos sensores do motor e de um acelerômetro presente no próprio dashlogger.

![Pro Tune Dashlogger]({%- asset_path dashlogger-pro-tune.jpg -%})

## O curso da Fórmula Inter

O curso sobre aquisição e interpretação de dados da Fórmula Inter foi ministrado pelo Cezar Tadau, aluno da FEI que deve se formar logo menos e que está no projeto da Fórmula Inter desde o início da história toda. Como eu comentei no tópico anterior, foram dois finais de semana de curso. No primeiro final de semana houve uma aula teórica no sábado, onde ele apresentou o programa e o básico do que é aquisição de dados.

Além disso, ele deu as diretrizes para o próximo final de semana, e sobre o que nós podíamos e não podíamos fazer com os dados. Por exemplo, eu não posso divulgar os dados aqui, não posso compartilhar os arquivos e nem postar imagens dos gráficos referentes à etapa em que fiz o curso. Não assinamos nenhum termo de confidencialidade, mas por questão de ética não vou fazer nada disso.

O que não quer dizer que não vou comentar o que aconteceu com o carro pelo qual estava responsável, quais foram as consequências e o que eu aprendi com tudo isso. No final de semana de corrida chegamos no autódromo às seis horas da manhã na sexta-feira. Não fizemos grande coisa até logo antes das oito e pouco, horário do primeiro treino livre. Dividimos os carros entre os participantes do curso e eu acabei ficando responsável pelo carro do Alexandre Galassi, da foto abaixo.

![F-Inter #06 ]({%- asset_path f-inter-alex-galassi.jpg -%})

A rotina do engenheiro de pista na Fórmula Inter era a seguinte: Limpar o carro, checar sensores vitais do motor, conferir freios, embreagem, calibragem do pneu, combustível, calibrar o acelerômetro, amarrar o piloto, fazer o warm up do carro e ajudar no que estivesse acontecendo ao redor antes dos treinos. Após os treinos, a gente deveria puxar os dados do dashlogger e interpretá-los com base no que a gente viu do carro e ouviu do piloto.

## O primeiro treino

Segundo o Tadau, os engenheiros de pista receberiam uma folha, uma espécie de checklist, na qual a gente deveria reportar os acontecimentos dos treinos e a situação dos carros pré-pista. Para esse primeiro treino a gente não recebeu nada, e eu não poderia ter ficado mais perdido. Esqueci das coisas que eram minha responsabilidade. Consegui checar os sensores vitais, amarrar o piloto e checar a pressão dos pneus junto com um dos mecânicos, mas o resto da lista passou batido. Para você ter uma ideia do quão bagunçada a minha cabeça estava eu perguntei como se usava um calibrador de pneus, sendo que eu já tinha calibrado vários pneus com aquele mesmo calibrador.

Fiquei mais esperto para o segundo treino, prestei atenção nos locais das ferramentas e principalmente fiquei ligado no relógio. Chovia desde que eu saí de casa naquela sexta-feira, e o frio que a gente pegou não era comum para maio (e eu com os pés encharcados ainda, que me acompanharam o dia inteiro). No primeiro treino, o carro #06, do qual eu era o engenheiro responsável, encostou com o Alexandre, o piloto, dizendo que o carro não rendia nas retas, e por faltar pouco tempo ele decidiu entrar para os boxes para esperar o segundo treino. Puxei os dados, comparamos com outro carro e segundo o Edu, o chefe dos mecânicos, e o próprio Tadau, não tinha nada de errado com o motor. Passei essas informações para o Alexandre e ele não ficou muito feliz na hora, mas falou que ia tentar acelerar mais forte.

## O segundo treino

Preparei o carro para o segundo treino conforme o checklist mandava, sem deixar nenhum item de fora. O carro #06 saiu para a pista e de longe, ali do começo dos boxes mesmo, pudemos ver na ferradura e no laranjinha uma faixa de óleo na pista molhada. O Alexandre entrou para os boxes por que ele percebeu que a temperatura da água estava 15° mais baixa do que deveria estar. Quando ele encostou nos boxes, a gente colocou um pedaço de papelão na entrada de ar para subir um pouco a temperatura, e nessa hora eu cheguei a ver que tinha bastante óleo na parte de cima do difusor dele, mas achei que era de outro carro.

Ele ficou na pista quase até o final do treino, quando encostou de novo e vimos que ele tinha encharcado o carro que vinha atrás de óleo, além dele mesmo. Quando os mecânicos levantaram o carro deu para perceber que tinha um vazamento muito grande na lateral traseira esquerda. Os mecânicos desmontaram aquela parte do carro e viram que um sensor de pressão de óleo (a cebolinha, como o pessoal fala) tinha quebrado, e isso foi o que começou o vazamento. Tiraram o sensor do circuito, reconectaram as mangueiras, montaram o carro de novo e deixaram-no pronto para a classificação, que seria no sábado.

Cabe lembrar aqui que eram dois sensores de pressão de óleo, um para a injeção Pro Tune PR440 e outro para o dashlogger. Fiquei sem informação de pressão de óleo, mas a injeção continuava recebendo as informações e funcionando normalmente.

Enquanto os mecânicos terminavam de colocar o motor de volta no carro, eu aproveitei para puxar os dados do dashlogger. Não havia informação suficiente para ajudar o Alexandre a ganhar algum tempo, a única coisa útil que os dados nos forneciam era o momento exato em que o sensor de óleo parou de funcionar. O motor foi colocado no carro, ligado e testado. Parecia tudo dentro dos conformes, já era seis e quinze da tarde, e eu fiquei mais um pouquinho ali mas logo depois fui embora.

## A classificação

A classificação estava marcada para 14h30 do sábado, e o pessoal da F-Inter pediu pra chegarmos lá às oito da manhã. Eu me atrasei por causa de uma repintura das guias de sarjeta na Avenida dos Bandeirantes e acabei chegando lá 9h30. De quando cheguei até umas 11h30 não fizemos muita coisa. Se não há um problema, o box é um lugar bem calmo.

Perto das 13h30 eu já tinha conferido todos os parâmetros no checklist duas vezes, e fiquei esperando a largada do treino classificatório. Pedi para o Alexandre ficar mais tempo na pista para a gente ter mais dados para analisar, ele concordou e ficou quase até o final. A classificação é mais curta do que os treinos livres, mas mesmo assim o volume de dados de voltas em ritmo de corrida foi maior do que nos treinos livres.

O carro #06 tomou 4 segundos do pole. Várias vezes vi o Alexandre travando a roda na curva do s depois do laranjinha, e quando ele encostou o carro me disse que estava com o balanço de freio todo para trás e ainda assim travava roda em curvas para a direita.

Antes que eu pudesse pensar em qualquer coisa, o Artur Bragantini, um dos coachs, ou técnicos, da categoria, cravou o problema: As cargas em cada roda não estavam equilibradas. Dito e feito. Depois de alguma discussão, o Sr. José Minelli, construtor de carros de corrida de longa data e parte do corpo técnico da categoria, decidiu colocar o carro #06 na balança para verificar a carga em cada canto.

![F-Inter #06 na balança]({%- asset_path f-inter-06-balanca.jpg -%})

O carro fez dois treinos livres e um treino classificatório com uma diferença de 40 kg entre o lado esquerdo e o lado direito, sendo o lado direito o mais leve. Em curvas para a direita, por conta da transferência de carga, a roda dianteira direita ficava com menos carga ainda, e quando o Alexandre tentava frear, ela travava.

Além disso, na traseira ocorria o contrário, a roda direita era a que estava com maior carga, o que deixava o carro bastante ruim de guiar. Isso ficou evidente no treino classificatório porque a pista já estava seca. Nos dois treinos livres, por causa da chuva, as transferências de carga foram amenizadas, e no meio de todo o vazamento de óleo, o Alexandre pode não ter percebido esse comportamento estranho do carro.

Enquanto um dos filhos do Seu Minelli deixava as cargas equilibradas no carro, aproveitei para puxar os dados da classificação e analisar junto com o Alexandre. Até aqui, os problemas encontrados no carro #06 poderiam ter sido resolvidos sem nenhum tipo de aquisição de dados, somente com a experiência (quer um exemplo? É só ver o que o Artur Bragantini disse para mim sem chegar perto de nenhum computador).

No entanto, conversando com o Alexandre, me lembrando do que tinha visto na pista e analisando os dados, a gente conseguiu verificar, em vários pontos da pista, situações em que o Alexandre estava dando o máximo dele, mas o carro não estava dando o máximo de si. Em curvas para a direita ficava evidente que a falta de equilíbrio prejudicava demais a performance. Um exemplo disso, na subida para o laranjinha, com o acelerador aberto ao máximo, o carro #06 era 15 km/h mais lento do que os ponteiros. Outro exemplo, na saída da curva do sol, o carro #06 chegava a estar 5 km/h mais rápido do que os ponteiros, e chegava no final da reta oposta 7 km/h mais lento.

O exemplo do laranjinha deixa claro que o problema tinha a ver com o desequilíbrio das cargas, porque é uma curva. O da reta oposta não. Em uma reta não há transferências de carga laterais, somente longitudinais, então o desequilíbrio não deveria ser um problema tão grande para em carros iguais dar 12 km/h de diferença de velocidade.

No momento em que juntei essas informações fui atrás do Tadau para ver se poderia ser alguma coisa no motor do carro #06. Analisamos os gráficos juntos e ele disse que poderia ser alguma coisa pequena, mencionando que os dois motores desenvolviam as rotações da mesma maneira na maioria das situações, a não ser na reta oposta.

Os mecânicos desmontaram algumas partes do motor, checaram as peças, transmissão e não encontraram nada. Eu não tinha ideia também do que poderia estar errado no motor, então comecei a pensar o que poderia estar entre o motor e as rodas que poderia sofrer com o desequilíbrio e causar uma perda de performance.

Olhando para a caixa de câmbio me lembrei que o diferencial poderia causar alguma coisa parecida, principalmente se fosse aberto. Fui atrás do Tadau, expliquei o que estava pensando, ele disse que achava que não tinha a ver com o diferencial, mas pediu pra eu procurar o Sr. José Minelli, por que ele não se lembrava se o diferencial era aberto ou de deslizamento limitado.

Seu Minelli me disse que era diferencial de carro de rua, aberto, e que ele não sabia se tinha influência ou não neste caso. O carro #06 já estava equilibrado e pronto para dormir, assim, decidi ir para casa pois o cansaço já era grande e minha dúvida não ia ser esclarecida naquele dia.

## O dia da corrida

No domingo eu fiz e refiz o checklist e esperei a corrida começar. A corrida começou, o carro #06 parecia bem melhor, mais equilibrado e o piloto estava confiante o suficiente para fazer uma prova interessante, arriscando ultrapassagens e tudo. No entanto, a pista estava úmida e eu não pude ficar com os logs (arquivos de dados) da corrida. Não tive como sanar minha dúvida ali, não consegui ver como foi o desempenho na subida do laranjinha e na reta oposta. Até tentei tirar alguma coisa do Alexandre, mas ele disse que não sentiu muita diferença do carro dos treinos para o carro da corrida. Acabei voltando para casa logo depois que a corrida acabou, e assim se encerrou o curso.

## A operação de pista na Fórmula Inter

A categoria é uma das mais organizadas do automobilismo nacional. Se considerarmos somente o campeonato paulista, ela é, de longe, a mais profissional e organizada. Depois deste curso e de ter visto as coisas do lado de dentro, continuo achando a mesma coisa.

No entanto, vi muita coisa que, na minha opinião, poderia ser melhor. O projeto da categoria não veio do nada, a família Galassi teve uma experiência na Road To Indy, e aqui no Brasil com a F1600, antes de resolverem fazer as coisas por conta própria.

Em questão de administração, marketing e publicidade, é um negócio suficientemente bem feito, bem pensado e bem executado. O Marcos Galassi sabe que domina essas áreas bem, assim, para as áreas que não domina, chamou gente que faz um bom trabalho, como o Seu Minelli, o Artur Bragantini, Luciano Zangirolami, o próprio Tadau e o Edu, que é chefe dos mecânicos.

O que eu vi que pode ser melhorado e dar menos dor de cabeça para todos, além de causar menos estresse e noites mal dormidas, é na parte de organização dos mecânicos e preparação dos carros. Não é uma questão de falta de conhecimento técnico ou de falta de experiência, é realmente só uma questão de organização.

Os mecânicos não tinham um checklist como nós tínhamos, e a cada sessão cada um fazia uma tarefa diferente. Novamente, todos os mecânicos estavam realmente dando o sangue e tinham conhecimento do que estavam fazendo, mas as coisas poderiam ser melhores se fossem mais automatizadas.

Por exemplo, eu organizaria a equipe de modo que um mecânico seria responsável somente por um carro, realizando juntamente com o engenheiro todos os preparativos necessários. Se o número de mecânicos fosse insuficiente para isso, pegaria um grupo de mecânicos e deixaria cada um responsável somente por uma tarefa, no máximo duas, em todos os carros. Por exemplo, um mecânico seria responsável por sangrar os freios e embreagem, e o outro seria responsável pela calibração dos pneus.

Acredito que definir as tarefas e não mudá-las de treino para treino acabaria deixando os mecânicos mais focados e rápidos. Além dessa divisão dos mecânicos, manteria uma equipe de dois ou três mecânicos para tarefas emergenciais, como por exemplo, encontrar um vazamento de óleo e corrigi-lo. Para finalizar o assunto da operação de pista, acredito que uma preparação mais extensa dos carros seja necessária para uma boa prova e para que os pilotos tenham sempre o melhor equipamento possível em mãos.

O balanceamento das cargas em cada roda deveria ser feito antes de toda sessão de pista, junto com os outros parâmetros do checklist. Eu também faria, ou conferiria, o alinhamento das rodas antes de toda sessão. No momento atual, os carros saem com um acerto padrão para todos os pilotos, mas no futuro a tendência é que cada carro saia com seu acerto próprio, então a divisão que mencionei acima, de um mecânico por carro, se fará mais necessária ainda, e tudo isso deverá ser registrado em algum lugar para que não se perca esses dados e para que o desenvolvimento de cada carro possa ser sólido e não meramente um golpe de sorte.

## O que a gente tira de tudo isso?

O curso em si não tinha muita bagagem teórica e não me acrescentou muito conhecimento sobre como um carro de corridas funciona, não tem mistério no assunto do curso. O que eu não sabia, consegui aprender e relacionar com o que já sabia até que rápido. O que eu gostei, e muito, foi de ter tido a oportunidade de analisar as coisas do lado de dentro, e de verificar possíveis soluções para problemas em tempo rea.

O que me atrai nos carros de corrida (na verdade em qualquer máquina bem feita) é a questão do desenvolvimento, desde o projeto até ver as coisas sendo postas à prova e tentar entender tudo isso do ponto de vista da engenharia.

Essa experiência na categoria vai render alguns outros posts onde eu vou detalhar a minha ideia sobre o diferencial e a capacidade de tração do carro.

Além da questão técnica, confirmei o que já vinha sentindo e observando em outras experiências que tive na vida, não é possível ser somente um especialista, não dá pra ter somente um conhecimento técnico grande, e não ter organização, disciplina e liderança.

Na minha opinião, falta organização no chão do box, na operação de pista. Pode parecer besteira ou menos importante do que o conhecimento técnico, mas o que faz alguém, ou um empreendimento ser bem sucedido, é o melhor uso dos recursos disponíveis, e não sou só eu que digo isso,[ Claude Rouelle](https://www.youtube.com/watch?v=c1n-rgqSTyY também, para citar um cara do meio.
