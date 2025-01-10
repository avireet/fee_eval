import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css'; // Import corresponding CSS file

const Navbar = () => {
  return (
    <div className="page1">
      <div id="navbar">
        <a id="logo" href="#" style={{marginLeft: '10px'}}>Learnera</a>
        <Link to="/home" style={{marginLeft: '340px'}}>Home</Link>
        <Link to="/packages" >Packages</Link>
        <Link to="/contact">Contact</Link>
        <a href="/index(2).html">Tutorial</a>
        <Link to='/signin' style={{marginLeft: '550px', fontSize:'22px'}}>
           <i className="fa-solid fa-user" ></i>
         </Link>
      </div>
    </div>
  );
}

export default Navbar;

