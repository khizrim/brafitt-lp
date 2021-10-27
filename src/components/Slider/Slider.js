import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import 'swiper/swiper-bundle.css';
import './Slider.css';

import before1 from '../../images/before-1.jpg';
import after1 from '../../images/after-1.jpg';
import before2 from '../../images/before-2.jpg';
import after2 from '../../images/after-2.jpg';
import before3 from '../../images/before-3.jpg';
import after3 from '../../images/after-3.jpg';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Slider() {
  return (
    <>
      <Swiper
        cssMode
        navigation
        pagination
        mousewheel
        keyboard
        centeredSlides
        spaceBetween={20}
        className="slider"
      >
        <SwiperSlide>
          <div className="slide">
            <img className="slide__image" src={before1} alt="До" />
            <img className="slide__image" src={after1} alt="После" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img className="slide__image" src={before2} alt="До" />
            <img className="slide__image" src={after2} alt="После" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img className="slide__image" src={before3} alt="До" />
            <img className="slide__image" src={after3} alt="После" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
