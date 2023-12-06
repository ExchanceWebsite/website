import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { green } from '@mui/material/colors';

const BaseCardBusca = ({ onClick, img, alt, id, reservado, name, adress, cep, src, desc }) => {
  window.localStorage.setItem(`${id}desc`, desc);
  window.localStorage.setItem(`${id}adress`, adress);
  window.localStorage.setItem(`${id}cep`, cep);

  return (
    <Link to='/detalhes'>
      <S.Wrapper
        onClick={onClick}>
        <S.TextWrapper>
          <center>{reservado ? <h4>Reservado</h4> : <h3>Livre</h3>}</center>
          <img src={src} />
          <h2>{id} - {name}</h2> 
          <p>{adress}</p>
          <p>{cep}</p>
          <p>{desc}</p>
        </S.TextWrapper>
      </S.Wrapper >
    </Link>
  )
}

export default BaseCardBusca;

