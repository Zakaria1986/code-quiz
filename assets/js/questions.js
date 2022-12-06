
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


var quizTerms = `
Try to answer the following code-related questions within the time
limit. Keep in mind that incorrect answers will penalize your
score/time by ten seconds!`



var questions = [
    {
        title: "This is your first question: 1? ",
        choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
        answer: "Choice 1"
    },
    {
        title: "This is your first question: 2? ",
        choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
        answer: "Choice 3"
    }, {
        title: "This is your first question: 3? ",
        choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
        answer: "Choice 4"
    },
    {
        title: "This is your first question: 4? ",
        choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
        answer: "Choice 3"
    },
    {
        title: "This is your first question: 5? ",
        choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
        answer: "Choice 2"
    },
    {
        title: "This is your first question: 6? ",
        choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
        answer: "Choice 1"
    },
]

var quizAnswers = ['Choice 4', 'Choice 3', 'Choice 2', 'Choice 1']



// push ansers to the browser

// loop over the object, then use click eventlistener to control the flow of the loop using either break/continue statemnes. 



// for (var i = 0; i < questions.length; i++) {
    
// }











