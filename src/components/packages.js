import React from 'react';
import './packages.css';
import FooterComponent from './footer';
import Cart from './cart'; // Import the Cart component

class EduPackages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [], // Initialize cart items array
    };
  }

  // Method to handle adding items to the cart
  handleAddToCart = (packageName, price) => {
    const newItem = { packageName, price };
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, newItem],
    }));
  };

  // Method to handle removing items from the cart
  handleRemoveFromCart = (index) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item, i) => i !== index),
    }));
  };

  render() {
    return (
      <div className="page1">
        <div className="video">
          <video src="va.mp4" autoPlay muted loop></video>
        </div>

        <div className="packages">
          <div className="text-box"><h1>EduPackages</h1></div>
          <div className="full">
            {/* Package 1 */}
            <div className="containerpack">
              <div className="cardpack">
                <div className="front">
                  <video className="vid" src="1.mp4" autoPlay muted loop></video>
                </div>
                <div className="back">
                  <div className="contentpack">
                    <h2>STARTER PACKAGE</h2><br /><hr /><br />
                    <ul>
                      <b>Highlights:</b>
                      <li>Access to 10 basic courses</li>
                      <li>Weekly quizzes</li>
                      <li>24/7 email support</li>
                      <li>Certificate of completion</li>
                      <li>Community forum access</li>
                    </ul>
                    <button className='buy-now-button' onClick={() => this.handleAddToCart('STARTER PACKAGE', 29.99)}>BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="containerpack">
              <div className="cardpack">
                <div className="front">
                  <video className="vid" src="2.mp4" autoPlay muted loop></video>
                </div>
                <div className="back">
                  <div className="contentpack">
                    <h2>ADVANCED PACKAGE</h2><br /><hr /><br />
                    <ul>
                      <b>Highlights:</b>
                      <li>Access to 20 advanced courses</li>
                      <li>Monthly assessments</li>
                      <li>Live webinars</li>
                      <li>Priority email support</li>
                      <li>Interactive projects</li>
                    </ul>
                    <button className='buy-now-button' onClick={() => this.handleAddToCart('ADVANCED PACKAGE', 49.99)}>BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="containerpack">
              <div className="cardpack">
                <div className="front">
                  <video className="vid" src="3.mp4" autoPlay muted loop></video>
                </div>
                <div className="back">
                  <div className="contentpack">
                    <h2>PREMIUM PACKAGE</h2><br /><hr /><br />
                    <ul>
                      <b>Highlights:</b>
                      <li>Unlimited access to all courses</li>
                      <li>Personal mentorship</li>
                      <li>Exclusive events</li>
                      <li>24/7 phone support</li>
                      <li>Job placement assistance</li>
                    </ul>
                    <button className='buy-now-button' onClick={() => this.handleAddToCart('PREMIUM PACKAGE', 99.99)}>BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional packages can be added similarly */}
          </div>
        </div>

        {/* Render Cart component and pass cartItems state and removal function */}
        <Cart items={this.state.cartItems} removeFromCart={this.handleRemoveFromCart}/>

        
      </div>
    );
  }
}

export default EduPackages;
