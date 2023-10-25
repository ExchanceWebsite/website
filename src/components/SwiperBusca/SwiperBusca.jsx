import 'swiper/css';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import src1 from '../../assets/img-opcao1.png';
import src2 from '../../assets/img-opcao2.png';
import src3 from '../../assets/img-opcao3.png';
import './styles.css';
import httpFetch from '../../hooks/httpFetch';
import BaseCardBusca from '../BaseCardBusca';
import 'swiper/css';
import './styles.css';


function renderizarAcomodacoes(acomodacoes) {
  const gruposDe4 = [];
  for (let i = 0; i < acomodacoes?.length; i += 4) {
    gruposDe4.push(acomodacoes.slice(i, i + 4));
  }

  return gruposDe4.map((grupo, index) => (
    <SwiperSlide className="slide-item" key={index}>
      {grupo.map((acomodacao, subIndex) => (
        <BaseCardBusca
          key={subIndex}
          src={obterFotoAleatoria()}
          name={acomodacao.descricao}
          adress='Augsburg Strasse'
          cep='Berlin, Alemanha'
        />
      ))}
    </SwiperSlide>
  ));
}
function obterFotoAleatoria() {

  const mockFotos = [src1, src2, src3];

  const indiceAleatorio = Math.floor(Math.random() * mockFotos.length);
  return mockFotos[indiceAleatorio];
}
export default function CarrousselBusca(props) {
  const [acomodacoes, setAcomodacoes] = useState();
  const hostnamne = localStorage.getItem('nomeHost');


  useEffect(() => {
    if (props.isAcomodacao) {
      // httpFetch.get(`/acomodacoes/${hostnamne}`)
      httpFetch.get('/acomodacoes') //trocar essa linha para chamada do endpoint que retorna acomodacoes por host
        .then((res) => {
          setAcomodacoes(res.data);
        }).catch((err) => {
          console.clear();
          console.log(err.response);
        });
    } else {
      httpFetch.get('/acomodacoes')
        .then((res) => {
          setAcomodacoes(res.data);
        }).catch((err) => {
          console.clear();
          console.log(err.response);
        });
    }

  }, []);


  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      autoplay={{ delay: 2000 }}
      direction={'horizontal'}
      loop={true}
      slidesPerView={'1'}
      pagination={{ clickable: true }}
      className="swiper-container-busca">
      {renderizarAcomodacoes(acomodacoes)}
    </Swiper>
  )

}






