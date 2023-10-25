import React, { useState } from 'react';
import { BaseSearch, ContentBusca } from '../../components/BaseSearch';
import TheHeader from '../../components/TheHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation } from 'react-router-dom';
import TheFooter from '../../components/TheFooter';
import * as S from './styles';


const Busca = () => {
  let currentBusca = false
  const location = useLocation()

  if (location.pathname === '/busca') {
    currentBusca = true
  }

  const [busca, setBusca] = useState(false);

  const filtrar = () => {
    if (currentBusca) {
      setBusca(true)
    }
  }
  return (
    <>
      <S.FirstSection>
        <TheHeader></TheHeader>
        <S.Container>
          <BaseSearch filtrar={filtrar} />
          <ContentBusca busca={busca} />
        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Busca;