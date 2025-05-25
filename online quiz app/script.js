const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 2
  },
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "22", "5"],
    correct: 1
  },
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next");

function showQuestion(index) {
  const q = questions[index];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.classList.add("answer");
    btn.onclick = () => checkAnswer(i);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].correct;
  if (selected === correct) {
    score++;
  }
  Array.from(answersEl.children).forEach((btn, idx) => {
    btn.disabled = true;
    btn.style.backgroundColor = idx === correct ? "#28a745" : "#dc3545";
  });
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").style.display = "none";
  resultEl.classList.remove("hide");
  resultEl.textContent = `You scored ${score} out of ${questions.length}`;
  nextBtn.style.display = "none";
}

showQuestion(currentQuestion);
