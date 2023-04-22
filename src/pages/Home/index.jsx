import React from 'react';
import * as S from './styles';
import BaseSearch from '../../components/BaseSearch';
import BaseContainer from '../../components/BaseContainer';
import BaseButton from '../../components/BaseButton';
import colors from '../../styles/theme'
import BaseInput from '../../components/BaseInput';
import TheHeader from '../../components/TheHeader';
import BaseCard from '../../components/BaseCard';
import Objetividade from '../../assets/objetividade.png'
import Chat from '../../assets/chat.png'
import Personalizacao from '../../assets/personalizacao.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Carroussel from '../../components/Swiper/Swiper';
// import Carroussel from '../../components/Swiper/';

const Home = () => {
  return (
    <>
      <S.FirstSection>
        <TheHeader></TheHeader>
        <BaseContainer>
          <S.Content1>
            <BaseSearch />
            <S.CardModule>
              <BaseCard
                title="Objetividade"
                text="Livre-se de burocracias e processos demorados"
                img={Objetividade}
              />
              <BaseCard
                title="Chat com Host"
                text="Converse com o seu anfitrião e alinhe interesses"
                img={Chat}
              />
              <BaseCard
                title="Personalização"
                text="Ache o melhor host para o seu perfil"
                img={Personalizacao}
              />
            </S.CardModule>
          </S.Content1>
        </BaseContainer>
      </S.FirstSection>
      <S.SecSection>
        <BaseContainer>

          <Carroussel />
          {/* <BaseButton
            children="Buscar"
            theme={colors.light_brown}
            size='110'
          /> */}
          <S.Content2>
            <BaseButton
              children="Buscar destinos"
              theme='transparent'
              size='200'
              border='2px solid rgb(227, 181, 156)'
              color='rgb(227, 181, 156)'
            />
          </S.Content2>
        </BaseContainer>

      </S.SecSection >

    </>
  )
}

export default Home;

