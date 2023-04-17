import React from 'react';
import * as S from './styles';

const BaseCard = ({ img, alt, title, text }) => {
  return (
    <S.Wrapper>
      <S.CardImg src={img} alt={alt} />
      <S.TextWrapper>
        <h2>{title}</h2>
        <p>{text}</p>
      </S.TextWrapper>

    </S.Wrapper >
  )
}

export default BaseCard;

