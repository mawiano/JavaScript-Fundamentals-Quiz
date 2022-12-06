var questionEl = document.getElementById("question");
var currentIndex = 0
var startButton = document.querySelector("#Begin");
var startPage = document.querySelector("#start-page");



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
startPage.setAttribute("class", "hidden");
}

// function getQuestion() {
//     var currentQuestion= questions[currentIndex]
//     questionEl.textContent = currentQuestion.question


//     for (let i = 0; i < currentQuestion.choices.length; i++) {
      
//         var answer= currentQuestion.choices[i]
//         console.log (answer)
//         var button= document.createElement('button')
//         button.textContent = 
//         var questionBox= document.getElementById("question-container")
//         questionBox.appendChild(button)
//     }




// }

// getQuestion() 

startButton.addEventListener("click", beginQuiz);

