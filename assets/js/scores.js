// Global veriable and elemets storage
var doc = document;
var scoreElement = doc.querySelector("#highscores");
var goBackToStartScreen = doc.querySelector("Button");
var scoreClear = doc.querySelector("#clear");
var UserOutPutString = ` `;

// functions run when the window loads and gets output information
// then set it into li string before its pushed to element
window.addEventListener('load', function () {
    var getUserResult = JSON.parse(localStorage.getItem("quizResult"));

    UserOutPutString += `<li>Your highscore: ${getUserResult[0].UserScore}</li>`;
    UserOutPutString += `<li>Your initial is: ${getUserResult[0].userInitial}</li>`;

    scoreElement.innerHTML = UserOutPutString;
});

// when the clear button is clicked this event clears the local storage and sets the li element to nothing
scoreClear.addEventListener('click', function (e) {
    e.preventDefault;
    localStorage.removeItem("quizResult");
    scoreElement.innerHTML = " ";
});

// when user clicks this button removes stored value and should allow the users start again
goBackToStartScreen.addEventListener('click', function (e) {
    e.preventDefault;
    localStorage.removeItem("quizResult");
});