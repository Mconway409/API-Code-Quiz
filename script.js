const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCountStatus = document.getElementById('questionCount');
const currentScore = document.getElementById('score');


let currentQuestion = {};
let acceptAnswer = false
let score = 0;
let questionCount = 0;
let availableQuestions = [];


let questions = [
{
    question: " ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    choice1: "<script>",
    choice2: "<body>",
    choice3: "<head>",
    choice4: "<title>",
    answer: 1,
},

{
    question: "What is the correct syntax for referring to an external script called 'abc.js'?",
    choice1: "<script href=' abc.js'>",
    choice2: "<script name=' abc.js'>",
    choice3: "<script src=' abc.js'>",
    choice4: "None of the above",
    answer: 3,
},

{
    question: "Arrays in Javascript can be used to store ______?",
    choice1: "Numbers and strings",
    choice2: "Other arrays",
    choice3: "Booleans",
    choice4: "All of the above",
    answer: 4,
},

{
    question: "The condition in an if/else statement is enclosed within ______?",
    choice1: "Brackets",
    choice2: "Parentheses",
    choice3: "Curly Brackets",
    choice4: "Back Slashes",
    answer: 2,
},

{
    question: "Who invented JavaScript?",
    choice1: "Brendan Eich",
    choice2: "Steve Jobs",
    choice3: "John Candy",
    choice4: "JavaScript isn't real.....",
    answer: 1,
},
];

const SCORE_ADD = 1;
const TOTAL_QUESTIONS = 5;

startGame = () => {
    var timer = 60;
    questionCount = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNextQuestion();
};

getNextQuestion = () => {
  
    if (availableQuestions.length === 0 || questionCount >= TOTAL_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('gameover.html');
    }

    questionCount++;
    questionCountStatus.innerText = questionCount + "/" + TOTAL_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptAnswers = true;

};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptAnswers) return;

        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            addScore(SCORE_ADD);
        }

        getNextQuestion();
    })
});


addScore = num => {
    score += num;
    currentScore.innerText = score;
};

var count = 30;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0 || currentQuestion === availableQuestions.length){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
  }
}, 1000);


startGame(); 


