import React from 'react';
import * as S from './styles';
import BaseButton from '../BaseButton';
import colors from '../../styles/theme'
import BaseInput from '../BaseInput';
import { useState, useEffect } from 'react';
import BaseSelect from '../BaseSelect';
import BaseCheck from '../BaseCheck';
import filtros from './select';
import { Link } from 'react-router-dom';
import BaseImage from '../BaseImage';
import Mapa from '../../assets/mapa-img.png'
import CarrousselBusca from '../../components/SwiperBusca/SwiperBusca';



export const ContentBusca = ({ busca }) => {
  return (
    busca ? (
      <S.Container>

        <CarrousselBusca />
      </S.Container >

    ) : (
      <S.Container>
        <BaseImage size='800' src={Mapa} />
      </S.Container >
    )
  )
}

export const BaseSearch = ({ filtrar }) => {
  return (
    <S.Wrapper>
      <BaseInput
        placeholder="Vai pra onde?"
        type="text"
        max="380px"
      // size='100%'
      />

      <span>
        <BaseInput
          placeholder="Entrada"
          type="text"
          size="160px"
          onFocus={(focus) => focus.target.type = "date"}
          onBlur={(blur) => blur.target.value ? null : blur.target.type = "text"}
        />
        <BaseInput
          placeholder="Saída"
          type="text"
          size="160px"
          onFocus={(focus) => focus.target.type = "date"}
          onBlur={(blur) => blur.target.value ? null : blur.target.type = "text"}
        />
      </span>
      <BaseCheck
        placeholder="Filtrar"
        // type="combobox"
        size="170"
        options={filtros}
      >
      </BaseCheck>
      <Link to='/busca'>
        <BaseButton
          onClick={filtrar}
          children={<S.Link>Buscar</S.Link>}
          theme={colors.primary_blue}
          size='110'
        />
      </Link>
    </S.Wrapper>
  )
}