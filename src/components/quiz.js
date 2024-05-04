import React from 'react';
import './styles.css'; 

const Quiz = () => {
  return (
    <section>
      <div className="quiz">
        <div className="quizh">
          <h2>TEST YOUR</h2><br />
        </div>
        <div className="quizh">
          <h2>KNOWLEDGE</h2><br />
        </div>
        
        {/* Button to take the quiz */}
        <div className="quizb">
          <a href="quiz.html"><button>TAKE QUIZ</button></a>
        </div>
      </div>
    </section>
  );
}

export default Quiz;