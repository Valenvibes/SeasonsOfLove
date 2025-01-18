import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

import "../styles/next-btn.css"

import pumpkinSpiceLatte from '../images/pumpkin-spice-latte.png';
import goldenMilk from '../images/golden-milk.png';
import chaiLatte from '../images/chai-latte.png';
import hotChocolate from '../images/hot-chocolate.png';
import peppermintMocha from '../images/peppermint-mocha.png';
import matchaLatte from '../images/matcha-latte.png';

const questions = [
  {
    question: "คำถาม 1",
    options: [
      { text: "A", drink: "Matcha Latte" },
      { text: "B", drink: "Golden Milk" },
      { text: "C", drink: "Hot Chocolate" }
    ]
  },
  {
    question: "คำถาม 2",
    options: [
      { text: "A", drink: "Peppermint Mocha" },
      { text: "B", drink: "Pumpkin Spice Latte" },
      { text: "C", drink: "Chai Latte" }
    ]
  },
  {
    question: "คำถาม 3",
    options: [
      { text: "A", drink: "Pumpkin Spice Latte" },
      { text: "B", drink: "Hot Chocolate" },
      { text: "C", drink: "Peppermint Mocha" }
    ]
  },
  {
    question: "คำถาม 4",
    options: [
      { text: "A", drink: "Peppermint Mocha" },
      { text: "B", drink: "Matcha Latte" },
      { text: "C", drink: "Chai Latte" }
    ]
  },
  {
    question: "คำถาม 5",
    options: [
      { text: "A", drink: "Golden Milk" },
      { text: "B", drink: "Hot Chocolate" },
      { text: "C", drink: "Chai Latte" }
    ]
  },
  {
    question: "คำถาม 6",
    options: [
      { text: "A", drink: "Pumpkin Spice Latte" },
      { text: "B", drink: "Matcha Latte" },
      { text: "C", drink: "Golden Milk" }
    ]
  },
];

const drinks = {
  "Pumpkin Spice Latte": { 
    image: pumpkinSpiceLatte, 
    compatible: "Golden Milk", 
    description: "You are cozy, warm, and delightfully nostalgic. You cherish traditions and the little things that make life sweet, like the scent of cinnamon and crisp autumn air. Your approachable, down-to-earth nature makes you the perfect companion for those cozy afternoons and good times with friends!" 
  },
  "Golden Milk": { 
    image: goldenMilk, 
    compatible: "Pumpkin Spice Latte", 
    description: "You are radiant, kind-hearted, and full of positive energy. You love creating warmth and comfort for others, always offering care and wisdom. Your nurturing spirit lights up any room, and your joyful outlook spreads peace and happiness wherever you go!" 
  },
  "Chai Latte": { 
    image: chaiLatte, 
    compatible: "Matcha Latte", 
    description: "You are vibrant, adventurous, and always ready for a good time! You dive into life with energy and enthusiasm, seeking out new challenges and flavors to experience. Your curiosity makes every day an adventure, and you're always ready to tackle what comes next!" 
  },
  "Hot Chocolate": { 
    image: hotChocolate, 
    compatible: "Peppermint Mocha", 
    description: "You are sweet, comforting, and a dependable friend. You find joy in simple pleasures, like sharing cozy moments and making everyone feel appreciated. You're the heart of any gathering, and you make people smile wherever you go!" 
  },
  "Peppermint Mocha": { 
    image: peppermintMocha, 
    compatible: "Hot Chocolate", 
    description: "You are lively, energetic, and ready to make every moment unforgettable! You thrive in the hustle and bustle of the season, bringing excitement and cheer wherever you are. With your perfect mix of fun and warmth, you're the life of the party!" 
  },
  "Matcha Latte": { 
    image: matchaLatte, 
    compatible: "Chai Latte", 
    description: "You are serene, thoughtful, and have a natural calmness that others admire. You embrace the beauty in life's quiet moments and enjoy reflecting on what truly matters. Your personality radiates creativity and balance, making every day feel just a little brighter and more meaningful." 
  }
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);

  function handleAnswer(drink) {
    setScores((prevScores) => {
      const newScores = { ...prevScores };
  
      // Decrease the score for the previously selected drink
      if (selectedAnswer) {
        newScores[selectedAnswer] -= 1;
      }
  
      // Increase the score for the newly selected drink
      newScores[drink] = (newScores[drink] || 0) + 1;
  
      return newScores;
    });
  
    setSelectedAnswer(drink); // Mark the new answer as selected
  }
  

  function handleNextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    let maxDrink = null;
    let maxScore = 0;

    for (const [drink, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxDrink = drink;
        maxScore = score;
      }
    }

    setResult(maxDrink);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScores({});
    setResult(null);
  }

  if (result) {
    const compatible = drinks[result].compatible;
    return (
      <Result
        drink={result}
        compatible={compatible}
        description={drinks[result].description}
        drinkImage={drinks[result].image}
        compatibleImage={drinks[compatible].image}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div className="quiz-container-with-next">
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />

      <button className="next-btn"
        onClick={handleNextQuestion}
        enable={!selectedAnswer} // Disable the button until an answer is selected
      >
        ไปต่อ &gt;
      </button>
    </div>
);
}

export default Quiz;
