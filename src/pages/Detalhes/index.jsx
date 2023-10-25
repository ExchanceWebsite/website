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
              Casa Oliveira {window.localStorage.getItem('nomeClicado')}
            </S.Title>

            <BaseImage
              src={src2}
              size='600'
            />
            <S.Descricao>
              {descClicada}
            </S.Descricao>

            <S.Content2>

              <S.Content3>
                <BaseButton
                  border='2px solid blue'
                  theme='white'
                  size='240'
                  children='Chat com o Host'
                  color={colors.primary_blue}
                  onClick={() => {
                    navigate("/chatPage")
                  }} />

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
            <p>"Esta casa é um verdadeiro refúgio de tranquilidade e beleza, aninhada no coração de uma exuberante floresta.
              Ela se destaca por sua arquitetura única, que combina elementos modernos e rústicos de forma harmoniosa. O exterior da
              casa é revestido com pedras naturais e madeira envelhecida, criando uma sensação acolhedora e atemporal.</p>
            <S.Endereco>
              Brasil, São Paulo
            </S.Endereco>
          </S.ContainerDescricao>
        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Detalhes;
