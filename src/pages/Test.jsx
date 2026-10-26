import { useState, useEffect } from "react";
import { questions } from "../data/questions";
import {useNavigate} from "react-router-dom";

import "./test.css";

export default function Test() {

  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [timeLeft, setTimeLeft] = useState(20 * 60);

  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const question = questions[currentQuestion];

  // OPTION CLICK
  const handleOptionSelect = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [question.id]: option,
    });
  };

  //Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="test-page">
      <div className="test-header">
        <p className="header-text">Software Engineer - Mock Test</p>
        <div className="question-header">
          <div className="question-numbers">
            {questions.map((q, index) => (
              <button
                key={q.id}
                className={currentQuestion === index ? "active-question" : ""}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="timer">
            ⏱️{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>
      </div>
      <div className="test-container">
        {/* LEFT QUESTION AREA */}
        <div className="question-section">
          {/* QUESTION */}
          <h3>Question {question.id}</h3>
          <div className="question-card">
            <p>{question.question}</p>
          </div>
        </div>

        {/* RIGHT OPTIONS */}
        <div className="answer-section">
          <h3>Answer :</h3>

          {question.options.map((option, index) => (
            <div
              key={index}
              className={
                selectedAnswers[question.id] === option
                  ? "option selected"
                  : "option"
              }
              onClick={() => handleOptionSelect(option)}
            >
              <input
                type="radio"
                checked={selectedAnswers[question.id] === option}
                readOnly
              />

              <p>{option}</p>
            </div>
          ))}

          {/* FOOTER BUTTONS */}
          <div className="footer-buttons">
            <button className="finish-btn" onClick={()=> navigate ("/CodingTest")}> Finish MCQ </button>
            <div className="pagination-btn">
              <button
                className="pre-btn"
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0}
              >
                {" "}
                Previous
              </button>
              <button
                className="next-btn"
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                disabled={currentQuestion === questions.length - 1}
              >
                {" "}
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
