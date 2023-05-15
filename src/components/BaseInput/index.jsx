import React from 'react';
import * as S from './styles';
import { IMaskInput } from "react-imask";

function BaseInput({ onFocus, onBlur, type, placeholder, size, id, mask, ...props }) {
  props
  return (
    <S.Wrapper>
      <IMaskInput
        mask={mask}
        defaultValue={props.value}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        style={{
          width: size
        }}
        onChange={(e) => props.insert(e.target.value)}
      />
    </S.Wrapper>
  )
}

export default BaseInput;

