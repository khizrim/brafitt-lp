/* eslint-disable react/prop-types */
import React from 'react';

import './Quote.css';

import quotationMark from '../../images/quotation-mark.svg';

const Quote = ({ data }) => (
  <section className="quote">
    <div className="quote__container">
      <img className="quote__icon" src={quotationMark} alt="Цитата" />
      <p className="quote__text">{data.quote}</p>
    </div>
  </section>
);

export default Quote;
