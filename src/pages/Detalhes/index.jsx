import React, { useEffect, useState } from 'react';
import * as S from './styles';
import TheHeader from '../../components/TheHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TheFooter from '../../components/TheFooter';
import BaseImage from '../../components/BaseImage';
import BaseButton from '../../components/BaseButton';
import colors from '../../styles/theme';
import { Navigate } from 'react-router-dom';
import httpFetch from '../../hooks/httpFetch';
import { useNavigate } from 'react-router-dom';
import src2 from '../../assets/img-opcao2.png'
  ;


const Detalhes = () => {
  const navigate = useNavigate()
  const [familys, setFamilys] = useState();

  let acomodacao = JSON.parse(localStorage.getItem("acomodacao"))
  console.log(acomodacao, "acomodação")

  let nomeClicado = window.localStorage.getItem('nomeClicado')
  let descClicada = window.localStorage.getItem('descClicada')



  return (
    <>
      <S.FirstSection>
        <TheHeader></TheHeader>
        <S.Container>
          <div>
            <S.Title>
              Família {window.localStorage.getItem('nome')}
            </S.Title>

            <BaseImage
              src={src2}
              size='600'
            />
            <S.Content2>
              <S.Content3>
                <BaseButton
                  theme={colors.darker_brown}
                  size='240'
                  children='Tenho interesse'
                  color='white'
                  onClick={() => {
                    navigate("/reservas")
                  }} />
              </S.Content3  >
            </S.Content2>
          </div>
          <S.ContainerDescricao>
            <p>{window.localStorage.getItem('1desc')}</p>
            <S.Endereco>
            {window.localStorage.getItem('1adress')} , {window.localStorage.getItem('1cep')}
            </S.Endereco>
          </S.ContainerDescricao>
        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Detalhes;
