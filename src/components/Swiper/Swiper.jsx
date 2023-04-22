import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import src1 from '../../assets/img1-carousel.png';
import src2 from '../../assets/img2-carousel.png';
import src3 from '../../assets/img3-carousel.png';
import src4 from '../../assets/img4-carousel.png';
import './styles.css';


export default class Carroussel extends React.Component {
  render() {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        // autoplay={{ delay: 1000 }}
        direction={'horizontal'}
        loop={true}
        slidesPerView={'1'}
        // reverseDirection={true}
        pagination={{ clickable: true }}
        className="swiper-container">
        <SwiperSlide className="slide-item">
          <img src={src1} alt="familia1" />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={src2} alt="familia2" />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={src3} alt="familia3" />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src={src4} alt="familia3" />
        </SwiperSlide>
      </Swiper>
    )
  }
}

