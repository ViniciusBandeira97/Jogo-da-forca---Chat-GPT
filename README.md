# Jogo da forca carros 🚗 🚙 🛻

Resultado: :heart_eyes:
![Captura de tela 2023-05-21 235117](https://github.com/ViniciusBandeira97/Jogo-da-forca---Chat-GPT/assets/97644828/74aa15d5-e595-48d2-aae1-48869d901af8)

Jogo disponível para teste usando AWS S3, segue o link:

https://jogo-da-forca.s3.sa-east-1.amazonaws.com/index.html

# RELATORIO DE CRIAÇÃO:

# Ideia principal:
A ideia principal desse projeto foi testar a capacidade de ajuda do chat GPT para criação de código. Não confunda "ajuda" com "copiar código pronto". A principal motivação de usar o Chat GPT foi para testar suas capacidade de criação, como se fosse um segundo DEV ajudando no projeto.

# Problemas: :unamused:
Em primeiro momento o chat GPT pareceu ser muito útil para iniciar o projeto. Porém, conforme o código crescia foi necessário fazer vários ajustes que a IA não conseguia resolver. 
Veja o primeiro código do chat GPT:
![Captura de tela 2023-05-22 001412](https://github.com/ViniciusBandeira97/Jogo-da-forca---Chat-GPT/assets/97644828/a3b13d2f-5fba-47a2-9080-67ac1f3b4547)

Aqui foi o início de tudo! Porém, ao testar essa primeira versão, vários erros foram identificados. 
Como, por Exemplo:
1) O código não limpava Buffer do teclado ao reiniciar o jogo.
2) O código deixava o usuário continuar colocando letras mesmo após acabar o número de tentativas possíveis.
3) Quando jogador acertava ou errava, nada acontecia além de abrir o botão para reiniciar o jogo.
4) Havia um grave problema em que a palavra secreta não computava o espaço, fazendo com que marca e modelo ficassem tudo junto, assim impossibilitando o jogador de adivinhar corretamente as coisas.
5) Teve outros erros, porém de menor relevância.

# Resolução: :smirk:
Visto todos esses problemas, o código foi sendo corrigido via novos pedidos realizados para o chat GPT, porém conforme o código crescia, era mais fácil pedir ideias para resolver problemas do que pedir que a IA fizesse o código pronto.
Dessa forma foi possível fazer correções no código.

# O que fiz: :rocket:
Praticamente a IA fez 40% do código e eu fiz os 60% restantes. Sendo da minha parte a maioria foi a Estilização do código, criação de verificação "Venceu"/ "Perdeu", input de todos os dados da palavra secreta, testes e organização do ambiente, versionando código com git, subindo App em nuvem AWS S3, dentre outras atividades.
A IA foi de grande importância na parte de esconder a palavra-chave e criar os mecanismos de leitura do teclado e funcionamento básico do jogo.

# Ferramentas utilizadas: :wrench:
1) VSCODE
2) Framework REACT
3) NPM
4) Chat GPT
5) DevTools (MS Edge)
6) Git e Github
7) AWS S3

# Final:
Através dessa experiencia, posso concluir que o chat GPT é um bom ajudante de programador. Porém, não tem habilidades suficientes para projetar códigos complexos e confiáveis. 
É uma ótima experiência em usar a IA como parceiro para programar, acabamos aprendendo bastante com ela, porem temos que possuir conhecimento suficiente para identificar os problemas e erros que a IA possa gerar.
O resultado desse jogo supri-o minhas expectativas. 

Caso você tenha ideia de melhorias. Por favor, entre em contato comigo ou faça Fork de meu trabalho para continuidade desse projeto.

# Obrigado pelo seu tempo, espero que goste do jogo. :smile:
