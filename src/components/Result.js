import React from "react";
import "../styles/result.css"

function Result({ drink, compatible, description, drinkImage, compatibleImage, restartQuiz }) {
  return (
    <div className='borderedArea'>
      <div className="resultContainer">
        <div className='resultHeader'>
          <h3>⋆˙𐙚 Your Type ❅˙⋆</h3>
        </div>
        
        <div className='resultDrink'>
          <h1>{drink}</h1>
            <img src={drinkImage} alt={drink} />
            <p>{description}</p>
        </div>

        <div className='resultPair'>

          <div className="pairLeft">
            <h4>Your perfect pair</h4>
            <h3>{compatible}</h3>
          </div>

          <div className='pairRight'>
            <img src={compatibleImage} alt={compatible} />
          </div>
        </div>
        <div className='attribution'><a href="https://www.instagram.com/seasonsoflove.vlvbs/" target="_blank" rel="noopener noreferrer">มาส่องความรัก ว่าเป็น รัก หลง หรือดู ได้ที่งาน SEASONS OF LOVE เทศกาลส่องรักหลงฤดู!

ติดตามรายละเอียดเพิ่มเติมได้ที่ instagram : seasonsoflove.vlvbs</a></div>
      </div>
      
      <button className='quizAgain' onClick={restartQuiz}>Take the Quiz Again &gt;</button>
    </div>
  );
}

export default Result;
