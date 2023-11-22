
import React, { useState } from 'react';
import '../../CSS/pos-login.css';
import brownLogo from '../../assets/brown-logo.png'
import BaseImage from '../../components/BaseImage';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import VerticalHeader from '../../components/VerticalHeader';
import Wizard from '../../components/Wizard';
import CarrousselBusca from '../../components/SwiperBusca/SwiperBusca';

const ReservasHost = () => {
  const [showWizard, setShowWizard] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div id="header">
        <div id="teste">
          <BaseImage
            src={brownLogo}
            size='180'
            onClick={() => navigate('/')}
          />
        </div>
        <h2 id="frase">Olá, {window.localStorage.getItem("nome")}</h2>
      </div>
      <div id="corpo">
        <VerticalHeader />
        <S.Container>
          {showWizard ? (
            <Wizard />

          ) : (
            <div id="carrousselBusca">
              <CarrousselBusca isAcomodacao={true} />
              <S.ButtonAddWizard onClick={() => setShowWizard(true)}>Cadastrar</S.ButtonAddWizard>

            </div>
          )}
        </S.Container>
      </div>
    </>

  )
}

export default ReservasHost;