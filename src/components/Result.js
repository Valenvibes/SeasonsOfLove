import React from "react";
import "../styles/result.css";

function Result({ drink, compatible, description, drinkImage, compatibleImage, restartQuiz }) {
  return (
    <div className='borderedArea'>
      <div className="resultContainer">
        <div className='resultHeader'>
          <h3>⟡݁₊ไทป์ของคุณ₊݁⟡ </h3>
        </div>

        <div className='resultDrink'>
          <h1>{drink}</h1>
          <img src={drinkImage} alt={drink} />
          <p>{description}</p>
        </div>

        <div className='resultPair'>
          <div className="pairLeft">
            <h4>คู่หูของคุณคือ</h4>
            <h3>{compatible}</h3>
          </div>

          <div className='pairRight'>
            <img src={compatibleImage} alt={compatible} />
          </div>
        </div>

        <div className='attribution'>
          <a href="https://www.instagram.com/seasonsoflove.vlvbs/" target="_blank" rel="noopener noreferrer">Seasons of Love.vlvbs @seasonsoflove.vlvbs</a>
        </div>
      </div>

      <button className='quizAgain' onClick={restartQuiz}>ทำแบบทดสอบอีกครั้ง &gt;</button>

      {/* เพิ่มข้อความใหม่ที่นี่ */}
      <div className='Credit'><a href="https://korevillo.github.io/cozycabincafe/" target="_blank" rel="noopener noreferrer">***ขอบคุณที่สนใจเล่นเกมกับเรานะค้าบ!
        ขอบคุณต้นฉบับจาก korevillo นะครับ***</a></div>
    </div>
  );
}

export default Result;
