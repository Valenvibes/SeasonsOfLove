import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

import "../styles/next-btn.css"

import แมวส้ม from '../images/แมวส้ม.png';
import หมาตำรวจ from '../images/หมาตำรวจ.png';
import แมวสามสี from '../images/แมวสามสี.png';
import แมวดำ from '../images/แมวดำ.png';
import หมาไซบีเรียน from '../images/หมาไซบีเรียน.png';
import หมาแดงโกลเด้น from '../images/หมาแดงโกลเด้น.png';

const questions = [
  {
    question: "เวลาต้องเจอคนใหม่ๆคุณเป็นยังไง?",
    options: [
      { text: "ชอบพูดจาน่ารักๆ แถมมีท่าน่ารักตลอด", drink: "หมาแดงโกลเด้น" },
      { text: "อ่านสถานการณ์ไว ปรับตัวเก่ง แก้ปัญหาได้เร็ว", drink: "หมาตำรวจ" },
      { text: "ค่อนข้างเงียบๆ ชอบอยู่สงบๆ มากกว่า", drink: "แมวดำ" }
    ]
  },
  {
    question: "อะไรที่สำคัญกับคุณมากที่สุด?",
    options: [
      { text: "คอยดูแลและใส่ใจคนรอบข้างเสมอ", drink: "หมาตำรวจ" },
      { text: "รู้สึกว่าสิ่งที่ตัวเองต้องการสำคัญที่สุด", drink: "แมวส้ม" },
      { text: "อยากได้ความรักดีๆ และพร้อมจะเจอคนที่ใช่", drink: "แมวสามสี" }
    ]
  },
  {
    question: "ถ้าเจอปัญหาคุณมักจะทำยังไง?",
    options: [
      { text: "คิดก่อนพูด วางแผนให้รอบคอบ", drink: "แมวดำ" },
      { text: "หาอะไรสนุกๆ ทำให้ตัวเองอารมณ์ดีขึ้น", drink: "หมาไซบีเรียน" },
      { text: "พยายามทำตัวสุภาพและรับมือกับทุกอย่างอย่างใจเย็น", drink: "หมาแดงโกลเด้น" }
    ]
  },
  {
    question: "เพื่อนๆมักบอกว่าคุณเป็นคนแบบไหน?",
    options: [
      { text: "ทำอะไรก็ดูมีเสน่ห์ ดูดีไปหมด", drink: "แมวสามสี" },
      { text: "เป็นคนเป๊ะๆ ชอบให้ทุกอย่างเป็นระเบียบ ", drink: "แมวส้ม" },
      { text: "อยู่ด้วยแล้วสนุก เฮไหนเฮนั่น", drink: "หมาไซบีเรียน" },
    ]
  },
  {
    question: "ถ้าเพื่อนมีเรื่องเครียดคุณจะทำยังไง?",
    options: [
      { text: "รับรู้ได้ทันทีว่าเขาคิดอะไรอยู่ แล้วช่วยปลอบ", drink: "แมวสามสี" },
      { text: "เข้าไปชวนคุย ชวนเล่นให้เขารู้สึกดีขึ้น", drink: "หมาไซบีเรียน" },
      { text: "สังเกตอารมณ์เพื่อนเงียบๆ แล้วค่อยช่วยปลอบอย่างเข้าใจ", drink: "แมวดำ" },
    ]
  },
  {
    question: "ข้อไหนที่เป็นคุณมากที่สุด?",
    options: [
      { text: "ไหวพริบดี แก้ปัญหาไว ไม่ปล่อยให้เรื่องยุ่งนาน", drink: "หมาตำรวจ" },
      { text: "เป็นตัวของตัวเอง ชอบใช้ชีวิตอิสระ", drink: "แมวส้ม" },
      { text: "หัวเราะกับเรื่องเล็กๆน้อยๆ ได้ง่าย", drink: "หมาแดงโกลเด้น" },
    ]
  },
];

const drinks = {
  "แมวส้ม": { 
    image: แมวส้ม, 
    compatible: "หมาตำรวจ", 
    description: "คุณคือรักที่อิสระแต่ก็รักจริง มีพื้นที่ของตัวเองแต่ก็พร้อมให้ความสำคัญกับคนที่รักเสมอ ใช้ชีวิตตามจังหวะของตัวเองแต่ก็มอบความสบายใจให้คนข้างๆ ได้อย่างเป็นธรรมชาติ" 
  },
  "หมาตำรวจ": { 
    image: หมาตำรวจ,
    compatible: "แมวส้ม", 
    description: "คุณคือรักที่มั่นคงและน่าเชื่อถือ ซื่อสัตย์ต่อคำพูดและความรู้สึก พร้อมเป็นที่พึ่งให้คนรักเสมอ ไม่ว่าสถานการณ์ไหนก็แก้ไขได้ด้วยสติและความมุ่งมั่น ใครที่อยู่ข้าง ๆ คุณจะรู้สึกปลอดภัย" 
  },
  "แมวสามสี": { 
    image: แมวสามสี, 
    compatible: "หมาไซบีเรียน", 
    description: "คุณคือรักที่เต็มไปด้วยเสน่ห์น่าค้นหา เข้าใจอารมณ์และความรู้สึกของคนรอบข้างเป็นอย่างดี อยู่ด้วยแล้วรู้สึกเหมือนได้รับพลังจากคนที่เข้าใจเราทั้งหมด พร้อมเปิดใจรับรักและมอบความรู้สึกดีๆ ตลอดเวลา" 
  },
  "แมวดำ": { 
    image: แมวดำ, 
    compatible: "หมาแดงโกลเด้น",
    description: "คุณคือรักที่นิ่งสงบแต่ลึกซึ้ง คิดก่อนพูดและให้ความใส่ใจในรายละเอียด มอบความมั่นคงและความอบอุ่นเงียบ ๆ ที่ทำให้รู้สึกปลอดภัยเหมือนได้พักใจในที่ที่เป็นของเรา" 
  },
  "หมาไซบีเรียน": { 
    image: หมาไซบีเรียน, 
    compatible: "แมวสามสี", 
    description: "คุณคือรักที่เปรียบเสมือนสายลมแห่งความสุข นำพาความสดใสและเสียงหัวเราะมาด้วยเสมอ อยู่ตรงไหนก็บันเทิงตรงนั้น ชอบเติมสีสันให้ทุกวันไม่น่าเบื่อ" 
  },
  "หมาแดงโกลเด้น": { 
    image: หมาแดงโกลเด้น, 
    compatible: "แมวดำ", 
    description: "คุณคือรักที่อบอุ่นเหมือนแสงแดดยามเช้า เต็มไปด้วยพลังบวก หัวเราะง่าย และมอบความสบายใจให้กับคนรอบข้างได้เสมอ อยู่ด้วยแล้วรู้สึกถึงความรักที่จริงใจและเป็นธรรมชาติ" 
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
        disabled={!selectedAnswer} // Disable the button until an answer is selected
      >
        ไปต่อ &gt;
      </button>
    </div>
);
}

export default Quiz;
