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
var submitInitial = doc.querySelector("#submit");

// This is not part of the requirement for this challange
var pTag = doc.createElement('p');
pTag.innerText = quizTerms;
btnStart.insertAdjacentElement('beforebegin', pTag);
// global varialbes used inside functions
var CountDowntimerSec = 60;
// CountDowntimerSec.addEventListener('change', function () {
//     countDown(CountDowntimerSec);
// });
var lastIndex = questions[questions.length - 1] || 0;
var currentIndex = 0;
var ChoiceIndex = 0;
var interVal;
var score;


// window locatoin to send user to highcore page 

/** Ends here **/

// Create DOM elements

// countDown function from 60 to 0

function countDown() {

    interVal = setInterval(function () {
        var timerUpdate = doc.querySelector('#time');
        timerUpdate.innerText = CountDowntimerSec;
        if (CountDowntimerSec <= 0) {
            CountDowntimerSec = 0;
            endQuiz();
        }
        // else if (wrongAnswerDecrement() === "Wrong answer") {
        //     console.log("its working");
        // }

        CountDowntimerSec--;

    }, 1000
    );

    if (currentIndex == lastIndex && (currentIndex == "undefined" || ChoiceIndex == "undefined")) {
        clearInterval(interVal);
    }
}
// this function ends the quiz based on some condition 
function endQuiz() {
    var questionsPlaceHolder = doc.querySelector("#questions");
    questionsPlaceHolder.classList.add("hide");

    var endScreenPlaceHolder = doc.querySelector("#end-screen");
    endScreenPlaceHolder.classList.remove("hide");

    var finalScore = doc.querySelector("#final-score");
    finalScore.innerText = CountDowntimerSec;
}

// When the initial is attempted to save the code below saves the score and intial 
// in the local storage on the browser, which then redirect user to highscore page
submitInitial.addEventListener('click', function (e) {
    e.preventDefault;
    // This code checks to see if the timer is 0 or less, if so return 0 and not -1
    if (CountDowntimerSec <= 0) {
        CountDowntimerSec = 0;
    }


    var getUserInitial = doc.getElementById("initials").value;
    var browserLocalStorage = [
        {
            "UserScore": CountDowntimerSec,
            "userInitial": getUserInitial
        }];

    localStorage.setItem("quizResult", JSON.stringify(browserLocalStorage));

    window.location.href = "./highscores.html";



});
// click = true is used in the if codition within the choice event to check if the event is clicked, 
// if so then excute the code inside 
var click = true;
choices.addEventListener('click', function (e) {

    if (click) {
        // Index set to 0 for choices question. when the choice is clicked the current index for question gets increment so need to keep choice quesiton 
        // one one index position less to it maches with the same index as the title index
        ChoiceIndex = currentIndex;
        //
        // then run the presentQuiz with next question
        userSelection(e);

        setTimeout(() => {

            // very time the next question is fetched presented 
            // Code checks to see if the current index is last element in the array 
            // if so end quiz other wise continue to get the next question
            if (questions.length - 1 === currentIndex || CountDowntimerSec < 0) {
                // Create a form that take users initials 
                // and hide the current questions 
                endQuiz();

            } else {
                currentIndex++;
                presentQuiz(currentIndex);
                //userFeedback(currentIndex);
            }
        }, 1000);
    }
});

// This ist he main fuction which gets the questions and creates DOM elements
function presentQuiz(currIndex) {

    var questionsPlaceHolder = doc.querySelector("#questions");
    var startScrean = doc.querySelector("#start-screen");
    var questionTile = doc.querySelector("#question-title");

    // move the empty out the choices div here

    for (var i = 0; i < questions[currIndex].choices.length; i++) {
        var title = questions[currIndex].title;
        questionTile.innerText = title;

        // Set if statement, which stops the timer if the question i the last item in the array

        // Keeping track of score question is the last question in the array;

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

    // check first if there is a next question before show the next question
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
    // && questions.length(questions.lastIndexOf())
    // var lastWord = questions[questions.length - 1];
    // var lastIndex = questions.lastIndexOf(lastWord);

    if (currentIndex == (questions.length - 1)) {
        console.log('this is true');
        // var countclear = countDown();
        // console.log('this is true', countclear);
        clearInterval(interVal);
    }
    setTimeout(() => {
        // check if the choices exist from previouse quesiton if it does then set the choices to empty
        if (choices.hasChildNodes() && currentIndex !== lastIndex) {
            choices.innerHTML = " ";
        }
        // the feedback message before loading the next question
        userAlert.classList.add('hide');
    }, 400);
}

// The function bellow is bit uneccessary, but don't wanna mess around the code just
function startQuiz() {
    presentQuiz(currentIndex);
    countDown();
    //console.log(userSelection());
}
// This function gets called in the start button below 
function callBackFunc() {
    startQuiz();
}
// When start button is click countDown function gets regards and the function is passed by reference
btnStart.addEventListener('click', callBackFunc);





