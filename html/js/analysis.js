function done() {
    window.location.href = "main_menu.html";
  }
  
  let userQuizData = null;
  
  let currentNumber = 0;
  
  function showAnalysis() {
    let currentQuestion = document.getElementById("current-number");
    let question = document.getElementById("question");
    let answer = document.getElementById("answer");
    let currentQ = document.getElementById("current-question");
    let maxQ = document.getElementById("max-question");

    const currentQuestionData = userQuizData.questions[currentNumber];
    const currentChoiceData = userQuizData.choices[currentNumber];
    
    question.innerHTML = "";
    currentQuestion.textContent = currentNumber + 1;
    currentQ.textContent = currentQuestion.textContent;
    maxQ.textContent = userQuizData.questions.length;
    question.textContent = currentQuestionData;
  
    const ul = document.createElement('ul');
    currentChoiceData.options.forEach((element, index) => {
      const li = document.createElement('li');
      li.textContent = element;
      if (index === currentChoiceData.choice) {
        li.style.color = "red";
      }
      if (index === currentChoiceData.correctAnswer) {
        li.style.color = "green";
      }
      ul.appendChild(li);
    });
    answer.innerHTML = '';
    answer.appendChild(ul);
  }
  
  function prev() {
    if (currentNumber > 0) {
      currentNumber--;
      showAnalysis();
    }
  }
  
  function next() {
    if (currentNumber < userQuizData.questions.length - 1) {
      currentNumber++;
      showAnalysis();
    }
  }
  
  function getDataFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const parameterValue = urlParams.get('data');
    userQuizData = JSON.parse(decodeURIComponent(parameterValue));
    showAnalysis();
  }
  
  addEventListener('DOMContentLoaded', getDataFromURL);