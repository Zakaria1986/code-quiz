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
var choices = doc.querySelector("#choices");

// This is not part of the requirement for this challange
var pTag = doc.createElement('p');
pTag.innerText = quizTerms;
btnStart.insertAdjacentElement('beforebegin', pTag);
// global varialbes used inside functions
var CountDowntimerSec = 60;
var currentIndex = 0;
var NextIndex = currentIndex + 1;

/** Ends here **/


// Create DOM elements


// countDown function from 60 to 0

function countDown(timerSec) {

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



choices.addEventListener('click', function (e) {
    if (e.target) {
        currentIndex++;
    }
    // elementClicked = false;
    if (choices.hasChildNodes()) {

        choices.innerHTML = " ";
        presentQuiz(currentIndex);
    }

});



// function NextQuestion() {

//     presentQuiz(currentIndex);
//     countDown();
//     userSelection();
//     // checkCurrentIndex(questions, currentIndex);
// }


function presentQuiz(currIndex) {

    var questionsPlaceHolder = doc.querySelector("#questions");
    var startScrean = doc.querySelector("#start-screen");
    var questionTile = doc.querySelector("#question-title");

    questionTile.innerText = questions[currIndex].title;

    for (var i = 0; i < questions[currIndex].choices.length; i++) {

        var btn = doc.createElement('BUTTON');
        btn.setAttribute("class", "userChoice");
        // Setting custome attribute 
        btn.setAttribute("data-choice", questions[currIndex].choices[i]);
        btn.innerText = i + 1 + " " + questions[currIndex].choices[i];
        console.log(currIndex);
        choices.append(btn);
    }
    questionsPlaceHolder.classList.remove("hide");
    startScrean.classList.add('hide');
}


choices.addEventListener('click', userSelection)
// Get the User choice of answers
function userSelection(e) {
    var clickFeedBack;
    if (e.target) {
        var userClicpResult = e.target;
        // clickFeedBack = userClicpResult.getAttribute('data-choice');
        clickFeedBack = userClicpResult.dataset.choice;

    }
    // Pass on the choice to userFeedback function for validation
    userFeedback(clickFeedBack);
}


// User feedback functions, which validates the user choice with correct answer
function userFeedback(feedback) {
    var UserAlermessage;
    var userAlert = doc.getElementById('feedback');

    for (var i = 0; i < questions[currentIndex].choices.length; i++) {
        if (questions[currentIndex].choices[i] === feedback) {
            UserAlermessage = "Correct answer";
        }
        else {
            UserAlermessage = 'Wrong answer';
        }
        userAlert.classList.remove('hide');
        userAlert.innerText = UserAlermessage;
    }

}
// Logic to get the right answer checks
function startQuiz() {
    presentQuiz(currentIndex);
    countDown(CountDowntimerSec);
    //console.log(userSelection());

}

function callBackFunc() {
    startQuiz();
}
// When start button is click countDown function gets regards and the function is passed by reference
btnStart.addEventListener('click', callBackFunc);


// function NextQuestion() {
//     var usersChoice = doc.querySelector("#choices");
//     var elementClicked = true;
//     usersChoice.addEventListener('click', function (e) {
//         if (e.targetelementClicked) {
//             currentIndex++;
//             startQuiz();
//         }
//         // elementClicked = false;


//     });
// }





