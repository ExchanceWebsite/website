import React from 'react';
import * as S from './styles';

function BaseInput({ onFocus, onBlur, type, placeholder, size, id, max, ...props }) {
  props
  return (
    <S.Wrapper>
      <input
        defaultValue={props.value}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        style={{
          maxWidth: max,
          width: size
        }}
        onChange={(e) => props.insert(e.target.value)}
      />
    </S.Wrapper>
  )
}

export default BaseInput;

