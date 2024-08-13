import React from 'react';
import './Result.css';

const Result = ({ results }) => {
  return (
    <div className="result-container">
      <h2>Your Prakruthi Results</h2>
      <p>Vata: {results.vata.toFixed(2)}%</p>
      <p>Pitta: {results.pitta.toFixed(2)}%</p>
      <p>Kapha: {results.kapha.toFixed(2)}%</p>
    </div>
  );
};

export default Result;
