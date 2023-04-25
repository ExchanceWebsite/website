import React from 'react';
import * as S from './styles';

function BaseInput({ onFocus, onBlur, type, placeholder, size, id, max, ...props }) {
  props
  return (
    <S.Wrapper>
      <input
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        style={{
          maxWidth: max,
          width: size
        }}
      />
    </S.Wrapper>
  )
}

export default BaseInput;

