import React from 'react';
import * as S from './styles';

const BaseContainer = ({ children, ...props }) => {
  props
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  )
}

export default BaseContainer;
