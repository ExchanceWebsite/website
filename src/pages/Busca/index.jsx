import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { BaseSearch } from '../../components/BaseSearch';
import TheHeader from '../../components/TheHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation } from 'react-router-dom';
import TheFooter from '../../components/TheFooter';
import CarrousselBusca from '../../components/SwiperBusca/SwiperBusca';
import CarrouselFiltro from '../../components/SwiperBusca/SwiperBusca';

const Busca = () => {

  let entrada = 'oi'
  return (
    <>
      <S.FirstSection>
        <TheHeader></TheHeader>
        <S.Container>
          <BaseSearch />
          <CarrouselFiltro />
        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Busca;
