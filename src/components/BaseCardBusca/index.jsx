import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

const BaseCardBusca = ({ img, alt, name, adress, cep, src }) => {
  return (
    <Link to='/detalhes'>
      <S.Wrapper>
        <S.TextWrapper>
          <img src={src} />
          <h2>{name}</h2>
          <p>{adress}</p>
          <p>{cep}</p>
        </S.TextWrapper>
      </S.Wrapper >
    </Link>
  )
}

export default BaseCardBusca;

