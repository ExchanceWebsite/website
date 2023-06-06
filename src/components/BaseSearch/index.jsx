import React from 'react';
import * as S from './styles';
import BaseButton from '../BaseButton';
import colors from '../../styles/theme'
import BaseInput from '../BaseInput';
import { useState, useEffect } from 'react';
import BaseSelect from '../BaseSelect';
import BaseCheck from '../BaseCheck';
import filtros from './select';
import { Link, Navigate } from 'react-router-dom';
import BaseImage from '../BaseImage';
import Mapa from '../../assets/mapa-img.png'
import CarrousselBusca from '../../components/SwiperBusca/SwiperBusca';
import httpFetch from '../../hooks/httpFetch';
import { useNavigate } from 'react-router-dom';

export const BaseSearch = () => {
  const navigate = useNavigate()

  const [endereco, setEndereco] = useState();
  const [entrada, setEntrada] = useState();
  const [saida, setSaida] = useState();

  function filtrao() {

    const filtroBusca = { endereco, entrada, saida };
    // const [nomes, setNomes] = useState([]);
    // const cidade = []
    // const pais = []
    // const cep = []
    const acomodacao = {};

    httpFetch.get(`/acomodacoes/acomodacoes-localidade-disponivel?endereco=${endereco}&entrada=${entrada}&saida=${saida}`, )
      .then((res) => {
        console.log(res.data);
        navigate("/busca")
        acomodacao = JSON.stringify(res.data);
        window.sessionStorage.setItem('acomodacao', acomodacao);
        // res.data.map((acomodacao) => {
        //   acomodacao.host.map((host) => {
        //     setNomes(host.nome);
        //     cidade.push(host.localidade.cidade);
        //     pais.push(host.localidade.pais);
        //     cep.push(host.localidade.pais);
        //   })
        // })
      }).catch((err) => {
        console.clear();
        console.log(err.response);
      });
  }

  return (
    <S.Wrapper>
      <BaseInput
        value={endereco}
        placeholder="Vai pra onde?"
        type="text"
        max="380px"
        insert={setEndereco}
      // size='100%'
      />

      <span>
        <BaseInput
          placeholder="Entrada"
          type="text"
          size="160px"
          onFocus={(focus) => focus.target.type = "date"}
          onBlur={(blur) => blur.target.value ? null : blur.target.type = "text"}
          value={entrada}
          insert={setEntrada}
        />
        <BaseInput
          placeholder="Saída"
          type="text"
          size="160px"
          onFocus={(focus) => focus.target.type = "date"}
          onBlur={(blur) => blur.target.value ? null : blur.target.type = "text"}
          value={saida}
          insert={setSaida}
        />
      </span>
      <BaseCheck
        placeholder="Filtrar"
        // type="combobox"
        size="170"
        options={filtros}
      >
      </BaseCheck>
      <BaseButton
        onClick={filtrao}
        children={<S.Link>Buscar</S.Link>}
        theme={colors.primary_blue}
        size='110'
      />
    </S.Wrapper>
  )
}

