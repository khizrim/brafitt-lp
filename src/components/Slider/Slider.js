import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination, Mousewheel, Keyboard } from 'swiper';

import 'swiper/swiper-bundle.css';
import './Slider.css';

import before from '../../images/before-1.jpg';
import after from '../../images/after-1.png';

SwiperCore.use([Pagination, Mousewheel, Keyboard]);

export default function Slider() {
  return (
    <>
      <Swiper
        cssMode
        pagination
        mousewheel
        keyboard
        centeredSlides
        spaceBetween={20}
        className="slider"
      >
        <SwiperSlide>
          <div className="slide">
            <img className="slide__image" src={before} alt="До" />
            <img className="slide__image" src={after} alt="После" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img className="slide__image" src={before} alt="До" />
            <img className="slide__image" src={after} alt="После" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img className="slide__image" src={before} alt="До" />
            <img className="slide__image" src={after} alt="После" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
