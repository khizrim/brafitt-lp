/* eslint-disable react/prop-types */
import React from 'react';

import './Feature.css';

const Feature = ({ icon, title, caption }) => (
  <div className="feature">
    <img className="feature__icon" src={icon} alt={title} />
    <h3 className="feature__title">{title}</h3>
    <p className="feature__caption">{caption}</p>
  </div>
);

export default Feature;
