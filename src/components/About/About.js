import React from 'react';

import './About.css';

import brafitter from '../../images/brafitter.png';

import Button from '../Button/Button';

const About = () => (
  <section className="about">
    <div className="about__container">
      <div className="about__text">
        <h3 className="about__title">
          Ниса Сантемирова — <br /> первый сертифицированный брафиттер в Дагестане
        </h3>
        <p className="about__body">
          Она определит точные размеры, диагностирует проблемы, связанные с посадкой, и рекомендует
          конкретные модели, которые подходят под ваши размеры, форму и потребности.
        </p>
        <div className="about__cta">
          <Button type="primary">Записаться на брафиттинг</Button>
          <Button type="secondary">Читать отзывы</Button>
        </div>
      </div>
      <div className="about__image-container">
        <img className="about__image" src={brafitter} alt="Ниса Сантемирова" />
      </div>
    </div>
  </section>
);

export default About;
