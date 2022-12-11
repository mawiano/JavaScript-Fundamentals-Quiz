var questionEl = document.querySelector("#question");
var currentIndex = 0
var startButton = document.querySelector("#Begin-button");
var questionsContainer = document.querySelector(".questions-container");
var startPage = document.querySelector("#start-page");
var timer = document.querySelector(".timer")
var timeRemaining= 60;
var answerEl= document.querySelector(".answers")

var quizQA = [
    {
    question: "Which is a JavaScript Data Type?",
    options: ["Number", "String", "Boolean", "All of the Above"],
    correctChoice: "All of the Above"
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
questionsContainer.classList.remove("hidden");
displayQuestion();
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

// Function to Display the questions and answer choices.
function displayQuestion(){
    var currentQuestion= quizQA[currentIndex];
    var title= currentQuestion.question;
    var choices= currentQuestion.options; 
    var correctAnswer= currentQuestion.correctChoice;

    questionEl.textContent= title;
// Looping through the array of questions 
answerEl.innerHTML= "";
for (var i=0; i<choices.length; i++){
    var listElement= document.createElement("li");
    var choice= choices[i];
    listElement.textContent= choice;
    if (choice=== correctAnswer){
        listElement.dataset.correctAnswer= true; 
    }else {
        listElement.dataset.correctAnswer= false;
    }
// 
listElement.addEventListener("click", function(event){
event.preventDefault();
var currentchoice = event.target 
console.log(currentchoice)
currentIndex++ 
displayQuestion()
})




    answerEl.appendChild(listElement);
}
}



startButton.addEventListener("click", beginQuiz);



// Click start button, Run timer, show questions and choices
// Click on answer choice, go to next question.
// End of quiz, or time up, go to end page.
// Enter initials, save to local storage along with score, print to page on finals scores list. 
