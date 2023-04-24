import React from 'react';
import * as S from './styles';

const BaseButton = ({ children, theme, color, size, border, position, top, left, right, bottom, transform, ...props }) => {
  props
  return (
    <S.Wrapper style={{
      backgroundColor: theme,
      color: color,
      width: size + 'px',
      border: border,
      position: position,
      top: top,
      bottom: bottom,
      left: left,
      right: right,
    }}
    >{children}
    </S.Wrapper>
  )
}

export default BaseButton;
