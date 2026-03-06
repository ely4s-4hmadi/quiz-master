// Quiz Data Structure - You'll replace this with your questions
let quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answers = [];
let answered = false;

// Initialize the quiz
function initQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = new Array(quizData.length).fill(null);
    answered = false;
    document.getElementById('totalQuestions').textContent = quizData.length;
    document.getElementById('quizContent').classList.remove('hidden');
    document.getElementById('resultsScreen').classList.add('hidden');
    loadQuestion();
}

// Load and display current question
function loadQuestion() {
    const question = quizData[currentQuestion];
    answered = answers[currentQuestion] !== null;

    // Update question text
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionNumber').textContent = currentQuestion + 1;

    // Update progress bar
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Load options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option';
        optionBtn.textContent = option;

        // Apply styling based on answer state
        if (answered) {
            if (index === question.correct) {
                optionBtn.classList.add('correct');
            } else if (index === answers[currentQuestion] && answers[currentQuestion] !== question.correct) {
                optionBtn.classList.add('incorrect');
            }
            if (index === answers[currentQuestion]) {
                optionBtn.classList.add('selected');
            }
        } else if (index === answers[currentQuestion]) {
            optionBtn.classList.add('selected');
        }

        optionBtn.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionBtn);
    });

    // Show feedback if answered
    showFeedback();

    // Update button states
    updateButtonStates();
}

// Handle option selection
function selectOption(index) {
    if (answered) return; // Don't allow changing answer

    const question = quizData[currentQuestion];
    answers[currentQuestion] = index;

    // Update the selected option styling
    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.classList.remove('selected');
        if (i === index) {
            option.classList.add('selected');
        }
    });

    answered = true;

    // Check if correct and update score
    if (index === question.correct) {
        score++;
    }

    showFeedback();
    updateButtonStates();
}

// Show feedback for the answer
function showFeedback() {
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackText = document.getElementById('feedbackText');

    if (!answered) {
        feedbackBox.classList.add('hidden');
        return;
    }

    const question = quizData[currentQuestion];
    const selectedAnswer = answers[currentQuestion];
    const isCorrect = selectedAnswer === question.correct;

    feedbackBox.classList.remove('hidden');
    feedbackBox.classList.remove('correct', 'incorrect');

    if (isCorrect) {
        feedbackBox.classList.add('correct');
        feedbackText.textContent = '✓ Correct! Well done!';
    } else {
        feedbackBox.classList.add('incorrect');
        feedbackText.textContent = `✗ Incorrect. The correct answer is: ${question.options[question.correct]}`;
    }
}

// Update button states
function updateButtonStates() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = !answered;

    if (currentQuestion === quizData.length - 1 && answered) {
        document.getElementById('nextBtn').textContent = 'See Results →';
    } else {
        document.getElementById('nextBtn').textContent = 'Next →';
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Navigate to next question or show results
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results screen
function showResults() {
    document.getElementById('quizContent').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');

    const percentage = Math.round((score / quizData.length) * 100);
    document.getElementById('scoreText').textContent = `${score}/${quizData.length}`;
    document.getElementById('scorePercentage').textContent = `${percentage}% - ${getResultMessage(percentage)}`;
}

// Get result message based on score
function getResultMessage(percentage) {
    if (percentage === 100) return '🌟 Perfect! Outstanding performance!';
    if (percentage >= 80) return '🎉 Excellent work!';
    if (percentage >= 60) return '👍 Good job!';
    if (percentage >= 40) return '📚 Not bad, keep practicing!';
    return '💪 Keep learning!';
}

// Restart quiz
function restartQuiz() {
    initQuiz();
}

// Event listeners
document.getElementById('prevBtn').addEventListener('click', previousQuestion);
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);

// Start the quiz
initQuiz();