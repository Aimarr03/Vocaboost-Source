const storedResult = localStorage.getItem("quizResult");
const userQuizResult = JSON.parse(storedResult);

//getTheElement
const duration = document.getElementById("time");
const currentScore = document.getElementById("current-score");
const maxScore = document.getElementById("max-score");
const difficulty = document.getElementById("difficulty");
const type = document.getElementById("type");

//change the Element
currentScore.textContent = userQuizResult.userScore;
maxScore.textContent = userQuizResult.questions.Length;
console.log("userQuizResult");