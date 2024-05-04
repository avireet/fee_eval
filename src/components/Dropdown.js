import React from 'react';

const Dropdown = ({ isVisible, children }) => {
  return (
    <div className="dropdown-content" style={{ display: isVisible ? 'block' : 'none' }}>
      {children}
    </div>
  );
}

export default Dropdown;
