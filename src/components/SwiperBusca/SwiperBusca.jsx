import 'swiper/css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import src1 from '../../assets/img-opcao1.png';
import src2 from '../../assets/img-opcao2.png';
import src3 from '../../assets/img-opcao3.png';
// import src4 from '../../assets/img-opcao4.png';
import './styles.css';
import BaseCardBusca from '../BaseCardBusca';
import { useEffect } from 'react';
import httpFetch from '../../hooks/httpFetch';



const CarrouselFiltro = () => {
  let acomodacao = JSON.parse(localStorage.getItem("acomodacao"))
  console.log(acomodacao, "acomodação")

  const fotos = [src1, src2, src3]

  let nome = window.localStorage.getItem('nome')

  const [endereco, setEndereco] = useState();
  const [entrada, setEntrada] = useState();
  const [saida, setSaida] = useState();

  // acomodacao.map((acomodacao) => {
  //   acomodacao.host.map((host) => {
  //     console.log(host.nome, "oiiiiiiiiiiieeeeee");
  //     console.log(host.localidade.endereco);
  //     console.log(host.localidade.pais);
  //     console.log(host.localidade.pais);
  //   })
  // })

  acomodacao.map((unidade) => {
    console.log(unidade, "unidade")
    console.log(unidade.host.nome, "nome")
    console.log(unidade.host.localidade.endereco, "nome")
    console.log(unidade.regras, "nome")
  })

  const detalhes = (event) => {
    let nomeClicado = event.target.parentNode.firstChild.nextSibling.innerHTML
    let descClicada = event.target.parentNode.lastChild.innerHTML

    window.localStorage.setItem("nomeClicado", nomeClicado)
    window.localStorage.setItem("descClicada", descClicada)
    // window.localStorage.setItem(event.target.adress)
    // window.localStorage.setItem(event.target.cep)
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      autoplay={{ delay: 3000 }}
      direction={'horizontal'}
      loop={true}
      slidesPerView={'1'}
      reverseDirection={true}
      pagination={{ clickable: true }}
      className="swiper-container">
      <SwiperSlide className="slide-item">
        {acomodacao.map((unidade) => (
          <BaseCardBusca
            onClick={detalhes}
            src={src2}
            name={unidade.host.nome}
            adress={unidade.host.localidade.endereco}
            cep={unidade.host.localidade.cep}
            desc={unidade.host.descricao}
          />
        ))}
        {/* <BaseCardBusca
          src={src2}
          name='Família Schneider'
          adress='Orderberger Strasse'
          cep='Potsdam, Alemanha'
        />
        <BaseCardBusca
          src={src3}
          name='Família Schneider'
          adress='Orderberger Strasse'
          cep='Potsdam, Alemanha'
        />
        <BaseCardBusca
          src={src3}
          name='Família Diel'
          adress='Schönhauser Strasse'
          cep='Berlin, Alemanha'
        />
        <BaseCardBusca
          src={src1}
          name={'Família' + nome}
          adress='Augsburg Strasse'
          cep='Berlin, Alemanha'
        />
      </SwiperSlide>
      <SwiperSlide className="slide-item">
        <BaseCardBusca
          src={src1}
          name={'Família ' + nome}
          adress='Augsburg Strasse'
          cep='Berlin, Alemanha'
        />
        <BaseCardBusca
          src={src2}
          name='Família Schneider'
          adress='Orderberger Strasse'
          cep='Potsdam, Alemanha'
        />
        <BaseCardBusca
          src={src3}
          name='Família Diel'
          adress='Schönhauser Strasse'
          cep='Berlin, Alemanha'
        />
        <BaseCardBusca
          src={src1}
          name='Família Schwarz'
          adress='Augsburg Strasse'
          cep='Berlin, Alemanha'
        /> */}
      </SwiperSlide>
    </Swiper>
  )
}

export default CarrouselFiltro;
