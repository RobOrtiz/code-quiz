var start = document.querySelector("#startBtn");
var quiz = document.querySelector("quiz");
var question = document.querySelector(".question");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
// var timeGauge = document.getElementById("timeGauge");
// var progress = document.getElementById("progress");
// var scoreDiv = document.getElementById("scoreContainer");
var timer;
var time = 120;
var introContainer = document.querySelector(".intro-container");
var questionContainer = document.querySelector("#question-container");
var endContainer = document.querySelector("#end-container");
// Questions
var count = 0
window.onload = function () {
    questionContainer.classList.add("hidden");
    endContainer.classList.add("hidden");
}


// Questions Array
let questionBank = [
    {
        question : "What is known as the skeleton of a website?",
        choiceA : "HTML",
        choiceB : "Skull",
        choiceC : "CSS",
        choiceD : "Javascript",
        correct : "A"
    },{
        question : "What is referred to as the clothing for a website?",
        choiceA : "Shoes",
        choiceB : "Javascript",
        choiceC : "HTML",
        choiceD : "CSS",
        correct : "D"
    },{
        question : "What is known as the muscles of a website?",
        choiceA : "CSS",
        choiceB : "HTML",
        choiceC : "Javascript",
        choiceD : "Biceps",
        correct : "C"
    },{
        question : "What is Bootstrap?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Correct",
        correct : "D"
    },{
        question : "What is an acronym coders should remember?",
        choiceA : "D.A.R.E",
        choiceB : "L.O.L",
        choiceC : "D.R.Y.",
        choiceD : "B.R.B",
        correct : "C"
    }

];

start.addEventListener("click", function() {
    introContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    startTimer();
    askQuestion();
});

function startTimer() {
    //hide start button

    introContainer.classList.add("hide");
    //show the question
    questionContainer.classList.remove("hide");
    //show the timer
    timer = setInterval(function() {
        
        //subtract time
        time--;
        //show updated time
        document.querySelector("#timer").textContent = time;
        //end time and quiz
        if (time <= 0) {
          clearInterval(timer);
            //  endQuiz;
        }
    }, 1000);
};


var lastQuestion = questionBank.length - 1;
var runningQuestion = 0;
var score = 0

// Generate Questions
function askQuestion(){
    let q = questionBank[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    runningQuestion++;
}
    
start.addEventListener("click", askQuestion);

// Get answer
var choiceArray = document.querySelector("#question-container .choices");

for (let i =0; i < choiceArray.length; i++) {
    [i].addEventListener("click", function(event) {
        checkAnswers(event);
    });
}

// checkAnswer

function checkAnswer(answer){
    if (event.target.textContent === [index].correct){
        // answer is correct
        score++;
        
    } else { 
        // answer is wrong
        time = time - 5;
    }  
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
