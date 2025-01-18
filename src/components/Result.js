import React from "react";
import "../styles/result.css"

function Result({ drink, compatible, description, drinkImage, compatibleImage, restartQuiz }) {
  return (
    <div className='borderedArea'>
      <div className="resultContainer">
        <div className='resultHeader'>
          <h3>⋆˙𐙚 Your pet type ❅˙⋆</h3>
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
        <div className='attribution'><a href="https://www.instagram.com/f.__d_me/" target="_blank" rel="noopener noreferrer">Seasons Of Love Quiz by @f.__d_me</a></div>
      </div>
      
      <button className='quizAgain' onClick={restartQuiz}>ย้อนกลับ &gt;</button>
    </div>
  );
}

export default Result;
