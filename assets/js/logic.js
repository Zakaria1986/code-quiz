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
// CountDowntimerSec.addEventListener('change', function () {
//     countDown(CountDowntimerSec);
// });

if (CountDowntimerSec < 0) {
    CountDowntimerSec = 0;


}



var currentIndex = 0;

var ChoiceIndex = 0;

/** Ends here **/

// Create DOM elements

// countDown function from 60 to 0

function countDown() {

    var interVal = setInterval(function () {
        var timerUpdate = doc.querySelector('#time');
        timerUpdate.innerText = CountDowntimerSec;
        if (CountDowntimerSec < 0) {
            CountDowntimerSec = 0;
            timerUpdate.innerText = CountDowntimerSec;
            clearInterval(interVal);
        }
        // else if (wrongAnswerDecrement() === "Wrong answer") {
        //     console.log("its working");
        // }
        CountDowntimerSec--;
    }, 1000
    );
}

var click = true;
choices.addEventListener('click', function (e) {

    if (click) {
        // Index set to 0 for choices question. when the choice is clicked the current index for question gets increment so need to keep choice quesiton 
        // one one index position less to it maches with the same index as the title index
        ChoiceIndex = currentIndex;

        // then run the presentQuiz with next question
        userSelection(e);
        setTimeout(() => {
            currentIndex++;
            presentQuiz(currentIndex);

            //userFeedback(currentIndex);
        }, 1000);
    }
});

// This ist he main fuction which gets the questions and creates DOM elements
function presentQuiz(currIndex) {

    var questionsPlaceHolder = doc.querySelector("#questions");
    var startScrean = doc.querySelector("#start-screen");
    var questionTile = doc.querySelector("#question-title");

    var lastIndex = questions[questions.length - 1] || 0;

    for (var i = 0; i < questions[currIndex].choices.length; i++) {
        var title = questions[currIndex].title;
        questionTile.innerText = title;

        // Set if statement, which stops the timer if the question i the last item in the array



        // Keeping track of score question is the last question in the array;
        if (currIndex === lastIndex) {
            var score = CountDowntimerSec;
            console.log('Your score is ' + CountDowntimerSec);
        }

        var btn = doc.createElement('BUTTON');
        btn.setAttribute("class", "userChoice");
        // Setting custome attribute 
        btn.setAttribute("data-choice", questions[currIndex].choices[i]);
        btn.innerText = i + 1 + " " + questions[currIndex].choices[i];
        console.log("array obj index " + currIndex);
        choices.append(btn);
    }
    questionsPlaceHolder.classList.remove("hide");
    startScrean.classList.add('hide');
}

// choices.addEventListener('click', userSelection)
// Get the User choice of answers
function userSelection(e) {
    var clickFeedBack;
    if (e.target) {
        var userClicpResult = e.target;
        // clickFeedBack = userClicpResult.getAttribute('data-choice');
        clickFeedBack = userClicpResult.dataset.choice;
        console.log("this is user feeback from userSelection e " + clickFeedBack);
    }
    // Pass on the choice to userFeedback function for validation
    userFeedback(clickFeedBack);
}

// User feedback functions, which validates the user choice with correct answer
function userFeedback(feedback) {
    console.log("hello this your freind feedback function userfeedback " + feedback);
    var currIndex = ChoiceIndex;
    var UserAlermessage;
    var userAlert = doc.getElementById('feedback');
    var rightAnswer = questions[currIndex].answer;
    console.log('what is the answer here: ' + rightAnswer);
    // console.log(questions["Current index " + currIndex]);

    // for (var i = 0; i < currInextChoice.length; i++) {
    if (feedback === rightAnswer) {
        UserAlermessage = "Correct answer";
    }
    else {
        UserAlermessage = 'Wrong answer';
        if (CountDowntimerSec >= 0) {
            CountDowntimerSec -= 10;
        }
    }

    userAlert.classList.remove('hide');
    userAlert.innerText = UserAlermessage;

    setTimeout(() => {
        // check if the choices exist from previouse quesiton if it does then set the choices to empty
        if (choices.hasChildNodes()) {
            choices.innerHTML = " ";
        }
        // the feedback message before loading the next question
        userAlert.classList.add('hide');
    }, 1000);

}

// Logic to get the right answer checks
function startQuiz() {
    presentQuiz(currentIndex);
    countDown();
    //console.log(userSelection());
}

function callBackFunc() {
    startQuiz();
}
// When start button is click countDown function gets regards and the function is passed by reference
btnStart.addEventListener('click', callBackFunc);





