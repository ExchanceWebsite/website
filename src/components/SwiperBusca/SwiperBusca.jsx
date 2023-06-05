import 'swiper/css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import src1 from '../../assets/img-opcao1.png';
import src2 from '../../assets/img-opcao2.png';
import src3 from '../../assets/img-opcao3.png';
import './styles.css';
import BaseCardBusca from '../BaseCardBusca';
import { useEffect } from 'react';


const CarrouselFiltro = () =>  {
  const [familys, setFamilys] = useState();

    // useEffect(() => {
      //   httpFetch.get(`/hosts/${host}`, hostFamily)
      //     .then((response) => setFamilys(response.data))
      //     .catch((err) => {
      //       console.error("ops! ocorreu um erro" + err);
      //     });
      // }, []);

      return (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          autoplay={{ delay: 3000 }}
          direction={'horizontal'}
          loop={true}
          slidesPerView={'1'}
          reverseDirection={true}
          pagination={{ clickable: true }}
          className="swiper-container">
          <SwiperSlide className="slide-item">
            {/* {familys.map((item) => {
              <BaseCardBusca
                src={item.src}
                name={item.name}
                adress={item.adress}
                cep={item.cep}
              />
            })} */}
            <BaseCardBusca
              src={src2}
              name='Família Schneider'
              adress='Orderberger Strasse'
              cep='Potsdam, Alemanha'
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

export default CarrouselFiltro;
