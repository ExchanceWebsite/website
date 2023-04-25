import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { BaseSearch, ContentBusca } from '../../components/BaseSearch';
import TheHeader from '../../components/TheHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation } from 'react-router-dom';
import TheFooter from '../../components/TheFooter';

const Detalhes = () => {
  return (
    <>
      <S.FirstSection>
        <TheHeader></TheHeader>
        <S.Container>
          <S.Title>
            Família Schwarz
          </S.Title>
        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Busca;
