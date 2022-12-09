
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
        title: "What is JavaScript? ",
        choices: ['Its a scripting languages', 'Object oriented Language', 'Its a front end Language', 'None of the above'],
        answer: "Its a scripting languages"
    },
    {
        title: "What are JavaScript Data Types? ",
        choices: ['Number', 'String', 'Boolean', 'Object', "All of the above"],
        answer: "All of the above"
    }, {
        title: "What is the use of isNaN function? ",
        choices: ['Returns true if its a string', 'Returns false if its a number', 'Returns true if its a number', 'Returns true if its a Boolean type'],
        answer: 'Returns true if its a number'
    },
    {
        title: "What are undeclared and undefined variables? ",
        choices: ['Undeclared variables are those that do not exist in a program and are not declared', 'Variables do not exist && !declared. And Undefined is not undeclared variable', 'Undefined variables are those that are declared in the program but have not been given any value', 'I dont Know'],
        answer: "Variables do not exist && !declared. And Undefined is not undeclared variable"
    },
    {
        title: "What are global variables? How are these variable declared?",
        choices: ['Var key must used for it to be Global variables', 'Global variables decleared in the functions', 'Global variables has scope', 'Global variables has no scope'],
        answer: "Global variables has no scope"
    },
    {
        title: "What is `this` keyword in JavaScript? ",
        choices: ['`This` keyword refers to the object from where it was called.', 'We Need to paint this house.', 'Notice that she is referring to the house with a this keyword.'],
        answer: "`This` keyword refers to the object from where it was called."
    },
    {
        title: "What is the working of timers in JavaScript?",
        choices: ['Timers are used to execute a piece of code at a set time.', 'Timers are used to repeat a piece of code in a given interval.', 'Timers are used to execute a piece of code at a set time or repeat the code in a given interval.'],
        answer: "Timers are used to execute a piece of code at a set time or repeat the code in a given interval."
    },
    {
        title: "Which two symbol is used for comments in Javascript?",
        choices: ['// for Single line comments and /* */ for Multi Line Comment', '// for Single line comments', '/* */ for Multi Line Comment', 'I dont Know'],
        answer: "// for Single line comments and /* */ for Multi Line Comment"
    },
]

// var quizAnswers = ['Choice 4', 'Choice 3', 'Choice 2', 'Choice 1']

// push ansers to the browser

// loop over the object, then use click eventlistener to control the flow of the loop using either break/continue statemnes. 

// for (var i = 0; i < questions.length; i++) {
    
// }











