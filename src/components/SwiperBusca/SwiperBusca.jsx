import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import src1 from '../../assets/img-opcao1.png';
import src2 from '../../assets/img-opcao2.png';
import src3 from '../../assets/img-opcao3.png';
import './styles.css';
import BaseCardBusca from '../BaseCardBusca';


export default class CarrousselBusca extends React.Component {
  render() {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        // autoplay={{ delay: 2000 }}
        direction={'horizontal'}
        loop={true}
        slidesPerView={'1'}
        reverseDirection={true}
        pagination={{ clickable: true }}
        className="swiper-container">
        <SwiperSlide className="slide-item">
          <BaseCardBusca
            src={src1}
            name='Família Schwarz'
            adress='Augsburg Strasse'
            cep='Berlin, Alemanha'
          />
          <BaseCardBusca
            src={src2}
            name='Família Schneider'
            adress='Orderberger Strasse'
            cep='Potsdam, Alemanha'
          />
          <BaseCardBusca
            src={src3}
            name='Família Diel'
            adress='Schönhauser Strasse'
            cep='Berlin, Alemanha'
          />
          <BaseCardBusca
            src={src1}
            name='Família Schwarz'
            adress='Augsburg Strasse'
            cep='Berlin, Alemanha'
          />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <BaseCardBusca
            src={src1}
            name='Família Schwarz'
            adress='Augsburg Strasse'
            cep='Berlin, Alemanha'
          />
          <BaseCardBusca
            src={src2}
            name='Família Schneider'
            adress='Orderberger Strasse'
            cep='Potsdam, Alemanha'
          />
          <BaseCardBusca
            src={src3}
            name='Família Diel'
            adress='Schönhauser Strasse'
            cep='Berlin, Alemanha'
          />
        <BaseCardBusca
            src={src1}
            name='Família Schwarz'
            adress='Augsburg Strasse'
            cep='Berlin, Alemanha'
          />
        </SwiperSlide>
      </Swiper>
    )
  }
}

