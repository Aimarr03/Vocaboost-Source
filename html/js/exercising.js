const quizData = [
    {
      question: "Neither her brothers nor Jane ____ a consent form for tomorrow's field trip.",
      options: ["need", "needs", "to need", "to be needed", "in need"],
      correctAnswer: 1,
      explanation: "= jawaban yang benar adalah B “needs” . Dalam kalimat tersebut, terdapat subjek \"her brothers\" dan \"Jane\" yang dihubungkan oleh kata penghubung \"nor\" (atau \"or\" dalam beberapa versi soal). Ketika kita menggunakan kata penghubung seperti itu, kita perlu memperhatikan subjek terdekat yang mempengaruhi bentuk kata kerja. \n\nDalam hal ini, subjek terdekat adalah \"Jane\". Kita tahu bahwa \"Jane\" adalah subjek tunggal, jadi kita harus menggunakan bentuk kata kerja tunggal yang sesuai dengannya. Kata kerja yang tepat untuk subjek tunggal \"Jane\" adalah \"needs\". Itulah sebabnya jawaban yang benar adalah B, \"needs\"."
    },
    {
      question: "Your chance of being admitted to PTN is determined by___ ",
      options: ["you are seriously studying", "how serious are you in studying", "how serious you are in studying", "are you seriously studying", "what are you studying"],
      correctAnswer: 2,
      explanation: "jawaban yang tepat adalah c “how serious you are in studying”, karena ini adalah struktur tata bahasa yang benar untuk mengungkapkan pertanyaan tentang faktor yang menentukan peluang diterima di PTN. Dalam kalimat soal, kita diminta untuk menjelaskan faktor yang mempengaruhi peluang diterima di PTN. Ungkapan yang tepat untuk mengungkapkan pertanyaan tentang faktor ini adalah menggunakan kata tanya \"how\" diikuti oleh kata sifat \"serious\" dan subjek \"you\" dalam bentuk pertanyaan.\n\nKalimat \"how serious you are in studying\" secara langsung mengajukan pertanyaan tentang tingkat ke-serius-an seseorang dalam belajar. Ini menyiratkan bahwa tingkat ke-serius-an dalam belajar adalah faktor yang penting untuk menentukan peluang diterima di PTN.\n\nOleh karena itu, jawaban yang tepat adalah C, \"how serious you are in studying\", karena itu mengungkapkan pertanyaan yang relevan dengan konteks kalimat soal, yaitu faktor yang menentukan peluang diterima di PTN"
    },
    {
      question: "Of the two new employees, one is experienced and _____",
      options: ["the others are not", "another is to experience", "the other is not", "other lack experience", "other experience is not"],
      correctAnswer: 2,
      explanation: "jawaban yang tepat adalah c. “the other is not”. Dalam kalimat tersebut, dikatakan bahwa dari dua karyawan baru, salah satunya memiliki pengalaman dan yang lainnya tidak. Jawaban C, \"the other is not\", dengan jelas menyampaikan bahwa satu orang (yaitu yang lainnya) tidak memiliki pengalaman."
    },
    {
      question: "What is the best title for the passage?",
      options: ["The story of personality", "the definition of personality", "The history of personality", "the steps of personality", "the momentum of personality"],
      correctAnswer: 1,
      explanation: "Jawaban yang tepat adalah B, \"The definition of personality\"\n\n.Dalam teks tersebut, terdapat penjelasan mengenai konsep dan definisi kepribadian (personality). Teks tersebut membahas bahwa kepribadian merupakan organisasi dasar yang menentukan keunikan interaksi seseorang dengan dirinya sendiri, dengan orang lain, dan dengan lingkungan non-manusia. Teks juga menjelaskan bahwa kepribadian terdiri dari struktur dasar yang mempengaruhi cara individu berinteraksi dan bahwa setiap individu memiliki cara unik dalam berinteraksi dengan diri sendiri dan orang lain.Dengan demikian, jawaban yang paling tepat adalah B, \"The definition of personality\", karena teks memberikan penjelasan tentang apa itu kepribadian dan bagaimana kepribadian diorganisir."
    },
    {
      question: "According to the passage, the personality changehappening in the individual as affected by human interactions ____ from day to day.",
      options: ["can be observed", "cannot be seen", "can be noticed", "cannot be expected", "can be watched"],
      correctAnswer: 1,
      explanation: "Jawaban yang tepat adalah B, \"cannot be seen\".\n\nMenurut teks, perubahan kepribadian yang terjadi pada individu akibat interaksi manusia tidak dapat terlihat dari hari ke hari. Ini berarti bahwa perubahan kepribadian tidak dapat diamati secara langsung dalam jangka waktu yang singkat.\n\nJawaban B, \"cannot be seen\", sesuai dengan konsep bahwa perubahan kepribadian tidak dapat terlihat atau diamati secara visual dari hari ke hari.\n\nDengan demikian, jawaban yang benar untuk pertanyaan ini \"cannot be seen\"."
    },
    {
      question: "Every personality changes ...",
      options: ["drastically", "swiftly", "dramatically", "gradually", "erratically"],
      correctAnswer: 3,
      explanation: "jawaban yang tepat adalah D, \"gradually\".\n\nDalam konteks kalimat tersebut, ungkapan \"Every personality changes\" mengindikasikan bahwa perubahan kepribadian terjadi pada setiap individu. Kata yang tepat untuk menggambarkan perubahan tersebut adalah \"gradually\", yang berarti secara bertahap atau perlahan.\n\nOleh karena itu, jawaban yang paling sesuai adalah D, \"gradually\", karena kata ini mencerminkan sifat perubahan kepribadian yang terjadi secara perlahan dan berkelanjutan."
    },
  ];
const text = "\tOften people use the term personality as an easy way of explaining a person’s behavior. Someone says that “she is a good saleswoman because she is an extrovert” or “her uncle is hard to get along with because he has an authoritarian personality”. Actually, the concept of personality is a descriptive one. It relates to specific behavioral traits of an individual. It describes the individual’s specific adoption to his or her cultural surroundings.\n\n\tWe might define personality as the basic organization of people that determines the uniqueness of their interactions with themselves, with others, and with nonhuman aspects of their environment. The basic organization refers to the structure of the personality of how it is put together, and the relationships among the various parts. It concerns the total physical, intellectual, and emotional structure of the individual.\n\n\tThe personality structure determines the uniqueness of the individual’s interactions. No two personalities are alike. All persons have their own way of interacting with themselves and with others.\n\n\tHuman interaction always brings about some change in the individual. These changes take place very slowly. It is generally not noticeable from day to day. Nevertheless, the personality is changing constantly. Personalities don’t all change at the same rate. For example, the child changes very rapidly in both physical and intellectual aspects of personality. The adult may change very slowly. However, every personality undergoes constant, gradual change asindividual interacts with others. \n\n\tThe personality of individual with their basic organization is blending of all factors present in their particular social situation with whatever traits they inherit biologically. This brings us to of the age-old questions: which is moreimportant: hereditary or environmental?";
  // Quiz variables
  let currentQuestion = 0;
  let score = 0;
  let timeLimit = 300;
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
    if(document.body.scrollHeight<=740){
      confirmationPanel.style.bottom = "-1%";
    }
    if(document.body.scrollHeight<=1180){
      confirmationPanel.style.bottom = "-2%";
    }
    else{
      confirmationPanel.style.bottom = "-3%";
    }
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
        userScore: score,
        _text: text,
        explanations: quizData.map((item)=> item.explanation)
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