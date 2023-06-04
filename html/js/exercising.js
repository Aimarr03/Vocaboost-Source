const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Berlin", "Madrid"],
      correctAnswer: 0
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "Thailand", "India"],
      correctAnswer: 1
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Saturn", "Jupiter", "Neptune"],
      correctAnswer: 2
    }
    // Add more questions here
  ];

  // Quiz variables
  let currentQuestion = 0;
  let score = 0;
  let timeLimit = 60;
  let timerInterval;
  let answers = []; // Array to store the user's answers
  // Function to start the quiz
  function startQuiz() {
    showQuestion();
    startTimer();
  }

  // Function to display the current question
  function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const prevButton = document.getElementById("left-arrow");
    const nextButton = document.getElementById("right-arrow");
    const submitButton = document.getElementById("done-button");
    const currentNumber = currentQuestion+1;

    let maxQuestion = document.getElementById("max-q");
    const currently = document.getElementById("current-q");
    // Clear previous question and options
    questionElement.textContent = "";
    optionsElement.innerHTML = "";

    // Display current question
    questionElement.textContent = quizData[currentQuestion].question;
    currently.textContent = currentNumber;
    maxQuestion.textContent = quizData.length;

    // Display options
    quizData[currentQuestion].options.forEach((option, index) => {
        const optionWrapper = document.createElement("div");
        optionWrapper.classList.add("option-button");
      
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = "option";
        radioButton.value = index;
        radioButton.onclick = () => selectAnswer(index);

        optionWrapper.appendChild(radioButton);

        const customRadioButton = document.createElement("span");
        customRadioButton.classList.add("custom-radio");

        optionWrapper.appendChild(customRadioButton);

        const optionLabel = document.createElement("label");
        optionLabel.textContent = option;

        optionWrapper.appendChild(optionLabel);
        optionsElement.appendChild(optionWrapper);
    });

    // Show/hide previous/next buttons
    prevButton.style.display = currentQuestion === 0 ? "none" : "inline-block";
    nextButton.style.display =
      currentQuestion === quizData.length - 1 ? "none" : "inline-block";
    submitButton.style.display =
      currentQuestion === quizData.length - 1 ? "inline-block" : "none";
  }

  // Function to select an answer
  function selectAnswer(selectedOption) {
    answers[currentQuestion] = selectedOption;
    
  }

  // Function to move to the next question
  function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      showQuestion();
    }
  }

  // Function to move to the previous question
  function prevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion();
    }
  }
  function submission(){
    const confirmationPanel = document.getElementById("submit-button");
    const backgroundEffect = document.getElementById("darker-background");
    confirmationPanel.style.bottom = "-7%";
    backgroundEffect.style.display = "block";
  }
  function returnQuiz(){
    const confirmationPanel = document.getElementById("submit-button");
    const backgroundEffect = document.getElementById("darker-background");
    confirmationPanel.style.bottom = "-100%";
    backgroundEffect.style.display = "none";
  }

  // Function to start the timer
  function startTimer() {
    const timerElement = document.getElementById("time");
    timerElement.textContent = timeLimit;

    timerInterval = setInterval(() => {
      timeLimit--;

      if (timeLimit < 0) {
        clearInterval(timerInterval);
        clearInterval(timerInterval);
          finishQuiz();
        } else {
          timerElement.textContent = timeLimit;
        }
      }, 1000);
    }

    // Function to submit the quiz
    function submitQuiz(){
      clearInterval(timerInterval);
      checkAnswers();
      saveDataAndRedirect();
    }
    function saveDataAndRedirect(){
      const userQuizData = {
        questions: quizData.map((item) => item.question),
        choices: quizData.map((item,index) => {
          return{
            options:item.options,
            choice: answers[index],
            correctAnswer: item.correctAnswer
          };
        }),
        userScore: score
      };

      const parameterValue = encodeURIComponent(JSON.stringify(userQuizData));
      const url = `result.html?data=${parameterValue}`;
      window.location.href = url;
    }

    // Function to check the answers
    function checkAnswers() {
      for (let i = 0; i < quizData.length; i++) {
        if (answers[i] === quizData[i].correctAnswer) {
          score++;
        }
      }
    }
    // Start the quiz
    startQuiz();