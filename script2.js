const questions = [
    {
        question: 'Which mammal is known to have the most powerful bite in the world?',
        answers: [
            { text: 'Hippopotamus', correct: true },
            { text: 'Crocodile', correct: false },
            { text: 'Lion', correct: false },
            { text: 'Polar Bear', correct: false }
        ]
    },
    {
        question: 'What object does a male penguin often gift to a female penguin to win her over?',
        answers: [
            { text: 'A stick', correct: false },
            { text: 'A fish', correct: false },
            { text: 'A pebble', correct: true },
            { text: 'Snow', correct: false }
        ]
    },
    {
        question: 'How long is an elephant pregnant before it gives birth?',
        answers: [
            { text: '25 Months', correct: false },
            { text: '22 Months', correct: true },
            { text: '20 Months', correct: false },
            { text: '40 Months', correct: false }
        ]
    },
    {
        question: 'Why are flamingos pink?',
        answers: [
            { text: 'Because of their diet of algae, shrimps and crustaceans', correct: true },
            { text: 'Evolution', correct: false },
            { text: 'Survival', correct: false },
            { text: 'Friendship', correct: false }
        ]
    },
    {
        question: 'A dog sweats through which part of its body?',
        answers: [
            { text: 'Its tail', correct: false },
            { text: 'Its body', correct: false },
            { text: 'Its ears', correct: false },
            { text: 'Its paws', correct: true }
        ]
    },
    {
        question: 'What is the size of a newborn kangaroo?',
        answers: [
            { text: '1 inch', correct: true },
            { text: '2 inch', correct: false },
            { text: '5 inch', correct: false },
            { text: '7 inch', correct: false }
        ]
    },
    {
        question: 'How far away can a wolf smell its prey?',
        answers: [
            { text: 'Almost 2 miles', correct: true },
            { text: 'Almost 3 miles', correct: false },
            { text: 'Under 1 mile', correct: false },
            { text: 'Half a mile', correct: false }
        ]
    },
    {
        question: 'Which animal is known to spend 90% of its day, sleeping?',
        answers: [
            { text: 'Opossums', correct: false },
            { text: 'Sloths', correct: false },
            { text: 'Koalas', correct: true },
            { text: 'cats', correct: false }
        ]
    },
    {
        question: 'What color is the tongue of a giraffe?',
        answers: [
            { text: 'Orange', correct: false },
            { text: 'Red', correct: false },
            { text: 'Purple', correct: true },
            { text: 'Grey', correct: false }
        ]
    },
    {
        question: 'Which animal stripes are on their skin as well as their fur?',
        answers: [
            { text: 'Zebra', correct: false },
            { text: 'Lion', correct: false },
            { text: 'Tiger', correct: true },
            { text: 'Cats', correct: false }
        ]
    },
    {
        question: 'What is the name of the fastest land animal?',
        answers: [
            { text: 'Cheetah', correct: true },
            { text: 'Tiger', correct: false },
            { text: 'Wildebeest', correct: false },
            { text: 'Hare', correct: false }
        ]
    },
    {
        question: 'A baby goat is called what?',
        answers: [
            { text: 'cubs', correct: false },
            { text: 'pups', correct: false },
            { text: 'Kid', correct: true },
            { text: 'Calf', correct: false }
        ]
    },
    {
        question: 'What is the name of the tallest mountain in the world?',
        answers: [
            { text: 'Mount Everest', correct: true },
            { text: 'K2', correct: false },
            { text: 'kangchenjunga', correct: false },
            { text: 'Makalu', correct: false }
        ]
    },
    {
        question: 'Which country has the largest population in the world?',
        answers: [
            { text: 'USA', correct: false },
            { text: 'India', correct: false },
            { text: 'China', correct: true },
            { text: 'Russia', correct: false }
        ]
    },
    {
        question: 'What is the name of the longest river in Africa?',
        answers: [
            { text: 'The Amazon River', correct: false },
            { text: 'The Nile River', correct: true },
            { text: 'The Yangtze River', correct: false },
            { text: 'The Mississippi River', correct: false }
        ]
    },
    {
        question: 'What American city is the Golden Gate Bridge located in?',
        answers: [
            { text: 'San Francisco', correct: true },
            { text: 'New York', correct: false },
            { text: 'Chicago', correct: false },
            { text: 'Las Vegas', correct: false }
        ]
    },
    {
        question: 'What is the largest country in the world?',
        answers: [
            { text: 'China', correct: false },
            { text: 'USA', correct: false },
            { text: 'India', correct: false },
            { text: 'Russia', correct: true }
        ]
    },
    {
        question: 'What is the capital city of Canada?',
        answers: [
            { text: 'Ottawa', correct: true },
            { text: 'Toronto', correct: false },
            { text: 'Vancouver', correct: false },
            { text: 'Quebec', correct: false }
        ]
    },
    {
        question: 'What is the name of the largest ocean in the world?',
        answers: [
            { text: 'The Pacific Ocean', correct: true },
            { text: 'The Atlantic Ocean', correct: false },
            { text: 'The Indian Ocean', correct: false },
            { text: 'The Artic Ocean', correct: false }
        ]
    },
    {
        question: 'What country are the Great Pyramids of Giza located in?',
        answers: [
            { text: 'Libya', correct: false },
            { text: 'Morocco', correct: false },
            { text: 'Egypt', correct: true },
            { text: 'Saudi Arabia', correct: false }
        ]
    },
    {
        question: 'What is the capital of Thailand?',
        answers: [
            { text: 'Nakhin Ratchasima', correct: false },
            { text: 'Nonthaburi', correct: false },
            { text: 'Bangkok', correct: true },
            { text: 'Chiang Mai', correct: false }
        ]
    },
    {
        question: 'What is the name of the smallest country in the world?',
        answers: [
            { text: 'Nauru', correct: false },
            { text: 'Monaco', correct: false },
            { text: 'The Vatican City', correct: true },
            { text: 'San Marino', correct: false }
        ]
    },
    {
        question: 'Which country is also called the Netherlands?',
        answers: [
            { text: 'Holland', correct: true },
            { text: 'Belgium', correct: false },
            { text: 'Denmark', correct: false },
            { text: 'Switzerland', correct: false }
        ]
    },
    {
        question: 'What is the coldest place on earth?',
        answers: [
            { text: 'Greenland', correct: false },
            { text: 'South Pole', correct: false },
            { text: 'Antarctica', correct: true },
            { text: 'Russia', correct: false }
        ]
    },
    {
        question: 'Who is the first Arab team to reach the World Cup??',
        answers: [
            { text: 'Eypt', correct: true },
            { text: 'Morocco', correct: false },
            { text: 'Algeria', correct: false },
            { text: 'Tunisia', correct: false }
        ]
    },
    {
        question: 'Is web development fun?',
        answers: [
            { text: 'NO', correct: false },
            { text: 'YES!!!', correct: true },
            { text: 'Um no', correct: false },
            { text: 'IDK', correct: false }
        ]
    },
    {
        question: 'What is 4 * 2?',
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: true },
            { text: '55', correct: false },
            { text: '10', correct: false },
        ]
    }, {
        question: 'What is 3 * 3?',
        answers: [
            { text: '6', correct: false },
            { text: '9', correct: true },
            { text: '11', correct: false },
            { text: '20', correct: false },
        ]
    }, {
        question: 'What is 5*5 ?',
        answers: [
            { text: '25', correct: true },
            { text: '35', correct: false },
            { text: '55', correct: false },
            { text: '10', correct: false },
        ]
    }, {
        question: 'What is 4 * 4?',
        answers: [
            { text: '6', correct: false },
            { text: '22', correct: false },
            { text: '55', correct: false },
            { text: '16', correct: true },
        ]
    }, {
        question: 'What is 6 * 6?',
        answers: [
            { text: '6', correct: false },
            { text: '8', correct: false },
            { text: '55', correct: false },
            { text: '36', correct: true },
        ]
    }, {
        question: 'What is 1 * 2?',
        answers: [
            { text: '6', correct: false },
            { text: '2', correct: true },
            { text: '55', correct: false },
            { text: '10', correct: false },
        ]
    },
    {
        question: 'Which animal can sleep while standing up?',
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false },
            { text: 'Horse', correct: true },
            { text: 'Rhino', correct: false }
        ]
    },
]

const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn");
const terminate = document.getElementById("terminate");
const goAgain = document.getElementById("go-again")

let currentQuestionIndex;
let scores;
let wrongAnswer;

function startQuiz() {
    currentQuestionIndex = 0;
    scores = 0;
    wrongAnswer = 0;
    terminate.style.display="block";
    nextButton.style.display = "none";
    goAgain.style.display = "none";
    showQuestions();
}

nextButton.addEventListener("click", nextQuestion)
terminate.addEventListener("click", showScores);

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length)
        showQuestions();
    else {
        showScores();
    }
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestions() {
    resetState();
    //hiding the next button for a moment
    nextButton.style.display = "none";
    //Including the question in the array
    let currentQuestion = questions[currentQuestionIndex].question;
    question.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion}`
    //Including the answers
    Array.from(questions[currentQuestionIndex].answers).forEach(ans => {
        let btn = document.createElement("button");
        btn.innerHTML = ans.text;
        btn.classList.add("btn", "flex", "pl-3", "py-1", "rounded-md", "border-2", "border-gray-700", "text-gray-700", "transition-all", "duration-300", "hover:scale-x-105", "w-full", "disabled:cursor-no-drop")
        answerButtons.append(btn);
        btn.dataset.correct = ans.correct;
        btn.addEventListener("click", selectAnswer)
    })
}

function selectAnswer(e) {
    const selectedButton = e.target;
    if (selectedButton.dataset.correct === "true") {
        selectedButton.classList.add("correct")
        scores++;
    } else {
        selectedButton.classList.add("incorrect");
        wrongAnswer++;
    }
    Array.from(answerButtons.children).forEach(btn => {
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = "true";
    })
    nextButton.style.display = "block";
}

function showScores() {
    resetState();
    nextButton.style.display="none";
    terminate.style.display="None";
    question.innerHTML = `Total solved ${scores + wrongAnswer} out of ${questions.length} <br> ${wrongAnswer} wrong Answers <br> ${scores} right Answers`;
    goAgain.style.display = "block";
    goAgain.innerHTML = "Go Again"
    goAgain.addEventListener("click", startQuiz);
}



startQuiz();