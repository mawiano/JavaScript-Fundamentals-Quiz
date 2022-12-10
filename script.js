var questionEl = document.querySelector("#question");
var currentIndex = 0
var startButton = document.querySelector("#Begin-button");
var questionsContainer = document.querySelector("#questions-container");
var startPage = document.querySelector("#start-page");
var timer = document.querySelector(".timer")
var timeRemaining= 60;
var answerEl= document.querySelector(".answers")

var quizQA = [
    {
    question: "Which is a JavaScript Data Type?",
    options: ["Number", "String", "Boolean", "All of the Above"],
    correctChoice: "All of the above"
},
{
    question: "When was JavaScript created?",
    options: ["2001", "1995", "1987", "2005"],
    correctChoice: "1995"
},
{
    question: "What was the original name for JavaScript?",
    options: ["Mocha", "JavaChip", "VanillaBean", "LavaScript"],
    correctChoice: "Mocha"
},
{
    question: "How do you denote an array in JavaScript?",
    options: ["()", "{}", "//", "[]"],
    correctChoice: "[]"
},
]
function beginQuiz(){
    startTimer();
startPage.setAttribute("class", "hidden");
}

function startTimer(){
    clockInterval= setInterval(function(){
        timeRemaining--; 
        timer.textContent= "time remaining: " + timeRemaining;
        if (timeRemaining<= 0){
            clearInterval(clockInterval);
            timeRemaining= 0; 
            timer.textContent="";
            endQuiz();
            questionsContainer.innerHTML="";

        }
    }, 1000);
}


function displayQuestion(questionIndex){
    questionEl.textContent= quizQA[questionIndex].question;
questionsContainer.append(questionEl);
answerEl.textContent= "";
for (var i=0; i<quizQA[questionIndex].options.length; i++){
    
}
}



startButton.addEventListener("click", beginQuiz);



// Click start button, Run timer, show questions and choices
// Click on answer choice, go to next question.
// End of quiz, or time up, go to end page.
// Enter initials, save to local storage along with score, print to page on finals scores list. 
