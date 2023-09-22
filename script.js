const questions = [
    {
        question: "Qual é o curso necessário para transportar cargas perigosas?",
        options: ["a) Curso de praticagem", "b) Cnh", "c) Mopp"],
        correctAnswer: 2
    },
    {
        question: "Qual é o documento que atesta a origem da mercadoria?",
        options: ["a) BL", "b) Certificado de Origem", "c) Packing-List"],
        correctAnswer: 1
    },
    {
        question: "Em qual sistema é registrado todas as declarações de importação e exportação de produtos?",
        options: ["a) Comex-Stat", "b) Siscoserv", "c) Siscomex / Portal Único"],
        correctAnswer: 2
    },
    {
        question: "Qual o documento que formaliza a operação de compra ou de venda de moeda estrangeira?",
        options: ["a) Ptax", "b) Contrato de Câmbio", "c) Invoice"],
        correctAnswer: 1
    },
    {
        question: "Qual o tipo de contêiner que pode ser inserido temperatura?",
        options: ["a) Container Reefer", "b) Container Dry", "c) Container Plataforma"],
        correctAnswer: 0
    },
    {
        question: "Que tipo de contêiner é utilizado para carga com excesso de altura?",
        options: ["a) Open-top", "b) High-Cubic", "c) Iso-Tank"],
        correctAnswer: 0
    },
    {
        question: "Qual órgão é responsável por controlar e regular a entrada e saída de mercadorias no país?",
        options: ["a) Alfândega", "b) MAPA", "c) SECEX"],
        correctAnswer: 0
    },
    {
        question: "Qual Profissional que auxilia as empresas no regimento dos documentos necessários para a importação e exportação?",
        options: ["a) Despachante", "b) Transportadora", "c) Armador"],
        correctAnswer: 0
    },
    {
        question: "Qual termo que descreve a venda de produtos de um país para outro?",
        options: ["a) Importação", "b) Exportação", "c) Nacionalização"],
        correctAnswer: 1
    },
    {
        question: "Qual o termo internacional que regem os custos e responsabilidades de importadores e exportadores na entrega de mercadorias?",
        options: ["a) Incoterm", "b) NCM", "c) AFRMM"],
        correctAnswer: 0
    },
    {
        question: "Qual é o documento marítimo essencial, exigido pela alfândega, que lista as mercadorias em transporte?",
        options: ["a) AWB", "b) BL", "c) Nota Fiscal"],
        correctAnswer: 1
    },
    {
        question: "Qual é a moeda mais utilizada no comércio internacional?",
        options: ["a) Real", "b) Euro (EUR)", "c) Dolar (USD)"],
        correctAnswer: 2
    },
    {
        question: "Qual é o nome do sistema internacional de classificação de produtos usados para fins de importação e exportação?",
        options: ["a) Sistema único de Importação", "b) Sistema Harmonizado", "c) Sistema Humanizado"],
        correctAnswer: 1
    },
    {
        question: "Qual o documento que fornece informações detalhadas sobre o valor, origem e classificação de mercadorias para fins aduaneiros?",
        options: ["a) Manifesto de Carga ", "b) Packing-list ", "c) Fatura comercial"],
        correctAnswer: 2
    },
    {
        question: "Qual o termo onde o vendedor é responsável por entregar a mercadorias no porto de embarque?",
        options: ["a) CPT (Carriage Paid To)", "b) FOB (Free on Board)", "c) EXW (Ex Works)"],
        correctAnswer: 1
    },
    {
        question: "Qual o termo que descreve a compra de produtos de outros países?",
        options: ["a) Importação", "b) Exportação", "c) Despacho aduaneiro"],
        correctAnswer: 0
    },
    {
        question: "Qual organização que trata das regras do comércio internacional?",
        options: ["a) OMC (Organização Mundial do Comércio Exterior)", "b) OMA (Organização Mundial das Alfândegas)", "c) ONU (Organização das Nações Unidas)"],
        correctAnswer: 0
    },
    {
        question: "Grande recipiente usado para transportar mercadorias em navios, trens e caminhões?",
        options: ["a) Baú", "b) Caixote", "c) Contêiner"],
        correctAnswer: 2
    },
    {
        question: "Qual é o produto mais importado da China?",
        options: ["a) Eletrônico", "b) Metal", "c) Automóveis"],
        correctAnswer: 0
    },
    {
        question: "Qual é o produto mais importado do Japão?",
        options: ["a) Autoparts", "b) Eletrodomésticos", "c) Soja e Café"],
        correctAnswer: 0
    },
    {
        question: "Como é chamada a operação de troca de moeda entre países?",
        options: ["a) Transferência", "b) TED", "c) Câmbio"],
        correctAnswer: 2
    },
    {
        question: "Qual o canal de parametrização que representa possível fraude na importação?",
        options: ["a) Amarelo", "b) Verde", "c) Cinza"],
        correctAnswer: 2
    },
    {
        question: "Qual o canal de parametrização que representa análise documental e física na importação?",
        options: ["a) Vermelho", "b) Amarelo", "c) Laranja"],
        correctAnswer: 0
    },
    {
        question: "No incoterm CIF, quem fica responsável pelo transporte?",
        options: ["a) Exportador", "b) Importador", "c) Fabricante"],
        correctAnswer: 0
    },
    {
        question: "Qual código é usado para identificar a natureza de produtos comercializados no Brasil e em outros países do Mercosul?",
        options: ["a) SH", "b) NCM", "c) CIM"],
        correctAnswer: 1
    },
    {
        question: "Qual barreira visa proteger a saúde humana e animal?",
        options: ["a) Sanitária", "b) Fitossanitária", "c) Barreiras tarifárias"],
        correctAnswer: 0
    },
    {
        question: "Qual barreira que visa proteger a saúde vegetal, assim como controle de pragas e doenças?",
        options: ["a) Sanitária", "b) Barreiras não tarifárias", "c) Fitossanitária"],
        correctAnswer: 2
    },
    {
        question: "Qual nome da taxa cobrada pelo armador, para os contêineres vazios que excedem o prazo de entrega?",
        options: ["a) Taxa de estocagem", "b) Demurrage", "c) Detention"],
        correctAnswer: 1
    },



    // Resto das perguntas..
];

let availableQuestions = questions.slice();
let currentQuestion = null;

const menu = document.getElementById("menu");
const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const audio = document.getElementById("background-audio");

startButton.addEventListener("click", () => {
    menu.style.display = "none"; // Oculta o menu inicial
    quizContainer.style.display = "block"; // Exibe o contêiner do quiz
    audio.play(); // Inicia a reprodução do áudio
    loadQuestion(); // Inicia o quiz
});

const questionText = document.getElementById("question-text");
const answerButtons = document.querySelectorAll(".answer-option");
const showAnswerButton = document.getElementById("show-answer");
const nextQuestionButton = document.getElementById("next-question");
const noQuestionsMessage = document.getElementById("no-questions-message");

function loadQuestion() {
    if (availableQuestions.length === 0) {
        noQuestionsMessage.textContent = "Não há mais perguntas disponíveis.";
        questionText.textContent = "";
        answerButtons.forEach(button => {
            button.textContent = "";
            button.disabled = true;
        });
        showAnswerButton.disabled = true;
        nextQuestionButton.disabled = true;
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[randomIndex];
    availableQuestions.splice(randomIndex, 1);

    questionText.textContent = `${currentQuestion.question}`;

    currentQuestion.options.forEach((option, index) => {
        answerButtons[index].textContent = option;
        answerButtons[index].classList.remove("correct");
        answerButtons[index].classList.remove("incorrect");
        answerButtons[index].disabled = false;
    });

    showAnswerButton.disabled = false;
    nextQuestionButton.disabled = true;
    noQuestionsMessage.textContent = "";
}

function revealAnswer() {
    answerButtons[currentQuestion.correctAnswer].classList.add("correct");
    showAnswerButton.disabled = true;
    nextQuestionButton.disabled = false;
}

function checkAnswer(button) {
    button.disabled = true;

    if (button.textContent === currentQuestion.options[currentQuestion.correctAnswer]) {
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
        answerButtons[currentQuestion.correctAnswer].classList.add("correct");
    }

    showAnswerButton.disabled = true;
    nextQuestionButton.disabled = false;
}

answerButtons.forEach(button => {
    button.addEventListener("click", () => {
        checkAnswer(button);
    });
});

showAnswerButton.addEventListener("click", revealAnswer);
nextQuestionButton.addEventListener("click", loadQuestion);

loadQuestion();