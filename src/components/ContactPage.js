import React from 'react';
import './style.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

class ContactPage extends React.Component {
  
  componentDidMount() {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }

  render() {
    return (
      <div className="container">
        <span className="big-circle"></span>
        <img src="shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>

            <div className="info">
              <div className="information">
                <img src="location.png" className="icon" alt="" />
                <p>34 market street, Chandigarh</p>
              </div>
              <div className="information">
                <img src="email.png" className="icon" alt="" />
                <p>learnera@gmail.com</p>
              </div>
              <div className="information">
                <img src="phone.png" className="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="https://www.facebook.com">
                  <FaFacebookF />
                </a>
                <a href="https://www.twitter.com">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="https://formspree.io/charvi236.be22@chitkara.edu.in" method="POST" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" required />
                <label htmlFor="name">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" required />
                <label htmlFor="email">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" required />
                <label htmlFor="phone">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" required></textarea>
                <label htmlFor="message">Message</label>
                <span>Message</span>
              </div>
              <input type="hidden" name="_subject" value="New submission!" />
              <input type="hidden" name="_next" value="thank-you-page-url" /> {/* Redirect URL after submission */}
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
