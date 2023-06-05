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

const [local, setLocal] = useState();
const [entrada, setEntrada] = useState();
const [saida, setSaida] = useState();
const [opcoes, setOpcoes] = useState();

function filtrao() {
  const filtroBusca = { local, entrada, saida, opcoes };

  // httpFetch.post('/filtrar', filtroBusca)
  //   .then((res) => {
  //     console.log(res.data);
      navigate("/busca")
    // }).catch((err) => {
    //   console.clear();
    //   console.log(err.response.status);
    //   console.log(cadastroUser);
    // });

}

return (
  <S.Wrapper>
    <BaseInput
      placeholder="Vai pra onde?"
      type="text"
      max="380px"
      insert={setLocal}
    // size='100%'
    />

    <span>
      <BaseInput
        placeholder="Entrada"
        type="text"
        size="160px"
        onFocus={(focus) => focus.target.type = "date"}
        onBlur={(blur) => blur.target.value ? null : blur.target.type = "text"}
        insert={setEntrada}
      />
      <BaseInput
        placeholder="Saída"
        type="text"
        size="160px"
        onFocus={(focus) => focus.target.type = "date"}
        onBlur={(blur) => blur.target.value ? null : blur.target.type = "text"}
        insert={setSaida}
      />
    </span>
    <BaseCheck
      placeholder="Filtrar"
      // type="combobox"
      size="170"
      options={filtros}
      insert={setOpcoes}
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

