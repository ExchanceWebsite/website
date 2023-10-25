import React from 'react';
import * as S from './styles';

const BaseImage = ({ onClick, src, size, cover, ...props }) => {
  props
  return (
    <S.StyledImage
      onClick={onClick}
      src={src}
      style={{
        width: size + 'px',
      }}
    >
    </S.StyledImage >
  )
}

export default BaseImage;
