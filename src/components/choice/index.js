import React from 'react';
import './Choice.css';

const Choice = ({ country, onClick, isClicked, answer, disabled }) => {
  const isCorrect = country === answer;
  const isIncorrect = isClicked && !isCorrect;

  if (disabled) {
    return (
      <div className={`option-button disabled ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}>
        {country}
      </div>
    );
  }

  return (
    <button 
      className={`option-button`} 
      onClick={onClick}
    >
      {country}
    </button>
  );
};

export default Choice;