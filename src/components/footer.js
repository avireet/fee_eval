import React from 'react';

const FooterComponent = () => {
  return (
    <footer>
      <div>
        <section className="footer-about">
          <div>
            <p style={{ fontFamily: 'cursive', fontSize: '34px', color: '#14125c' }}>Learnera</p>
            <p>Learnera is India's one of the best education platforms, known for creating one of the most sought after learning apps. With our unique learning platform and immensely talented best teachers, Learnera offers a highly personalised learning experience for 1st to 12th grades across CBSE and ICSE Boards. Our hands-on teaching methodology has made Learnera the primary choice of aspirants for competitive exams like IIT JEE, NEET, KVPY, NTSE, IMO, and IEO. Also, Learnera aims to make education accessible to all parts of the country with our affordable online classes.</p>
            <p style={{ color: '#282e3e', fontWeight: 700, marginTop: '60px' }}>Download app from</p>
            <span>
              <a href="https://play.google.com/store/apps/details?id=com.semicolon.learnera&hl=en&gl=US"><img src="playst.png" alt="Google Play Store" /></a>
              <a href=""><img src="applest.png" alt="App Store" /></a>
            </span>
          </div>
        </section>
        <section className="footer-gen">
          <div>
            <h3>General</h3>
            <a href="edu.html">Home</a><br />
            <a href="edupack.html">Packages</a><br />
            <a href="contact.html">Contact</a><br />
          </div>
        </section>
        <section className="footer-resources">
          <h3>Legal</h3>
          <a href="#">Terms & Conditions</a><br />
          <a href="#">Privacy Policy</a><br />
          <br />
        </section>
        <hr />
        <div className="all">
          <span style={{ paddingLeft: '50px' }}>&copy; 2024 All rights reserved.</span>
          <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" style={{ marginLeft: '1050px' }} ></i></a>
          <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
