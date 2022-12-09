# code-quiz

Code quiz present series of multiple choice question to its visitors and depending on the answer, if the user selects the wrong answers the time will deduct 10 sec for each wrong answers and if the quiz taker answers all the questions if not some right answers before the timer ends i.e. reaches 0, the remaining time will be the participants final score. 

You can take the quiz Here:  https://zakaria1986.github.io/code-quiz/

Requirement for this application as follows: 

## User Story

```
AS A student at coding bootcamp
I WANT to take a timed quiz on JavaScript fundamentals coded purely in Javascript that stores high scores, and user initial by end of the quiz SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

Create a code quiz that contains the following requirements:

* When start button is clicked a timer starts and the first question appears.
 
  + Questions contain clickable buttons for each answer.
  * 
  + When answer is clicked, the next question appears and before that user gets an alert whether the question is correct or wrong
  * 
  + If the answer clicked is incorrect then subtract 10 sec from the clock

* The quiz should end when all questions are answered or the timer reaches 0.

  + When the game ends, it should display their score and give the user the ability to save their initials and their score in the localstoreage

Here is an example what the app does and how to use it: 



![alt text](/assets/img/code_quiz.gif)



Number of pages the app contains: 2

*  index page for starter and quiz screen and highscore page where broswer get the score and user initials from localstorage. 

To get the client presentation logically presented. As the creator of the app. I have implemented the following logics; 

    - Used one js file to store the questions in object array which was looped and accessed in the logic script
    

   Please:  https://github.com/Zakaria1986/code-quiz/blob/main/assets/js/questions.js

    -  Next is the logic of the app written in logic.js. I have extensively commented each section of the code in logic.js code file, is you are interested please see: https://github.com/Zakaria1986/code-quiz/blob/main/assets/js/logic.js

    - To retriving data from browser localstorage is written in https://github.com/Zakaria1986/code-quiz/blob/main/assets/js/scores.js

Thank you for reading and I hope you have enjoyed the browsing!

No copyright issues here, take the code or whatever you desire so and do whatever you like with it. I have gained and learnt what I needed to : P
