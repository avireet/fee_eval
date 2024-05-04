import React, { useState } from 'react';
import './styles.css';
import Dropdown from './Dropdown';

const FAQ = () => {
  const [dropdownVisible, setDropdownVisible] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false
  });

  // Function to toggle the visibility of dropdown content
  const toggleDropdown = (item) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [item]: !prevState[item]
    }));
  };

  return (
    <section>
      <div className="faq">
        <div className="faq-heading">
          <p>Do You Have Questions?</p>
        </div>
        <div className="faq-h">
          <p>We Have Answers (well most of the times!)</p>
        </div>
        <div className="faq-container">
          <div className="faq-item">
            <button className="dropdown-btn" onClick={() => toggleDropdown('item1')}>
              Can I access Learnera courses on my mobile device?
            </button>
            {/* Conditionally render dropdown content based on state */}
            <Dropdown isVisible={dropdownVisible.item1}>
              <p>Yes, Learnera offers a mobile app for iOS and Android devices, allowing you to access courses anytime, anywhere.</p>
            </Dropdown>
          
          </div>

          <div className="faq-item">
            <button className="dropdown-btn" onClick={() => toggleDropdown('item2')}>Are Learnera courses self-paced?</button>
            <Dropdown isVisible={dropdownVisible.item2}>
              <p>Yes, Learnera offers a mobile app for iOS and Android devices, allowing you to access courses anytime, anywhere.</p>
            </Dropdown>
          
            <div className="dropdown-content">
              <p>Yes, most Learnera courses are self-paced, allowing you to study according to your own schedule and pace.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="dropdown-btn" onClick={() => toggleDropdown('item3')}>Does Learnera offer certificates upon course completion?</button>
            <Dropdown isVisible={dropdownVisible.item3}>
              <p>Yes, Learnera offers a mobile app for iOS and Android devices, allowing you to access courses anytime, anywhere.</p>
            </Dropdown>
          
            <div className="dropdown-content">
              <p>Yes, Learnera provides certificates of completion for many courses. You can download and print your certificate from your learner dashboard upon finishing a course.</p>
            </div>
          </div>

          <div className="faq-item" style={{marginBottom:'50px'}}>
            <button className="dropdown-btn"onClick={() => toggleDropdown('item4')}>Is technical support available if I encounter issues with the website?</button>
            <Dropdown isVisible={dropdownVisible.item4}>
              <p>Yes, Learnera offers a mobile app for iOS and Android devices, allowing you to access courses anytime, anywhere.</p>
            </Dropdown>
          
            <div className="dropdown-content">
              <p>Yes, Learnera provides technical support to help resolve any issues you encounter while using the website. Contact our support team at support@learnera.com.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
