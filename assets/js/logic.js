// 1. Grab the start button from index.html: document.querySeelctor("button name") then store in a variable
// 2.  On click methods: addEventListener('click', function(){}); 
// 3. write some questions: Use dom methods to create and store series of question then appand to the dom, which would go inside the addEventListner function
// 4. Write a timer function: that start as the button is clicked;  
// 4. Write so conditional statement to check:
// - if the the user selects the wirte answer present the next question 
// - else/else if deduct time from the timer and resent the net question
// if there is no question left or the timer has reached 0, end the game. 
// 5. Ask user to enter their initials:
// create form in the form insert input box 
// then take the value store it in browser local storage or in an array or an object 
// get the information and present it to the user 


// short hand of document select for global access
var doc = document;
var pTag = doc.createElement('p');

// Getting the start elements from DOM

var btnStart = doc.getElementById('start');

// This is not part of the requirement for this challange
var pTag = doc.createElement('p');
pTag.innerText = quizTerms;
btnStart.insertAdjacentElement('beforebegin', pTag);
/** Ends here **/

// Create DOM elements

// countDown function from 60 to 0
function countDown() {
    var timerSec = 60;
    var interVal = setInterval(function () {
        var timerUpdate = doc.querySelector('#time');
        timerUpdate.innerText = timerSec;

        if (timerSec == 0) {
            clearInterval(interVal);
        };
        timerSec--;
    }, 1000
    );
}
// When start button is click countDown function gets regards and the function is passed by reference
btnStart.addEventListener('click', callBackFunc);

// Logic to get the right answer checks





function startQuiz() {
    var currentQuestionIndex;

    var questionsPlaceHolder = document.querySelector("#questions");
    var startStrean = doc.querySelector("#start-screen");

    var ul = document.createElement('ul');


    var currentIndex = 0;

    var questionTile = doc.querySelector("#question-title");

    questionTile.innerText = questions[currentIndex].title;


    for (var i = 0; i < questions[currentIndex].choices.length; i++) {
        var li = document.createElement('li');
        li.innerText = questions[currentIndex].choices[i];

        ul.appendChild(li);
        console.log(questions[i].title + "\n\n" + questions[i].choices);
    }

    questionsPlaceHolder.classList.remove("hide");
    startStrean.classList.add('hide');
    questionsPlaceHolder.append(ul);
}

function userSelection() {
    var choices = questions[0].choices;

    for (var i = 0; i < choices.length; i++) {

        for (var ans = 0; ans < quizAnswers.length; ans++) {
            if (choices[i] === quizAnswers[ans]) {
                console.log(choices[i] + " " + quizAnswers[ans]);
            }
        }

    }
}

function callBackFunc() {
    startQuiz();
    countDown();
}




