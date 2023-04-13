import React from 'react';
import * as S from './styles';

function BaseInput({ onFocus, onBlur, type, placeholder, size, id, ...props }) {
  props
  return (
    <S.Wrapper>
      <input
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        style={{
          width: size + 'px'
        }}
      />
    </S.Wrapper>
  )
}

export default BaseInput;

