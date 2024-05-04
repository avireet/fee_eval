import React from 'react';
import './packages.css';
const Cart = ({ items, removeFromCart }) => {
  return (
    <div className='cartbox'>
      <p style={{marginTop:'60px',marginLeft:'40px',fontWeight:'700',fontSize:'25px'}}>CART</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.packageName} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
