import React, { useEffect, useState } from 'react';
import * as S from '../Cadastro/styles';
import { BaseSearch } from '../../components/BaseSearch';
import TheHeader from '../../components/TheHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import TheFooter from '../../components/TheFooter';
import BaseInput from '../../components/BaseInput';
import BaseSelect from '../../components/BaseCheck';
import BaseButton from '../../components/BaseButton';
import colors from '../../styles/theme';
import httpFetch from '../../hooks/httpFetch';

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [idUser, setIdUser] = useState();


  // const [estudante, setEstudante] = useState();

  // setEstudante(true)

  function login() {

    const loginUser = { email, senha };
    httpFetch.post('/login', loginUser)
      .then((res) => {
        console.log(res.data);
        // estudante ? navigate("/reservas") : navigate("/cadastroAcomodacao")
        navigate("/conta")
          window.sessionStorage.clear();
          window.sessionStorage.setItem('id_user', res.data.idEstudante);
          window.sessionStorage.setItem('nome_user', res.data.nome);
      }).catch((err) => {
        // console.clear();
        console.log(err.response.status);
        console.log(email);
        console.log(senha);
        console.log(err);
      });


    // useEffect(() => {
    //   window.sessionStorage.setItem('id_user', idUser);
    //   console.log(idUser)
    // }, [idUser]);

    // window.sessionStorage.clear();

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
            type='password'
            insert={setSenha}
          ></BaseInput>

          <BaseButton
            theme={colors.primary_blue}
            size='279'
            children='Entrar'
            color='blue !important'
            onClick={login}>
          </BaseButton>

        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Login;
