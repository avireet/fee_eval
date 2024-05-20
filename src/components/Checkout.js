import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

function Checkout({ location }) {
  const { cartItems } = location?.state || { cartItems: [] };
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [paymentIntent, setPaymentIntent] = useState(null);

  useEffect(() => {
    if (cartItems.length > 0) {
      fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: calculateTotal(cartItems) }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch payment intent');
          }
          return response.json();
        })
        .then(data => {
          if (data.clientSecret) {
            setPaymentIntent(data.clientSecret);
          } else {
            throw new Error('Invalid payment intent response');
          }
        })
        .catch(error => {
          console.error('Error creating payment intent:', error);
          setError('Failed to create payment intent');
        });
    }
  }, [cartItems]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(paymentIntent, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        navigate('/success');
      }
    }
  };

  const calculateTotal = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.price;
    });
    return total * 100;
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '400px' }}>
      <h1 style={{ marginBottom: '20px' }}>Checkout</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              {item.packageName} - ${item.price}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <CardElement style={{ base: { fontSize: '16px' } }} />
          <button type="submit" disabled={!stripe} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
            Pay Now
          </button>
          {error && <div style={{ marginTop: '10px', color: 'red' }}>{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Checkout;
