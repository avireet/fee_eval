import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ location }) => {
  const { cartItems } = location.state || { cartItems: [] };
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [error, setError] = useState(null);
  const [paymentIntent, setPaymentIntent] = useState(null);

  useEffect(() => {
    // Create a payment intent on the backend
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: calculateTotal(cartItems) }), // Send total amount to backend
    })
    .then(response => response.json())
    .then(data => setPaymentIntent(data.clientSecret))
    .catch(error => console.error('Error creating payment intent:', error));
  }, [cartItems]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Confirm the payment
    const result = await stripe.confirmCardPayment(paymentIntent, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        // Payment succeeded
        console.log('Payment succeeded:', result.paymentIntent);
        // Add logic here for order completion, redirect, etc.
        navigate('/success'); // Redirect to success page after successful payment
      }
    }
  };

  const calculateTotal = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.price;
    });
    return total * 100; // Convert to cents (Stripe requires amount in cents)
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.packageName} - ${item.price}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe}>
            Pay Now
          </button>
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
