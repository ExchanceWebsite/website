import React from 'react';
import * as S from './styles';
import BaseInput from '../BaseInput';

function BaseSelect({ options, type, placeholder, size, ...props }) {
  props
  return (
    <S.Wrapper>
      <select
        placeholder={placeholder}
        // onFocus={() => document.querySelector('[value="placeholder"]').disabled = true}
        type={type}
        style={{
          width: size + 'px'
        }}
      >
        <option value="placeholder">
          {placeholder}
        </option>

        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </S.Wrapper>
  )
}

export default BaseSelect;

