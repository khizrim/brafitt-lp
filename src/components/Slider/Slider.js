import React from 'react';

import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './Slider.css';

import before from '../../images/before-1.jpg';
import after from '../../images/after-1.png';

const Slider = () => (
  <div className="slider">
    <Carousel
      plugins={[
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: (
              <button
                className="slider__button slider__button_side_left"
                type="button"
                aria-label="Предыдущий"
              />
            ),
            arrowLeftDisabled: (
              <button
                className="slider__button slider__button_disabled slider__button_side_left"
                type="button"
                aria-label="Предыдущий"
              />
            ),
            arrowRight: (
              <button
                className="slider__button slider__button_side_right"
                type="button"
                aria-label="Следующий"
              />
            ),
            arrowRightDisabled: (
              <button
                className="slider__button slider__button_disabled slider__button_side_right"
                type="button"
                aria-label="Следующий"
              />
            ),
            addArrowClickHandler: true,
          },
        },
        'infinite',
        'fastSwipe',
      ]}
    >
      <div className="slider__group">
        <img className="slider__image" src={before} alt="До" />
        <img className="slider__image" src={after} alt="После" />
      </div>
      <div className="slider__group">
        <img className="slider__image" src={before} alt="До" />
        <img className="slider__image" src={after} alt="После" />
      </div>
      <div className="slider__group">
        <img className="slider__image" src={before} alt="До" />
        <img className="slider__image" src={after} alt="После" />
      </div>
    </Carousel>
  </div>
);

export default Slider;
