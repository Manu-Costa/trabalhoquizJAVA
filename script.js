 const categorias = {
    filmes: {
        nome: "Filmes e Séries 🎥",
        perguntas: [
            { pergunta: "Qual o nome do boneco cowboy de Toy Story?",
            opcoes: ["Buzz", "Woody","Rex","Shrek"],
            resposta: "Woody"},

            { pergunta: "Em Frozen, qual é o poder especial de Elsa?",
            opcoes: ["Controlar o fogo", "Voar","Criar gelo e neve","Controlar a água"],
            resposta: "Criar gelo e neve"},

            { pergunta: "Qual é o nome do reino de Elsa no filme Frozen?",
            opcoes: ["Arendelle", "Atlântida", "Genóvia", "Nárnia"],
            resposta: "Arendelle"},

            { pergunta: "Qual personagem é conhecido como Homem de Ferro?",
            opcoes: ["Steve Rogers", "Thor", "Tony Stark", "Bruce Banner"],
            resposta: "Tony Stark"},

            { pergunta: "Qual série apresenta a cidade fictícia de Hawkins?",
            opcoes: ["Wandinha", "Stranger Things", "The Crown", "Friends"],
            resposta: "Stranger Things"},

            { pergunta: "Qual é o nome do reino onde vive a princesa Fiona?",
            opcoes: ["Tão Tão Distante", "Arendelle", "Wakanda", "Agrabah"],
            resposta: "Tão Tão Distante"},

            { pergunta: "Quem é o protagonista da série The Mandalorian?",
            opcoes: ["Luke Skywalker", "Din Djarin", "Han Solo", "Obi-Wan Kenobi"],
            resposta: "Din Djarin"},

            { pergunta: "Qual é o nome do peixe-palhaço de Procurando Nemo?",
            opcoes: ["Dory", "Bruce", "Marlin", "Gill"],
            resposta: "Marlin"},

            { pergunta: "Em qual filme aparece o personagem Simba?",
            opcoes: ["Madagascar", "O Rei Leão", "Procurando Nemo", "Shrek"],
            resposta: "O Rei Leão"},

            { pergunta: "Em qual universo cinematográfico aparece Wakanda?",
                opcoes: ["DC", "Marvel", "Star Wars", "Harry Potter"],
                resposta: "Marvel"
            }
        ]
    },

    animais: {
        nome: "Animais e Natureza 🐒🌼",
        perguntas: [
            { pergunta: "Qual é o maior animal do planeta?",
            opcoes: ["Elefante africano", "Girafa", "Baleia-azul", "Tubarão-branco"],
            resposta: "Baleia-azul"},

            { pergunta: "Qual destes animais é um mamífero que voa?",
            opcoes: ["Águia", "Morcego", "Pinguim", "Galinha"],
            resposta: "Morcego"},

            { pergunta: "Qual é o animal terrestre mais rápido?",
            opcoes: ["Leão", "Cavalo", "Guepardo", "Lobo"],
            resposta: "Guepardo"},

            { pergunta: "Qual é o principal alimento dos pandas-gigantes?",
            opcoes: ["Peixes", "Bambu", "Frutas cítricas", "Insetos"],
            resposta: "Bambu"},

            { pergunta: "Qual destes animais é conhecido por mudar de cor?",
            opcoes: ["Camaleão", "Coala", "Panda", "Canguru"],
            resposta: "Camaleão"},
            
            { pergunta: "Como as plantas produzem seu próprio alimento?",
            opcoes: ["Respiração", "Fotossíntese", "Digestão", "Fermentação"],
            resposta: "Fotossíntese"},

            { pergunta: "Qual é o maior felino do mundo?",
            opcoes: ["Leopardo", "Leão", "Tigre", "Onça-pintada"],
            resposta: "Tigre"},
            
            { pergunta: "Qual destes animais é um anfíbio?",
            opcoes: ["Sapo", "Cobra", "Tartaruga", "Águia"],
            resposta: "Sapo"},
            
            { pergunta: "Qual é o processo pelo qual a água passa do estado líquido para o gasoso?",
            opcoes: ["Condensação", "Solidificação", "Evaporação", "Fusão"],
            resposta: "Evaporação"},
            
            { pergunta: "Qual bioma brasileiro é conhecido por sua grande biodiversidade e floresta tropical?",
            opcoes: ["Caatinga", "Amazônia", "Pampa", "Pantanal"],
            resposta: "Amazônia"}
            
        ]
    },

    corpo: {
    nome: "Corpo Humano 🫀",
    perguntas: [
            { pergunta: "Qual órgão é responsável por bombear o sangue?",
                opcoes: ["Pulmão", "Coração", "Estômago", "Fígado"],
                resposta: "Coração"},

            { pergunta: "Quantos ossos tem, geralmente, o esqueleto de um adulto?",
                opcoes: ["106", "206", "306", "406"],
                resposta: "206"},

            { pergunta: "Qual órgão é responsável por filtrar o sangue e produzir a urina?",
                opcoes: ["Rins", "Pulmões", "Intestino", "Pâncreas"],
                resposta: "Rins"},

            { pergunta: "Qual parte do corpo controla os movimentos e pensamentos?",
                opcoes: ["Coração", "Estômago", "Cérebro", "Baço"],
                resposta: "Cérebro"},

            { pergunta: "Qual é o maior órgão do corpo humano?",
                opcoes: ["Coração", "Pele", "Fígado", "Pulmão"],
                resposta: "Pele"},

            { pergunta: "Qual é a função principal dos pulmões?",
                opcoes: ["Bombear sangue", "Produzir hormônios", "Realizar trocas gasosas", "Filtrar a urina"],
                resposta: "Realizar trocas gasosas"},

            { pergunta: "Qual vitamina é produzida na pele com a ajuda da luz solar?",
                opcoes: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina B12"],
                resposta: "Vitamina D"},

            { pergunta: "Qual órgão produz a bile?",
                opcoes: ["Fígado", "Estômago", "Coração", "Rim"],
                resposta: "Fígado"},

            { pergunta: "Qual é o nome das células responsáveis pelo transporte de oxigênio no sangue?",
                opcoes: ["Neurônios", "Hemácias", "Plaquetas", "Leucócitos"],
                resposta: "Hemácias"},

            { pergunta: "Qual sistema é responsável pela defesa do organismo contra agentes infecciosos?",
                opcoes: ["Sistema digestório", "Sistema muscular", "Sistema imunológico", "Sistema esquelético"],
                resposta: "Sistema imunológico"}
        ]
    }
 }

    let nome = "";
    let categoriaSelecionada = "";
    let perguntasAtuais = [];

    let perguntaAtual = 0;
    let pontuacao = 0;
    let respostaSelecionada = false;

    //Conectar JavaScript com HTML
    //document.getElementById("nome"): procura no HTML um elemento que tenha id="nome".
    //document.querySelectorAll(".botao-escolher"): procura todos os elementos que tenham a classe botao-escolher.

    const campoNome = document.getElementById("nome");
    const botoesCategoria = document.querySelectorAll(".botao-escolher");
    const textoPergunta = document.getElementById("textoPergunta");
    const alternativas = document.getElementById("alternativas");
    const numeroPergunta = document.getElementById("numpergunta");
    const categoriaAtual = document.getElementById("atualcategoria");
    const pontuacaoAtual = document.getElementById("puntuacaoatual");
    const feedback = document.getElementById("feedback");
    const botaoProxima = document.getElementById("botaoproxima");

    //Trocar de tela

    function mostrarTela(idTela){
        const telas = document.querySelectorAll("main > section");
        //Procura todas as seções (section) que estão diretamente dentro do elemento main do HTML e guarda o resultado em telas
        telas.forEach(function(tela) { //O forEach() serve para passar por cada elemento de uma lista, um de cada vez, tela está sendo analisada.
             tela.style.display = "none"; //esconde a tela atual
        });

        document.getElementById(idTela).style.display = ""; 

        window.scrollTo({ //faz a tela rolar la pra cima
            top: 0,
            behavior: "smooth" //faz a rolagem ser suave
        });
    }

    //iniciar o QUIZ

    function EntrarQuiz(){
        nome = campoNome.value.trim(); //O trim tira o espaço no inicio e final
        if(nome === ""){
            alert("O nome é obrigatório. Digite seu nome!");
            campoNome.focus(); //focus abre pra digitar no campo de nome
        } else{
            mostrarTela("categorias");
        }
    }

    //Escolher Categoria

    botoesCategoria.forEach(function(botao) {
        botao.addEventListener("click", function() { //Quando alguém clicar neste botão, execute o código que está dentro desta função.
            categoriaSelecionada = botao.dataset.categoria; //pega o valor que está dentro de data-categoria.
            iniciarJogo();
        });
    });

    //Iniciar Jogo

    function iniciarJogo(){
        perguntasAtuais = categorias[categoriaSelecionada].perguntas;
        perguntaAtual = 0;
        pontuacao = 0;
        categoriaAtual.textContent = categorias[categoriaSelecionada].nome; //- .textContent: altera o texto de um elemento HTML.
        atualizarPontuacao();
        mostrarTela("jogo");
        carregarPergunta();
    }

    // Carregar as Perguntas

    function carregarPergunta(){
        respostaSelecionada = false; //Pega a pergunta correspondente à posição atual do array e guarda na variável dados, se perguntaAtual for 0, pega a primeira pergunta.
        const dados = perguntasAtuais[perguntaAtual];
        textoPergunta.textContent = dados.pergunta;//Coloca o enunciado da pergunta na página
        numeroPergunta.textContent = (perguntaAtual + 1) + "/10";
        alternativas.innerHTML = ""; //limpa o conteúdo anterior da área de alternativas
        feedback.textContent = ""; //Apaga a mensagem da resposta anterior
        botaoProxima.disabled = true; //desativa o botao da proxima pergunta, assim o usuario e obrigado a selecionar

        dados.opcoes.forEach(function(opcao) {
            const botao = document.createElement("button"); //Cria um novo elemento HTML do tipo botão.
            botao.classList.add("alternativa"); //classe alternativa no CSS.
            botao.textContent = opcao;
            botao.type = "button";

            botao.addEventListener("click", function() {
                verificarResposta(opcao, botao);
            });
            alternativas.appendChild(botao); //Adiciona o botão criado dentro da área de alternativas do HTML.
        });

        if(perguntaAtual === perguntasAtuais.length - 1) { //.length: informa quantos elementos existem no array.
            botaoProxima.textContent = "Ver Resultado";
        } else{
            botaoProxima.textContent = "Próxima Pergunta";
        }
    }

    // Verificar Resposta

        function verificarResposta(opcaoEscolhida, botaoClicado) {
            if(respostaSelecionada){
                return; //Se já respondeu, o código não permite que a resposta seja processada novamente.
            }
            respostaSelecionada = true;
            const respostaCorreta = perguntasAtuais[perguntaAtual].resposta;
            const botoes = alternativas.querySelectorAll("button");
            botoes.forEach(function(botao) {
                botao.disabled = true; //desativa todos os botoes caso a resposta ja tenha sido escolhida
                if(botao.textContent === respostaCorreta) {
                    botao.classList.add("correta"); //adiciona a classe CSS correta
                }
            });
            if(opcaoEscolhida === respostaCorreta){
                pontuacao = pontuacao + 10;
                feedback.textContent = "Resposta Correta!";
                feedback.style.color = "green";
            } else{
                botaoClicado.classList.add("errada");
                feedback.textContent = "Resposta Incorreta! A resposta correta é: " + respostaCorreta;
                feedback.style.color = "red";
            }
            atualizarPontuacao();
            botaoProxima.disabled = false;
        }

    // Atualizar Pontuação

    function atualizarPontuacao(){
        pontuacaoAtual.textContent = pontuacao;
    }

    // Próxima Pergunta

    botaoProxima.addEventListener("click", function() {
        if(!respostaSelecionada){ //verifica se o jogador ainda  não respondeu, se não, encerra a função
            return;
        }
        perguntaAtual++;
        if(perguntaAtual < perguntasAtuais.length){ //.length: informa quantos elementos existem no array.
            carregarPergunta();
        } else{
            mostrarResultado(); //Se não houver mais perguntas, chama a função que mostra o resultado final.
        }
    });

    // Mostrar Resultado Final

    function mostrarResultado(){
        document.getElementById("mensagemresultado").textContent = "Parabéns, " + nome + "!";
        document.getElementById("pontos").textContent = pontuacao + " pontos!";
        const mensagem = document.getElementById("trechoresultado");
        if(pontuacao === 100){
            mensagem.textContent = "Você acertou todas as perguntas. Parabéns!";
        } else if(pontuacao>=70){
            mensagem.textContent = "Muito bem! Você demonstrou ótimos conhecimentos!";
        } else if(pontuacao>=40){
            mensagem.textContent = "Bom Trabalho! Continue aprendendo e praticando!";
        } else{
            mensagem.textContent = "Não desanime! Tente novamente e melhore sua pontuação!";
        }
        mostrarTela("resultado");
    }

    // Jogar Novamente

    document.getElementById("botaojogardenovo").addEventListener("click", function() {
        mostrarTela("categorias");
    });

    //Voltar ao inicio

    document.getElementById("botaoinicio").addEventListener("click",function() {
        campoNome.value = "";
        nome = "";
        mostrarTela("inicio");
    });

    //Iniciar na tela inicial

    mostrarTela("inicio");





