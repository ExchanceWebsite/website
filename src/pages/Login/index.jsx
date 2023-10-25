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
  const [tipo, setTipo] = useState();
  const [white, setWhite] = useState();

  // const [estudante, setEstudante] = useState();

  // setEstudante(true)

  function login() {

    const loginUser = { email, senha };
    httpFetch.post('/estudantes/login', loginUser)
      .then((res) => {
        console.log(res.data);
        // estudante ? navigate("/reservas") : navigate("/cadastroAcomodacao")
        navigate("/contaE")
        // window.localStorage.clear();
        window.localStorage.setItem('id_user', res.data.idEstudante);
        window.localStorage.setItem('nomeUser', res.data.nome);
        window.localStorage.setItem('emailUser', res.data.email);
      }).catch((err) => {
        console.clear();
        console.log(err.response.status);
        console.log(email);
        console.log(senha);
        console.log(err);
      });


    // useEffect(() => {
    //   window.localStorage.setItem('id_user', idUser);
    //   console.log(idUser)
    // }, [idUser]);

    // window.localStorage.clear();

  }

  function loginHost() {

    const loginUserHost = { email, senha };
    httpFetch.post('/hosts/login', loginUserHost)
      .then((res) => {
        // console.log(res.data);
        navigate("/conta")
        // window.localStorage.clear();
        window.localStorage.setItem('id_host', res.data.idHostFamily);
        window.localStorage.setItem('nome', res.data.nome);
        window.localStorage.setItem('nomeHost', res.data.nome);
        window.localStorage.setItem('emailHost', res.data.email);
      }).catch((err) => {
        console.clear();
        console.log(err.response.status);
        console.log(email);
        console.log(senha);
        console.log(err);
        console.log(tipo.value, "tipo");

      });
  }

  const [valor, setValor] = useState(false)

  const Click = (event) => {
    if (event.target.value) {
      setValor(!valor)
    }
    valor ? (
      event.target.style.color = "white"
    ) :
      event.target.style.color = "grey"
  }

  const Focus = (event) => {
    if (event.target.value) {
      setWhite(true)
    }
    valor ? (
      event.target.style.color = "white"
    ) :
      event.target.style.color = "grey"
  }

  const Change = (event) => {
    if (event.target.value) {
      setWhite(false)
    }
    valor ? (
      event.target.style.color = "white"
    ) :
      event.target.style.color = "grey"
  }

  const Blur = (event) => {
    setTipo(event.target.value)
    console.log(tipo)
    window.localStorage.setItem('tipo', tipo)
    if (event.target.value) {
      setWhite(true)
    }
    valor ? (
      event.target.style.color = "white"
    ) :
      event.target.style.color = "grey"
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

          <S.Select
            onFocus={Focus}
            onChange={Change}
            onBlur={Blur}
            onClick={Click}
          >
            <option value="">Logar como</option>
            <option value="1">Host</option>
            <option value="2">Estudante</option>
          </S.Select>


          <BaseButton
            theme={colors.primary_blue}
            size='279'
            children='Entrar'
            color='blue !important'
            onClick={
              tipo == 2 ? (
                login
              ) : (
                loginHost
              )
            }>
          </BaseButton>

        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}
export default Login;
