import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { BaseSearch } from '../../components/BaseSearch';
import BaseContainer from '../../components/BaseContainer';
import BaseButton from '../../components/BaseButton';
import TheHeader from '../../components/TheHeader';
import BaseCard from '../../components/BaseCard';
import Objetividade from '../../assets/objetividade.png'
import Chat from '../../assets/chat.png'
import Personalizacao from '../../assets/personalizacao.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Carroussel from '../../components/Swiper/Swiper';
import questions from './mock';
import TheFooter from '../../components/TheFooter';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
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
                onClick={() => navigate("/chatPage")}
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
          <BaseButton
            children="Buscar destinos"
            theme='transparent'
            size='200'
            border='2px solid rgb(227, 181, 156)'
            color='rgb(227, 181, 156)'
            position='absolute'
            left='43.5%'
            align-self='center'
            bottom='50px'
          />
        </BaseContainer>
      </S.SecSection >
      <S.ThirdSection>
        <BaseContainer>
          <S.Content3>
            {questions.map((cliente, index) => (
              <>
                <S.Title key={index}>{cliente.h1}</S.Title>
                {cliente.faqs.map((item, index) => (
                  <React.Fragment key={index}>
                    <S.Question>{item.title}</S.Question>
                    <S.Answer>{item.answer}</S.Answer>
                  </React.Fragment>
                ))}
              </>
            ))}
          </S.Content3>
        </BaseContainer>
      </S.ThirdSection>
      <TheFooter />
    </>
  )
}

export default Home;
