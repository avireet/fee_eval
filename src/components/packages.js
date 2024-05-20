import React from 'react';
import { useNavigate } from 'react-router-dom';
import './packages.css';
import Cart from './cart';

class EduPackages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  handleAddToCart = (packageName, price) => {
    const { cartItems } = this.state;
    const itemExists = cartItems.some(item => item.packageName === packageName);

    if (!itemExists) {
      const newItem = { packageName, price };
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, newItem],
      }));
    } else {
      alert(`${packageName} is already in the cart.`);
    }
  };

  handleRemoveFromCart = (index) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item, i) => i !== index),
    }));
  };

  handleCheckout = () => {
    const { cartItems } = this.state;
    if (cartItems.length > 0) {
      this.props.navigate('/checkout', { state: { cartItems } });
    } else {
      alert('Your cart is empty. Please add a package to proceed.');
    }
  };

  render() {
    const { cartItems } = this.state;
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

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

          </div>
        </div>

        <Cart items={this.state.cartItems} removeFromCart={this.handleRemoveFromCart} />
        <div className="cart-total">
          <h3>Total: ${totalPrice}</h3>
        </div>
        {cartItems.length > 0 && (
          <button className="checkout-button" onClick={this.handleCheckout}>PROCEED TO CHECKOUT</button>
        )}
      </div>
    );
  }
}

export default (props) => {
  const navigate = useNavigate();
  return <EduPackages {...props} navigate={navigate} />;
};
