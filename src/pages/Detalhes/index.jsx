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
import src3 from '../../assets/img3-carousel.png';


const Detalhes = () => {
  const navigate = useNavigate()
  const [familys, setFamilys] = useState();

  // useEffect(() => {
  //   httpFetch.get(`/family/${family}`, hostFamily)
  //     .then((response) => setFamilys(response.data))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, []);

  return (
    <>
      <S.FirstSection>
        <TheHeader></TheHeader>
        <S.Container>
          <S.Title>
            Família Xyz{/* {familys.family.nome} */}
          </S.Title>

          <BaseImage
            // src={familys.family.src}
            src={src3}
            size='600'
          />
          <S.Descricao>
            Como host family, oferecemos uma acomodação confortável, com um quarto privativo para o estudante, mobiliado com cama, mesa de estudo, armário e acesso à internet. Além disso, proporcionamos refeições caseiras, adaptadas às preferências alimentares do estudante, e compartilhamos momentos em família durante as refeições.
            {/* {familys.family.descricao} */}
          </S.Descricao>

          {/* <h2>Integrantes</h2>
          {familys.family.integrantes.map((item) => {
            <ul>
              <li>{item.nome}, {item.idade}</li>
            </ul>
          })} */}

          <S.Content2>
            <ul>
              <h2>Integrantes</h2>
              <li>Julia, 21</li>
              <li>Julia, 21</li>
              <li>Julia, 21</li>
              <li>Julia, 21</li>
              <li>Julia, 21</li>
            </ul>

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
                  navigate("/login")
                }} />
            </S.Content3>
          </S.Content2>
        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Detalhes;
