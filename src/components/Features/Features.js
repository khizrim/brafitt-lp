/* eslint-disable react/prop-types */
import React from 'react';
import Feature from '../Feature/Feature';

import './Features.css';

const Features = ({ data, withBg }) => (
  <section className={`features ${withBg && 'features_with-bg'}`}>
    <div className="features__container">
      <h2 className="features__title">{data.title}</h2>
      <p className="features__subtitle">{data.subtitle}</p>
      <div className="features__items">
        {data.features.map((feature) => (
          <Feature
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            caption={feature.caption}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
