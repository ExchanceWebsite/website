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

const Home = () => {
  return (
    <>
      <S.FirstSection>
        <TheHeader></TheHeader>
        <BaseContainer>
          <S.Content1>
            <BaseSearch />
          </S.Content1>
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
        </BaseContainer>
      </S.FirstSection>
      <S.SecSection>
        <BaseContainer>
        <S.Content2></S.Content2>
        </BaseContainer>

      </S.SecSection>

    </>
  )
}

export default Home;

