/* eslint-disable react/prop-types */
import React from 'react';

import './Step.css';

const Step = ({ image, text }) => (
  <div className="step">
    <img className="step__image" src={image} alt={text} />
    <p className="steps__text">{text}</p>
  </div>
);

export default Step;
