import React from 'react';

import './Countries.css';

import ukFlag from '../../images/uk.png';
import usaFlag from '../../images/usa.png';
import polandFlag from '../../images/poland.png';

const Countries = () => (
  <section className="countries">
    <div className="countries__container">
      <h2 className="countries__title">Лучшее нижнее бельё</h2>
      <p className="countries__subtitle">из Великобритании, США и Польши</p>
      <div className="countries__items">
        <img className="countries_item" src={ukFlag} alt="Великобритания" />
        <img className="countries_item" src={usaFlag} alt="США" />
        <img className="countries_item" src={polandFlag} alt="Польша" />
      </div>
    </div>
  </section>
);

export default Countries;
