import React from 'react';
import './styles.css';

const OurTeachersComponent = () => {
  return (
    <section>
      <div className="our-teachers">
        <div className="teacher-heading1">
          <p>All teachers teach</p>
        </div>
        <div className="teacher-heading2">
          <p>Our teachers inspire</p>
        </div>
        <div className="spec">
          <div className="t">
            <div className="tleft">
              <img src="https://www.vedantu.com/cdn/images/new-home-page/icons/graduation-cap-icon.svg" alt="Icon" />
            </div>
            <div className="tright">
              <p>From Top-tier colleges with many years of experience</p>
            </div>
          </div>
          <div className="t">
            <div className="tleft">
              <img src="https://www.vedantu.com/cdn/images/new-home-page/icons/book-apple-icon.svg" alt="Icon" />
            </div>
            <div className="tright">
              <p>Specially-trained teachers to bring out the best in every student.</p>
            </div>
          </div>
          <div className="t">
            <div className="tleft">
              <img src="https://www.vedantu.com/cdn/images/new-home-page/icons/hourglass-icon.svg" alt="Icon" />
            </div>
            <div className="tright">
              <p>Teaching experience of over 4.5 crore hours to 10 lakh students in 1000+ cities in 57 countries.</p>
            </div>
          </div>
        </div>
        <div className="mentors">
          <div className="card" style={{ boxShadow: '0 2px 8px 1px rgba(0,0,0,0)', border: 'none' }}>
            <div className="card-content">
              <a href="https://www.linkedin.com/in/dhruvdudeja21011993/">
                <img src="https://www.spencerclarkegroup.co.uk/uploads/5005001.png" style={{ borderRadius: '50%', width: '300px', height: '300px', textAlign: 'center' }} alt="Mentor" />
              </a>
              <h5 className="card-title" style={{ textAlign: 'center', marginLeft: '-20px' }}>Dhruv</h5>
              <p className="card-text" style={{ textAlign: 'center' }}>15+ years experience</p>
            </div>
          </div>
          <div className="card" style={{ boxShadow: '0 2px 8px 1px rgba(0,0,0,0)', border: 'none' }}>
            <div className="card-content">
              <a href="https://www.linkedin.com/in/alicia-fernandes-9222962a7/">
                <img src="https://images.squarespace-cdn.com/content/v1/5dc5d641498834108f7c46a5/564a726c-ec6a-470b-9769-1c5045358424/What%27s+Your+Why+Hero.jpg?format=1500w" style={{ borderRadius: '50%', width: '300px', height: '300px', textAlign: 'center' }} alt="Mentor" />
              </a>
              <h5 className="card-title" style={{ textAlign: 'center' }}>Alicia</h5>
              <p className="card-text" style={{ textAlign: 'center' }}>9+ years experience</p>
            </div>
          </div>
          <div className="card" style={{ boxShadow: '0 2px 8px 1px rgba(0,0,0,0)', border: 'none' }}>
            <div className="card-content">
              <a href="https://www.linkedin.com/in/caroline-simon-455916111/">
                <img src="https://thedigiteachers.com/wp-content/uploads/2020/10/Teaching.png" style={{ borderRadius: '50%', textAlign: 'center', width: '300px', height: '300px' }} alt="Mentor" />
              </a>
              <h5 className="card-title" style={{ textAlign: 'center' }}>Caroline</h5>
              <p className="card-text" style={{ marginBottom: '20px', textAlign: 'center', paddingBottom: '30px' }}>11+ years experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeachersComponent;

