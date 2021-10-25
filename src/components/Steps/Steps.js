/* eslint-disable react/prop-types */
import React from 'react';

import './Steps.css';

import Step from '../Step/Step';
import Features from '../Features/Features';
import { safety } from '../../utils/constants';

const Steps = ({ data }) => (
  <section className="steps">
    <div className="steps__container">
      <h2 className="steps__title">Как проходит консультация брафиттера</h2>
      <div className="steps__items">
        {data.steps.slice(0, 3).map((step) => (
          <Step key={step.id} image={step.image} text={step.text} />
        ))}
      </div>
      <Features data={safety} withBg />
      <div className="steps__items">
        {data.steps.slice(3, 6).map((step) => (
          <Step key={step.id} image={step.image} text={step.text} />
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
