function checkAnswer(){
    const encodedData = encodeURIComponent(JSON.stringify(userQuizData));
    const analysisURL = `analysis.html?data=${encodedData}`;
    window.location.href = analysisURL;
}
let userQuizData = null;

function getDataFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const parameterValue = urlParams.get('data');
  userQuizData = JSON.parse(decodeURIComponent(parameterValue));
  updateElements();
}

function updateElements() {
  if (userQuizData) {
    const duration = document.getElementById("time");
    const currentScore = document.getElementById("current-score");
    const maxScore = document.getElementById("max-score");
    const difficulty = document.getElementById("difficulty");
    const type = document.getElementById("type");

    duration.textContent = "00:00";
    currentScore.textContent = userQuizData.userScore;
    maxScore.textContent = userQuizData.questions.length;
    difficulty.textContent = "Medium";
    type.textContent = "Easy";
  }
}

addEventListener('DOMContentLoaded', getDataFromURL);
