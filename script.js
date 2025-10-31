// ===== Simple Cyber Awareness Quiz =====

const quizData = [
  {
    question: "1. What should you do if you get a suspicious email link?",
    options: [
      "Click it to check what it is",
      "Ignore or report it as phishing",
      "Forward it to friends",
      "Reply asking for details"
    ],
    answer: "Ignore or report it as phishing"
  },
  {
    question: "2. What makes a strong password?",
    options: [
      "Your name and birthdate",
      "Only numbers",
      "A mix of letters, numbers & symbols",
      "Same password everywhere"
    ],
    answer: "A mix of letters, numbers & symbols"
  },
  {
    question: "3. What is social engineering?",
    options: [
      "Software bug",
      "Tricking people to share information",
      "Network setup method",
      "Encrypting files"
    ],
    answer: "Tricking people to share information"
  },
  {
    question: "4. Why are software updates important?",
    options: [
      "They change colors",
      "They fix security issues",
      "They slow down your PC",
      "They remove files"
    ],
    answer: "They fix security issues"
  },
  {
    question: "5. What should you do if you find a USB drive?",
    options: [
      "Plug it in to check contents",
      "Throw it away immediately",
      "Give it to IT/security team",
      "Keep it for later use"
    ],
    answer: "Give it to IT/security team"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "#2e7d32"; // green for correct
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "#c62828"; // red for wrong
    }
  });

  if (selected === correct) {
    score++;
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "🎉 Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}

// Start quiz on page load
showQuestion();
