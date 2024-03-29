const questions = [
        
        {
            question: "Which CSS property is used to change the text color of an element?",
            answers: [
                {text: "color", correct: true},
                {text: "font-color", correct: false},
                {text: "text-color", correct: false},
                {text: "background-color", correct: false},
            ]
        },
         {
            question: "Which HTML tag is used to define an unordered list?",
            answers: [
                {text: "&lt;ul&gt;", correct: true},
                {text: "&lt;ol&gt;", correct: false},
                {text: "&lt;li&gt;", correct: false},
                {text: "&lt;div&gt;", correct: false},
            ]
       },
        {
            question: "Which operator is used for strict equality comparison in JavaScript?",
            answers: [
                {text: "==", correct: false},
                {text: "===", correct: true},
                {text: "=", correct: false},
                {text: "!=", correct: false},
            ]
        },
        {
            question: "Which event in JavaScript is triggered when the user clicks on an element?",
            answers: [
                {text: "mouseover", correct: false},
                {text: "click", correct: true},
                {text: "keydown", correct: false},
                {text: "submit", correct: false},
            ]
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
    answers: [
        {text: "&lt;a&gt;", correct: true},
        {text: "&lt;link&gt;", correct: false},
        {text: "&lt;href&gt;", correct: false},
        {text: "&lt;hyperlink&gt;", correct: false},
    ]
        },
        {
            question: "Which CSS property is used to control the spacing between lines of text?",
            answers: [
            {text: "&lt;a&gt;", correct: true},
            {text: "&lt;link&gt;", correct: false},
            {text: "&lt;href&gt;", correct: false},
            {text: "&lt;hyperlink&gt;", correct: false},
            ]
        },
        {
            question: "What does CSS stand for?",
            answers: [
                {text: "Cascading Style Sheets", correct: true},
                {text: "Colorful Style Sheets", correct: false},
                {text: "Computer Style Sheets", correct: false},
                {text: "Creative Style Sheets", correct: false},
            ]
        },
        {
            question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
            answers: [
                {text: "push()", correct: true},
                {text: "add()", correct: false},
                {text: "append()", correct: false},
                {text: "insert()", correct: false},
            ]
        },
        {
            question: "Which of the following is a correct way to comment in JavaScript?",
            answers: [
                {text: "// This is a comment", correct: true},
                {text: "&lt;!-- This is a comment --&gt;", correct: false},
                {text: "/* This is a comment */", correct: false},
                {text: "# This is a comment", correct: false},
            ]
        },
        {
            question: "What does HTML stand for?",
            answers: [
                {text: "Hypertext Markup Language", correct: true},
                {text: "Hyperlink and Text Markup Language", correct: false},
                {text: "Home Tool Markup Language", correct: false},
                {text: "High Text Markup Language", correct: false},
            ]
        },
        {
            question: "Which CSS property is used to set the background color of an element?",
            answers: [
                {text: "background-color", correct: true},
                {text: "color", correct: false},
                {text: "text-color", correct: false},
                {text: "background", correct: false},
            ]
        },
        {
            question: "What symbol is used to access jQuery?",
            answers: [
                {text: "$", correct: true},
                {text: "&", correct: false},
                {text: "@", correct: false},
                {text: "#", correct: false},
            ]
        },
        {
            question: "Which method is used to remove the last element from an array and return that element?",
            answers: [
                {text: "pop()", correct: true},
                {text: "delete()", correct: false},
                {text: "remove()", correct: false},
                {text: "splice()", correct: false},
            ]
        },
        {
            question: "Which of the following is NOT a valid JavaScript variable name?",
            answers: [
                {text: "2myVar", correct: true},
                {text: "my_Var", correct: false},
                {text: "$myVar", correct: false},
                {text: "_myVar", correct: false},
            ]
        },
        {
            question: "What does CSS3 introduce?",
            answers: [
                {text: "New selectors and properties", correct: true},
                {text: "New programming language", correct: false},
                {text: "New web framework", correct: false},
                {text: "New scripting language", correct: false},
            ]
        },
        {
            question: "Which attribute is used to specify that the script is executed asynchronously (only for external scripts)?",
            answers: [
                {text: "async", correct: true},
                {text: "defer", correct: false},
                {text: "sync", correct: false},
                {text: "execute", correct: false},
            ]
        },
        {
            question: "Which property is used in CSS to change the order of elements displayed?",
            answers: [
                {text: "order", correct: true},
                {text: "display-order", correct: false},
                {text: "z-index", correct: false},
                {text: "index", correct: false},
            ]
        },
        {
            question: "What is the correct way to write a JavaScript array?",
            answers: [
                {text: "var colors = ['red', 'green', 'blue'];", correct: true},
                {text: "var colors = 'red', 'green', 'blue';", correct: false},
                {text: "var colors = {'red', 'green', 'blue'};", correct: false},
                {text: "var colors = (1:'red', 2:'green', 3:'blue');", correct: false},
            ]
        },
        {
            question: "Which HTML tag is used to define a table row?",
        answers: [
            {text: "&lt;tr&gt;", correct: true},
            {text: "&lt;table&gt;", correct: false},
            {text: "&lt;td&gt;", correct: false},
            {text: "&lt;th&gt;", correct: false},
        ]
        },
        {
            question: "Which property is used to change the size of an element's font?",
            answers: [
                {text: "font-size", correct: true},
                {text: "text-size", correct: false},
                {text: "size", correct: false},
                {text: "font-style", correct: false},
            ]
        }
    ];

// Get references to HTML elements
const questionElement = document.getElementById("que");
const answerButtons = document.getElementById("ans-button");
const nextButton = document.getElementById("next-btn");

// Define variables to keep track of the current question index and the score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"; // Set the text of the next button
    showQuestion(); // Display the first question
}

// Function to display the current question and its answer options
function showQuestion() {
    resetState(); // Reset the state of the quiz
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Display the question text

    // Display answer options for the current question
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text; // Set the text of the button to the answer option
        button.classList.add("btn"); // Add CSS class to style the button
        answerButtons.appendChild(button); // Append the button to the answer buttons container
        if (answer.correct) {
            button.dataset.correct = answer.correct; // Set custom dataset attribute for correct answers
        }
        button.addEventListener("click", selectAnswer); // Add click event listener to the button
    });
}

// Function to reset the state of the quiz
function resetState() {
    nextButton.style.display = "none"; // Hide the next button
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Remove all answer buttons
    }
}

// Function to handle answer selection
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true"; // Check if the selected answer is correct
    if (isCorrect) {
        selectedButton.classList.add("correct"); // Add CSS class to indicate correct answer
        score++; // Increment the score
    } else {
        selectedButton.classList.add("incorrect"); // Add CSS class to indicate incorrect answer
    }

    // Disable all answer buttons after selection
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Add CSS class to correct answer buttons
        }
        button.disabled = true; // Disable the button to prevent further selection
    });
    nextButton.style.display = "block"; // Show the next button
}

// Function to display the final score
function showScore() {
    resetState(); // Reset the state of the quiz
    questionElement.innerHTML = `Your Score: ${score} Out of ${questions.length}!`; // Display the score
    nextButton.innerHTML = "Play Again"; // Change the text of the next button
    nextButton.style.display = "block"; // Show the next button
}

// Function to handle the next button click
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Display the next question
    } else {
        showScore(); // Show the final score if all questions are answered
    }
}

// Event listener for the next button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton(); // Handle next button click
    } else {
        startQuiz(); // Start the quiz again if the user wants to play again
    }
});

document.addEventListener("DOMContentLoaded", function() {
    startQuiz(); // Start the quiz once the DOM content is fully loaded
});

showQuestion();

// Start the quiz initially
//startQuiz();
