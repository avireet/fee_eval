import React from 'react';
import './styles.css';

const VisionComponent = () => {
  return (
    <section>
      <div className="vision">
        <div className="visionl">
          <span>OUR VISION</span><br /><br />
          <p>
            As a mission-driven organization,
            we're relentlessly pursuing our<br /> vision of a world where every learner
            can access education to<br /> unlock their potential, without the barriers of cost or location.
          </p>
        </div>
        <div className="visionr">
          <img src="https://www.edx.org/cdn-cgi/image/width=undefined,height=undefined,format=webp,quality=75/images/brand/globe-dark-lg.png" alt="Globe" />
        </div>
      </div>
    </section>
  );
};

export default VisionComponent;


