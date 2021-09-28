// getting readline-sync package to read input
var readline = require("readline-sync");

// Input
var user = readline.question("Please Enter Your Name ");

// Processing

// Initialsing the score
score = 0;

// Welcome User
console.log("Hello " + user + ", Welcome to the Game 'How Much You Know Me?'");

// show rules
console.log("###########");
console.log(user, "these are the Rules for the game");
console.log("For every correct answer your score will increase by 1");
console.log("For every weong answer your score will decrease by 0.5");
console.log("Enjoy");
console.log("###########");

// function to execute the game
function play(question, correctAnswer) {
  var userAnswer = readline.question(question + " ");

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("Yes! You are right");
    score += 1;
  } else {
    console.log("Sorry! You are wrong");
    console.log("Correct Answer is ", correctAnswer.toLowerCase());
    score -= 0.5;
  }

  console.log("Your score: ", score);
  console.log("*************");
}

// creating question bank (list of objects)
questionBank = [
  {
    question: "In which year I was Born?",
    answer: "1997",
  },
  {
    question: "My Favourite Sport?",
    answer: "football",
  },
  {
    question: "In which city I was born?",
    answer: "ludhiana",
  },
  {
    question: "From which board I have completed my 10th grade?",
    answer: "icse",
  },
  {
    question: "My Favourite Web Series?",
    answer: "family man",
  },
  {
    question: "My favourite Dish?",
    answer: "Briyani",
  },
  {
    question: "Who is my favouraite actor?",
    answer: "Akshay Kumar",
  },
  {
    question: "My favourite Bollywood Movie (Its a Biopic)",
    answer: "Bhaag Milkha Bhaag",
  },
];

// traversing each question and calling play function for each question
for (var i = 0; i <= questionBank.length - 1; i++) {
  play(questionBank[i].question, questionBank[i].answer);
}

// Output
console.log("\n" + "**************");
console.log("Thank You for Playing the Game!!");
console.log("You Scored: ", score);
console.log("**************");
