import React, { useState, useEffect } from 'react';
import './styles.css';

const StudentParentSection = () => {
  const [enrolledCount, setEnrolledCount] = useState(0);

  useEffect(() => {
    // Simulate fetching data from an API or any other source
    const fetchData = async () => {
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Simulated data
      const data = {
        students: {
          enrolled: 124 // Number of downloads
        }
      };
      setEnrolledCount(data.students.enrolled);
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <section>
      <div className="page3">
        <div className="heading">
          <p>Our students and parents love us</p>
        </div>
        
        <div className="boxes">
          <div className="bb">
            <img src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic_downloads.svg" alt="Downloads" />
            <h2 id="careerCount">{enrolledCount}</h2>
            <p>Downloads</p>
          </div>

          <div className="bb">
            <img src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic-app rating.svg" alt="App Rating" />
            <h2>4.7 Star</h2>
            <p>App Rating</p>
          </div>

          <div className="bb">
            <img src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic-cities.svg" alt="Cities" />
            <h2>1701+ Cities</h2>
            <p>worldwide</p>
          </div>

          <div className="bb">
            <img src="https://cdn1.byjus.com/byjusweb/img/home/svg/ic-time.svg" alt="Time" />
            <h2>71 mins avg.</h2>
            <p>time spent daily</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentParentSection;

