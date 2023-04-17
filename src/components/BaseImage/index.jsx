import React from 'react';
import * as S from './styles';

const BaseImage = ({ src, size, cover, ...props }) => {
  props
  return (
    <S.StyledImage
      src={src}
      style={{
        width: size + 'px',
      }}
    >
    </S.StyledImage >
  )
}

export default BaseImage;
