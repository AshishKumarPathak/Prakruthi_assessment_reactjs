import React, { useState } from 'react';
import Questionnaire from './components/Questionare';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [results, setResults] = useState({ vata: 0, pitta: 0, kapha: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResult = (finalScores) => {
    setResults(finalScores);
    setIsSubmitted(true);
  };

  return (
    <div className="app-container">
      <h1>Prakruthi Assessment</h1>
      {isSubmitted ? (
        <Result results={results} />
      ) : (
        <Questionnaire onSubmit={handleResult} />
      )}
    </div>
  );
};

export default App;
