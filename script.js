const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptAnswer = false
let score = 0;
let questionCount = 0;
let availableQuestions = [];




let questions = [
{
    question: "Arrays in Javascript can be used to store ______?",
    choice1: "Numbers and strings",
    choice2: "Other arrays",
    choice3: "Booleans",
    choice4: "All of the above",
},

{
    question: "Arrays in Javascript can be used to store ______?",
    choice1: "Numbers and strings",
    choice2: "Other arrays",
    choice3: "Booleans",
    choice4: "All of the above",
},

{
    question: "Arrays in Javascript can be used to store ______?",
    choice1: "Numbers and strings",
    choice2: "Other arrays",
    choice3: "Booleans",
    choice4: "All of the above",
},

{
    question: "Arrays in Javascript can be used to store ______?",
    choice1: "Numbers and strings",
    choice2: "Other arrays",
    choice3: "Booleans",
    choice4: "All of the above",
},

{
    question: "Arrays in Javascript can be used to store ______?",
    choice1: "Numbers and strings",
    choice2: "Other arrays",
    choice3: "Booleans",
    choice4: "All of the above",
},
];

const SCORE_ADD = 1;
const TOTAL_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNextQuestion();
};

getNextQuestion = () => {
    if(availableQuestions.length === 0 || questionCount >= TOTAL_QUESTIONS) {
        return window.location.assign("end.html");
    }
    questionCount++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptAnswer) return;

        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNextQuestion();
    });
})

startGame(); 

