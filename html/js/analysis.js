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
    let explanation_content = document.getElementById("explanation-content");
    let text = document.getElementById("text-container");

    const currentQuestionData = userQuizData.questions[currentNumber];
    const currentChoiceData = userQuizData.choices[currentNumber];
    const currentExplanationData = userQuizData.explanations[currentNumber];
    
    question.innerHTML = "";
    text.innerHTML = "";
    explanation_content.innerHTML ="";

    currentQuestion.textContent = currentNumber + 1;
    
    currentQ.textContent = currentQuestion.textContent;
    maxQ.textContent = userQuizData.questions.length;
    
    question.textContent = currentQuestionData;
    text.textContent = userQuizData._text;
    explanation_content.textContent = currentExplanationData;

    question.style.marginBottom = "5px";
    explanation_content.style.fontWeight ="400";
    explanation_content.style.textAlign = "justify";
    if(document.body.scrollHeight<=1180){
      explanation_content.style.fontSize = "16px";
    
    }else{
      explanation_content.style.fontSize = "20px"; 
    }
    text.style.textAlign = "justify";
    const ul = document.createElement('ul');
    ul.style.listStyle = "circle";
    currentChoiceData.options.forEach((element, index) => {
      const li = document.createElement('li');
      li.textContent = element;
      li.style.paddingLeft = "20px";
      li.style.marginBottom = "10px";
      if (index === currentChoiceData.choice) {
        li.style.color = "red";
        li.style.fontWeight = "600";
      }
      if (index === currentChoiceData.correctAnswer) {
        li.style.color = "green";
        li.style.fontWeight = "600";
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