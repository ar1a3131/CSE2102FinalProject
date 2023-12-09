import React from 'react';

import './QuizStyle.css';


const Result = ({ answers, questions, onReset }) => {
  const totalScore = answers.reduce((score, answer, index) => {
    return answer === questions[index].correctAnswer ? score + 1 : score;
  }, 0);

  return (
    <div className="page-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/panjshir.jpg)` }}>
      <div className="quiz-container">
        <div className="question-text">Quiz Results</div>
        <div className="result-summary">
          <p>Total Score: {totalScore}/{questions.length}</p>
        </div>
        <div className="navigation-buttons">
          <button onClick={onReset}>Return to Quiz Banks</button>
        </div>
      </div>
    </div>
  );
};

export default Result;





