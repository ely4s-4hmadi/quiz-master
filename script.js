// Quiz Data Structure - You'll replace this with your questions
let quizData = [
    {
    "question": "Which of the following is a characteristic of an algorithm compared to a program?",
    "options": ["Must follow strict syntax rules", "Free from grammatical rules as long as it is performable", "Form is more important than content", "Requires a compiler to be understood"],
    "correct": 1
    },
    {
    "question": "What does the pseudo code 'p ← p * x' for n times (with p starting at 1) compute?",
    "options": ["The sum of x and n", "The n-th power of x", "The product of first n integers", "The remainder of x divided by n"],
    "correct": 1
    },
    {
    "question": "What is the output of the following: sum ← 0; i ← 1; while i < 4 do begin sum ← sum + i; i ← i + 1; end; output sum;",
    "options": ["3", "6", "10", "4"],
    "correct": 1
    },
    {
    "question": "In pseudo code, what operator is used to find the remainder of a divided by b?",
    "options": ["/", "*", "%", "&"],
    "correct": 2
    },
    {
    "question": "Consider: x=4, y=12. An algorithm outputs 'i' if (x%i==0 AND y%i==0). If i loops from 1 to x, what is the final 'i' output if we only output the LARGEST common factor?",
    "options": ["1", "2", "4", "12"],
    "correct": 2
    },
    {
    "question": "What is being computed by an algorithm that subtracts x from r (where r starts at y) repeatedly until r < x, and counts the subtractions in q?",
    "options": ["Product of x and y", "Sum of x and y", "Remainder (r) and Quotient (q)", "HCF of x and y"],
    "correct": 2
    },
    {
    "question": "If n=6, how many iterations does 'while i < n' perform if i starts at 1 and increases by 2 each time?",
    "options": ["3", "6", "2", "Infinite"],
    "correct": 0
    },
    {
    "question": "What value of a 'flag' variable like 'found' usually makes a loop 'while (condition AND found ≠ true)' stop?",
    "options": ["false", "NIL", "true", "0"],
    "correct": 2
    },
    {
    "question": "What is the result of the logical operation 'T XOR T'?",
    "options": ["T", "F", "NIL", "Error"],
    "correct": 1
    },
    {
    "question": "In a multiplication table nested loop (for i=1 to x, for j=1 to x), what is the total number of 'output' executions?",
    "options": ["x", "2x", "x^2", "x^3"],
    "correct": 2
    },
    {
    "question": "What is the Big-O notation for 10 + 3n + 2n^2 + n^4 + 5n^3?",
    "options": ["O(n^3)", "O(n^2)", "O(n^4)", "O(10)"],
    "correct": 2
    },
    {
    "question": "What is the order of growth for f(n) = n * n log n + n^2?",
    "options": ["O(n^2)", "O(n^2 log n)", "O(n log n)", "O(n^3)"],
    "correct": 1
    },
    {
    "question": "Which of these functions grows the fastest?",
    "options": ["n^20", "1000n^2", "2^n", "log n"],
    "correct": 2
    },
    {
    "question": "A loop 'while x > 1' where 'x = x - 2' in each step has a time complexity of:",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correct": 2
    },
    {
    "question": "A loop 'while x > 1' where 'x = x / 2' in each step has a time complexity of:",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correct": 1
    },
    {
    "question": "What is the complexity of accessing the i-th entry in an array of size n?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(i)"],
    "correct": 0
    },
    {
    "question": "Searching over an unsorted array of n elements takes how much time in the worst case?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correct": 2
    },
    {
    "question": "Binary search over a sorted array takes how much time in the worst case?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correct": 1
    },
    {
    "question": "What is the complexity of a triple nested loop: for x=1 to n, for y=1 to m, for z=1 to n?",
    "options": ["O(n^3)", "O(n^2 m)", "O(nm)", "O(n+m)"],
    "correct": 1
    },
    {
    "question": "Inserting an element into the first position of an array (A[1]) requires shifting n elements. What is the complexity?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correct": 2
    },
    {
    "question": "In a queue implemented by an array, which variable marks the position where the next element will be added (Enqueue)?",
    "options": ["head", "top", "tail", "next"],
    "correct": 2
    },
    {
    "question": "In a stack, which variable marks the current top element?",
    "options": ["head", "top", "tail", "bottom"],
    "correct": 1
    },
    {
    "question": "If a stack has S[1]=20, S[2]=10, S[3]=15 and top=3, what is returned by Pop(S)?",
    "options": ["20", "10", "15", "3"],
    "correct": 2
    },
    {
    "question": "After Enqueue(Q, 15) and Enqueue(Q, 25) on a queue with tail=4, what does 'tail' become?",
    "options": ["4", "5", "6", "2"],
    "correct": 2
    },
    {
    "question": "Which data structure follows the Last-In-First-Out (LIFO) principle?",
    "options": ["Queue", "Stack", "Linked List", "Array"],
    "correct": 1
    },
    {
    "question": "Which data structure follows the First-In-First-Out (FIFO) principle?",
    "options": ["Queue", "Stack", "Linked List", "Binary Tree"],
    "correct": 0
    },
    {
    "question": "If Dequeue(Q) is called, which pointer is typically incremented?",
    "options": ["tail", "top", "head", "prev"],
    "correct": 2
    },
    {
    "question": "A stack has S[1]=20, S[2]=10. After Push(S, 25), what is S[3]?",
    "options": ["20", "10", "25", "NIL"],
    "correct": 2
    },
    {
    "question": "What happens if you try to Pop from an empty stack?",
    "options": ["Overflow", "Underflow", "Head increment", "Tail decrement"],
    "correct": 1
    },
    {
    "question": "What happens if you try to Push to a stack that has reached its array capacity?",
    "options": ["Overflow", "Underflow", "Dequeue", "Re-index"],
    "correct": 0
    },
    {
    "question": "A node in a doubly linked list contains which three fields?",
    "options": ["data, next, head", "data, next, prev", "head, tail, data", "prev, next, tail"],
    "correct": 1
    },
    {
    "question": "In a doubly linked list, what is 'head.prev' usually set to?",
    "options": ["tail", "NIL", "0", "head.next"],
    "correct": 1
    },
    {
    "question": "To traverse a list from tail to head, the pointer update should be:",
    "options": ["node ← node.next", "node ← node.prev", "node ← head", "node ← tail"],
    "correct": 1
    },
    {
    "question": "What is the time complexity of inserting a node at the head of a doubly linked list?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correct": 0
    },
    {
    "question": "In a doubly linked list with 4 nodes (40, 20, 50, 10), what is 'head.next.next.data'?",
    "options": ["40", "20", "50", "10"],
    "correct": 2
    },
    {
    "question": "What is the time complexity to delete the last node (tail) in a doubly linked list if we have a tail pointer?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correct": 0
    },
    {
    "question": "If 'curr' points to node 10 and we want to delete it, which statement correctly links the previous node to the next one?",
    "options": ["curr.prev.next ← curr.next", "curr.next.prev ← curr.prev", "Both A and B", "None of the above"],
    "correct": 2
    },
    {
    "question": "When inserting a new 'node' after 'curr', which of these MUST happen before we lose the link to the rest of the list?",
    "options": ["curr.next ← node", "node.next ← curr.next", "node.prev ← NIL", "curr.prev ← node"],
    "correct": 1
    },
    {
    "question": "How long does it take to traverse and output all n elements in a linked list?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correct": 2
    },
    {
    "question": "Can you perform a Binary Search efficiently on a standard Linked List?",
    "options": ["Yes, it takes O(log n)", "No, it still takes O(n) because of sequential access", "Yes, but only if it is sorted", "No, linked lists cannot be sorted"],
    "correct": 1
    },
    {
    "question": "Which sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order?",
    "options": ["Selection Sort", "Bubble Sort", "Insertion Sort", "Merge Sort"],
    "correct": 1
    },
    {
    "question": "What is the worst-case time complexity of Bubble Sort?",
    "options": ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
    "correct": 2
    },
    {
    "question": "In the best case (already sorted array), what is the time complexity of Bubble Sort if optimized with a flag?",
    "options": ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
    "correct": 1
    },
    {
    "question": "Which algorithm finds the minimum/maximum element and places it at the beginning of the unsorted part?",
    "options": ["Bubble Sort", "Selection Sort", "Insertion Sort", "Quick Sort"],
    "correct": 1
    },
    {
    "question": "What is the time complexity of Selection Sort in the best case?",
    "options": ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
    "correct": 2
    },
    {
    "question": "How many swap operations does Selection Sort perform in the worst case?",
    "options": ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
    "correct": 1
    },
    {
    "question": "Which sorting algorithm is often compared to sorting a hand of playing cards?",
    "options": ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort"],
    "correct": 2
    },
    {
    "question": "Suppose an array is [10, 30, 20, 50, 40, 60]. After two swaps in a Selection Sort (finding the maximum), what is the first element?",
    "options": ["10", "60", "30", "50"],
    "correct": 1
    },
    {
    "question": "Is the statement 'Binary search can make Insertion Sort O(n log n)' true or false?",
    "options": ["True", "False"],
    "correct": 1
    },
    {
    "question": "For n=6 and array [10, 30, 20, 50, 40, 60], how many swaps are needed for Bubble Sort to sort it in descending order?",
    "options": ["2", "15", "13", "36"],
    "correct": 2
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
