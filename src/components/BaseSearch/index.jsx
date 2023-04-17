import React from 'react';
import * as S from './styles';
import BaseButton from '../BaseButton';
import colors from '../../styles/theme'
import BaseInput from '../BaseInput';
import { useState } from 'react';
// import BaseSelect from '../BaseSelect';
import BaseCheck from '../BaseCheck';
import filtros from './select';


const BaseSearch = () => {
  return (
    <S.Wrapper>
      <BaseInput
        placeholder="Vai pra onde?"
        type="text"
        size="380"
      />

      <span>
        <BaseInput
          placeholder="Entrada"
          type="text"
          size="160"
          onFocus={(focus) => focus.target.type = "date"}
          onBlur={(blur) => blur.target.value ? null : blur.target.type = "text"}
        />
        <BaseInput
          placeholder="Saída"
          type="text"
          size="160"
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
      <BaseButton
        children="Buscar"
        theme={colors.primary_blue}
        size='110'
      />
    </S.Wrapper>
  )
}

export default BaseSearch;

