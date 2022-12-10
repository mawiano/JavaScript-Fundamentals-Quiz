var questionEl = document.getElementById("question");
var currentIndex = 0
var startButton = document.querySelector("#Begin");
var questionsContainer = document.querySelector("#questions-container");



var questions = [
    {
    question: "1Which is a JavaScript Data Type?",
    choices: ["Number", "String", "Boolean", "All of the Above"],
    correctChoice: "All of the above"
},
{
    question: "2Which is a JavaScript Data Type?",
    choices: ["Number", "String", "Boolean", "All of the Above"],
    correctChoice: "All of the above"
},
{
    question: "3Which is a JavaScript Data Type?",
    choices: ["Number", "String", "Boolean", "All of the Above"],
    correctChoice: "All of the above"
},
]
function beginQuiz(){
    // startTimer();
questionsContainer.setAttribute("class", "hidden");
}

startButton.addEventListener("click", beginQuiz);

