import React, { useState } from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home" id="logo" style={{ marginLeft: '10px' }}>Learnera</Link> {/* Link to home */}
    </div>
  );
}

function LeftSide() {
  return (
    <div className="left-side">
      <p>The best way to study<br />Sign up for Free</p>
      <ul>
        <a>✔️LIVE Classes</a><br />
        <a>✔️Best Teachers</a><br />
        <a>✔️Free Quiz</a>
        <p style={{ color: 'white', marginTop: '450px', fontWeight: '550',fontSize:'30px' }}>Learnera</p>
      </ul>
    </div>
  );
}

function RightSide() {
  return (
    <div className="right-side">
      <div className="form-container">
        <h2 style={{ margin: '10px', fontSize: '30px', fontWeight: '700' }}>New to Learnera</h2><br />
        <div className="form-container2">
          <form action="#" style={{ fontWeight: '700' }}>
            Full Name<input className="ak" type="text" id="fullname" name="fullname" placeholder="Full Name" required />
            Mobile Number<input className="ak" type="text" id="mobile" name="mobile" placeholder="Mobile Number" required />
            Email<input className="ak" type="email" id="email" name="email" placeholder="Email ID" required />
            <label htmlFor="option1" style={{ fontWeight: '300', fontSize: '14px' }}>
              <input type="checkbox" id="option1" name="option1" value="Option 1" style={{ verticalAlign: 'top' }} required /> I accept Learnera's <b>Terms of Service</b> and <b>Privacy Policy</b>
            </label>
            <button type="submit" style={{ backgroundColor: '#C8BFE7', fontFamily: 'mukta', fontWeight: '600', padding: '5px 45px', fontSize: '20px' }}>Sign up</button>
          </form>
          <h3 style={{ textAlign: 'center' }}>OR</h3>
          <a href="signin.html">
            <button type="submit" style={{ color: '#3d4457', width: '350px', backgroundColor: '#F6F7FB', fontFamily: 'mukta', fontWeight: '600', padding: '10px 26px', fontSize: '18px', border: 'solid 1px #C8BFE7' }}>Already have an account? Log in</button>
          </a>
        </div>
      </div>
    </div>
  );
}


function Signup() {
  return (
    <div>
      <Navbar />
      <div className="containersign">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default Signup;
