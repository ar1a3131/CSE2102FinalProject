import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import getQuestionsForTopic from './Question';
import Result from './Result';

import './QuizStyle.css'; 

const QuizContainer = ({ topic }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(5).fill(null));
    const [showResult, setShowResult] = useState(false);
    const questions = getQuestionsForTopic(topic);
    const navigate = useNavigate();

    const handleOptionSelect = (option) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = option;
        setAnswers(newAnswers);

        handleNextQuestion();
    };

    const handleReset = () => {
        setAnswers(Array(5).fill(null));
        setCurrentQuestionIndex(0);
        setShowResult(false);

        navigate('/topic-selection');
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
    
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return <Result answers={answers} questions={questions} onReset={handleReset} />;
    }

    if (!questions.length) return <div>No questions available.</div>;

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="page-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/panjshir.jpg)` }} >

            <div className="quiz-container" >

                Question {currentQuestionIndex + 1}/{questions.length}
                <div className="question-text">{currentQuestion.questionText}</div>
            </div>

            <div className="options-container">
                {currentQuestion.options.map((option, index) => (
                    <button key={index} 
                        onClick={() => handleOptionSelect(option)} 
                        className={`option ${answers[currentQuestionIndex] === option ? 'selected' : ''}`}>
                        {option}
                    </button>
                ))}
            </div>



            <div className="navigation-buttons">
                <button  onClick={handleNextQuestion}>Next</button>
                <button  onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default QuizContainer;
