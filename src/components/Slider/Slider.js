import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import 'swiper/swiper-bundle.css';
import './Slider.css';

import before from '../../images/before-1.jpg';
import after from '../../images/after-1.png';

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
// /* eslint-disable no-console */
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';

// // import before from '../../images/before-1.jpg';
// // import after from '../../images/after-1.png';

// SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

// const Slider = () => (
//   <>
//     <Swiper slidesPerView={1}>
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 5</SwiperSlide>
//       <SwiperSlide>Slide 6</SwiperSlide>
//       <SwiperSlide>Slide 7</SwiperSlide>
//       <SwiperSlide>Slide 8</SwiperSlide>
//       <SwiperSlide>Slide 9</SwiperSlide>
//     </Swiper>
//   </>
//   // <Swiper
//   //   // cssMode
//   //   navigation
//   //   // pagination
//   //   // mousewheel
//   //   // keyboard
//   //   // className="slider"
//   //   // spaceBetween={50}
//   //   // slidesPerView={1}
//   //   // centeredSlides
//   // >
//   //   <SwiperSlide>
//   //     <div className="slide">
//   //       <img className="slide__image" src={before} alt="До" />
//   //       <img className="slide__image" src={after} alt="После" />
//   //     </div>
//   //   </SwiperSlide>
//   //   <SwiperSlide>
//   //     <div className="slide">
//   //       <img className="slide__image" src={before} alt="До" />
//   //       <img className="slide__image" src={after} alt="После" />
//   //     </div>
//   //   </SwiperSlide>
//   // </Swiper>
// );

// export default Slider;
