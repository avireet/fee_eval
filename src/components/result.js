import React, { useState } from 'react';
import './styles.css';


function Result() {
  const [imageSrc, setImageSrc] = useState('cbsel.png');

  return (
    <section>
      <div className="result-page">
        <div className="result-heading">
          <p>Inspired students. Inspired result<span id="element"></span></p>
        </div>
        <div className="result-desc">
          <p>Our results reflect the passion, hard work, and efforts of our students and teachers.</p>
        </div>
        <div className="result-button">
          <div className="b1">
            <button onClick={() => setImageSrc('cbsel.png')}>CBSE</button>
          </div>
          <div className="b1">
            <button onClick={() => setImageSrc('jeel.jpg')}>JEE</button>
          </div>
          <div className="b1">
            <button onClick={() => setImageSrc('neetl.png')}>NEET</button>
          </div>
        </div>
        <div className="picture">
          <img id="myImage" src={imageSrc} alt="Result" />
        </div>
      </div>
    </section>
  );
}

export default Result;

