import React, { useEffect, useState } from 'react';
import * as S from '../Cadastro/styles';
import { BaseSearch, ContentBusca } from '../../components/BaseSearch';
import TheHeader from '../../components/TheHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation } from 'react-router-dom';
import TheFooter from '../../components/TheFooter';
import BaseInput from '../../components/BaseInput';
import BaseSelect from '../../components/BaseCheck';
import BaseButton from '../../components/BaseButton';
import colors from '../../styles/theme';
import httpFetch from '../../hooks/httpFetch';
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function login() {
    const loginUser = { email, senha };

    httpFetch.post('/login', loginUser)
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.clear();
        console.log(err.response.status);
        console.log(email);
        console.log(senha);
        console.log(err);
      });
  }


  return (
    <>
      <TheHeader></TheHeader>
      <S.FirstSection>
        <S.Container>
          <S.Title>Bem-vindo(a)!</S.Title>
          <BaseInput
            value={email}
            placeholder='E-mail'
            type='text'
            insert={setEmail}
          ></BaseInput>
          <BaseInput
            value={senha}
            placeholder='Senha'
            type='senha'
            insert={setSenha}
          ></BaseInput>

          <Link to='/reserva'>
            <BaseButton
              theme={colors.primary_blue}
              size='279'
              children='Entrar'
              color='blue !important'
              onClick={login}>
            </BaseButton>
          </Link>
        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Login;
