import React, { useState } from 'react';
import './Questionnaire.css';

const questions = [
  { text: 'Do you often feel cold?', dosha: 'vata' },
  { text: 'Do you have dry skin?', dosha: 'vata' },
  { text: 'Is your appetite irregular?', dosha: 'vata' },
  { text: 'Do you have a light and thin body frame?', dosha: 'vata' },
  { text: 'Are you prone to worry and anxiety?', dosha: 'vata' },
  { text: 'Do you enjoy frequent activity and change?', dosha: 'vata' },
  { text: 'Do you have difficulty gaining weight?', dosha: 'vata' },
  { text: 'Do you speak quickly?', dosha: 'vata' },
  { text: 'Do you have irregular sleep patterns?', dosha: 'vata' },
  { text: 'Do you often feel nervous?', dosha: 'vata' },
  { text: 'Do you experience frequent digestive issues?', dosha: 'vata' },
  { text: 'Do you feel restless and agitated?', dosha: 'vata' },
  { text: 'Is your skin cool to the touch?', dosha: 'vata' },
  { text: 'Do you have a quick, active mind?', dosha: 'vata' },
  { text: 'Do you often feel ungrounded or spacey?', dosha: 'vata' },

  { text: 'Are you often impatient?', dosha: 'pitta' },
  { text: 'Do you have a sharp intellect?', dosha: 'pitta' },
  { text: 'Do you feel hot easily?', dosha: 'pitta' },
  { text: 'Is your skin sensitive or prone to redness?', dosha: 'pitta' },
  { text: 'Do you have a strong appetite?', dosha: 'pitta' },
  { text: 'Are you decisive and assertive?', dosha: 'pitta' },
  { text: 'Do you sweat easily?', dosha: 'pitta' },
  { text: 'Do you tend to be competitive?', dosha: 'pitta' },
  { text: 'Are you easily irritated or angered?', dosha: 'pitta' },
  { text: 'Do you prefer cool environments?', dosha: 'pitta' },
  { text: 'Is your hair thin or prone to early greying?', dosha: 'pitta' },
  { text: 'Do you have a strong sense of purpose?', dosha: 'pitta' },
  { text: 'Do you enjoy leadership roles?', dosha: 'pitta' },
  { text: 'Do you have a moderate build and weight?', dosha: 'pitta' },
  { text: 'Do you experience burning sensations in your body?', dosha: 'pitta' },

  { text: 'Do you have a calm and steady nature?', dosha: 'kapha' },
  { text: 'Do you have smooth, oily skin?', dosha: 'kapha' },
  { text: 'Is your body frame solid and sturdy?', dosha: 'kapha' },
  { text: 'Do you gain weight easily?', dosha: 'kapha' },
  { text: 'Are you generally slow-moving?', dosha: 'kapha' },
  { text: 'Do you have a deep, steady voice?', dosha: 'kapha' },
  { text: 'Are you slow to anger?', dosha: 'kapha' },
  { text: 'Do you tend to sleep heavily and for long hours?', dosha: 'kapha' },
  { text: 'Do you prefer warm and dry environments?', dosha: 'kapha' },
  { text: 'Are you compassionate and forgiving?', dosha: 'kapha' },
  { text: 'Do you have strong resistance to illness?', dosha: 'kapha' },
  { text: 'Are you prone to lethargy or laziness?', dosha: 'kapha' },
  { text: 'Do you prefer routine and stability?', dosha: 'kapha' },
  { text: 'Do you have a good memory?', dosha: 'kapha' },
  { text: 'Are you emotionally steady and resilient?', dosha: 'kapha' },

  { text: 'Do you experience dryness in your body?', dosha: 'vata' },
  { text: 'Are you often easily distracted?', dosha: 'vata' },
  { text: 'Do you experience feelings of fear?', dosha: 'vata' },
  { text: 'Do you have difficulty focusing or concentrating?', dosha: 'vata' },
  { text: 'Are you prone to constipation?', dosha: 'vata' },
  { text: 'Do you experience cracking in your joints?', dosha: 'vata' },

  { text: 'Do you experience heartburn or acid reflux?', dosha: 'pitta' },
  { text: 'Are you highly organized and methodical?', dosha: 'pitta' },
  { text: 'Do you tend to be critical or judgmental?', dosha: 'pitta' },
  { text: 'Do you experience skin rashes or inflammation?', dosha: 'pitta' },
  { text: 'Do you have a quick temper?', dosha: 'pitta' },
  { text: 'Do you enjoy challenges and problem-solving?', dosha: 'pitta' },

  { text: 'Do you feel a strong sense of loyalty?', dosha: 'kapha' },
  { text: 'Are you generally forgiving and tolerant?', dosha: 'kapha' },
  { text: 'Do you have thick, lustrous hair?', dosha: 'kapha' },
  { text: 'Are you naturally empathetic?', dosha: 'kapha' },
  { text: 'Do you have a tendency to oversleep?', dosha: 'kapha' },
  { text: 'Do you prefer to avoid conflict?', dosha: 'kapha' },
];

const Questionnaire = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scores = { vata: 0, pitta: 0, kapha: 0 };

    answers.forEach((answer, index) => {
      if (answer === 'yes') {
        scores[questions[index].dosha]++;
      }
    });

    const total = scores.vata + scores.pitta + scores.kapha;
    const finalScores = {
      vata: (scores.vata / total) * 100,
      pitta: (scores.pitta / total) * 100,
      kapha: (scores.kapha / total) * 100,
    };

    onSubmit(finalScores);
  };

  return (
    <div className="questionnaire-container">
      <form onSubmit={handleSubmit}>
        <div className="question-container">
          <p>{questions[currentQuestionIndex].text}</p>
          <label>
            <input
              type="radio"
              value="yes"
              checked={answers[currentQuestionIndex] === 'yes'}
              onChange={() => handleChange('yes')}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={answers[currentQuestionIndex] === 'no'}
              onChange={() => handleChange('no')}
            />
            No
          </label>
        </div>

        <div className="navigation-buttons">
          <button type="button" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
