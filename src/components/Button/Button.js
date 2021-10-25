/* eslint-disable react/prop-types */
import React from 'react';

import './Button.css';

const Button = ({ type, children }) => (
  <button
    className={`button ${type === 'primary' ? 'button_type_primary' : 'button_type_secondary'}`}
    type="button"
  >
    {children}
  </button>
);

export default Button;
