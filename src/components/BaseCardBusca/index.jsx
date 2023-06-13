import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

const BaseCardBusca = ({ onClick, img, alt, name, adress, cep, src, desc }) => {
  return (
    <Link to='/detalhes'>
      <S.Wrapper
        onClick={onClick}>
        <S.TextWrapper>
          <img src={src} />
          <h2>{name}</h2>
          <p>{adress}</p>
          <p>{cep}</p>
          <p>{desc}</p>
        </S.TextWrapper>
      </S.Wrapper >
    </Link>
  )
}

export default BaseCardBusca;

