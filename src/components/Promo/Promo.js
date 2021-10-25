/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button/Button';

import './Promo.css';

const Promo = ({ data, withBg }) => (
  <section className={`promo ${(withBg && 'promo_with-bg') || ''}`}>
    <div className="promo__container">
      <h2 className="promo__title">{data.title}</h2>
      <p className="promo__subtitle">{data.subtitle}</p>
      {data.cta && <Button type="primary">{data.cta}</Button>}
    </div>
  </section>
);

export default Promo;
