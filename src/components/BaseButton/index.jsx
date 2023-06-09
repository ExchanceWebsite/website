import React from 'react';
import * as S from './styles';

const BaseButton = ({ children, theme, className, color, id, size, border, position, top, left, right, bottom, transform, onClick, ...props }) => {
  props
  return (
    <S.Wrapper style={{
      className: className,
      backgroundColor: theme,
      color: color,
      width: size + 'px',
      border: border,
      position: position,
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      cursor: 'pointer'
    }}
    id={id}
    onClick={onClick}
    >{children}
    </S.Wrapper>
  )
}

export default BaseButton;
