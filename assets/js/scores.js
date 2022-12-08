// Global veriable

var doc = document;
var scoreElement = doc.querySelector("#highscores");
var goBackToStartScreen = doc.querySelector("Button");
var scoreClear = doc.querySelector("#clear");
var UserOutPutString = ` `;


window.addEventListener('load', function () {
    var getUserResult = JSON.parse(localStorage.getItem("quizResult"));

    UserOutPutString += `<li>Your highscore: ${getUserResult[0].UserScore}</li>`;
    UserOutPutString += `<li>Your initial is: ${getUserResult[0].userInitial}</li>`;

    scoreElement.innerHTML = UserOutPutString;
});

scoreClear.addEventListener('click', function (e) {
    e.preventDefault;
    localStorage.removeItem("quizResult");
    scoreElement.innerHTML = " ";
});

goBackToStartScreen.addEventListener('click', function (e) {
    e.preventDefault;
    localStorage.removeItem("quizResult");
});