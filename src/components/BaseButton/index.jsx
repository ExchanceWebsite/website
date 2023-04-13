import React from 'react';
import * as S from './styles';

const BaseButton = ({ children, theme, color, size, ...props }) => {
  props
  return (
    <S.Wrapper style={{
      backgroundColor: theme,
      color: color,
      width: size + 'px'
    }}
    >{children}
    </S.Wrapper>
  )
}

export default BaseButton;
