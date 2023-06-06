import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { BaseSearch } from '../../components/BaseSearch';
import TheHeader from '../../components/TheHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import TheFooter from '../../components/TheFooter';
import BaseInput from '../../components/BaseInput';
import BaseSelect from '../../components/BaseCheck';
import BaseButton from '../../components/BaseButton';
import colors from '../../styles/theme';
import httpFetch from '../../hooks/httpFetch';


const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [nascimento, setNascimento] = useState();
  // const [idade, setIdade] = useState();
  const [celular, setCelular] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmaSenha, setConfirmaSenha] = useState();
  const [white, setWhite] = useState();
  const [idade, setIdade] = useState();
  const [tipo, setTipo] = useState();


  useEffect(() => {

    const today = new Date();
    const birthDate = new Date(nascimento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    console.log(nascimento)
    console.log(age)

    setIdade(age)


  }, [nascimento])

  function cadastro() {
    const cadastroUser = { nome, idade, email, senha, celular, cpf };

    httpFetch.post('/estudantes', cadastroUser)
      .then((res) => {
        console.log(res.data);
        navigate("/login")
      }).catch((err) => {
        console.clear();
        console.log(err.response);
        console.log(cadastroUser);
      });

    window.localStorage.clear();
    window.localStorage.setItem('USERNAME', nome);
  }

  function cadastroHost() {
    const cadastroUser = { nome, email, senha, celular };

    httpFetch.post('/hosts', cadastroUser)
      .then((res) => {
        console.log(res.data);
        navigate("/login")
      }).catch((err) => {
        console.clear();
        console.log(err.response);
        console.log(cadastroUser);
      });

    window.localStorage.clear();
    window.localStorage.setItem('USERNAME', nome);
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
          <S.Title>Junte-se a nós!</S.Title>
          <S.ButtonWrapper>
            <span>
              <BaseInput
                placeholder='Nome'
                type='text'
                size='137px'
                insert={setNome}
              ></BaseInput>
              <BaseInput
                placeholder='CPF'
                mask="000.000.000-00"
                type='text'
                size='137px'
                insert={setCpf}
              ></BaseInput>

            </span>
            <BaseInput
              placeholder='Nascimento'
              type='text'
              onFocus={(focus) => focus.target.type = "date"}
              onBlur={(blur) => blur.target.value ? null : blur.target.type = "text"}
              insert={setNascimento}
            ></BaseInput>
            <BaseInput
              placeholder='Celular'
              type='text'
              insert={setCelular}
            ></BaseInput>
            <S.Subtitle>Crie seu login</S.Subtitle>
            <BaseInput
              placeholder='E-mail'
              type='text'
              insert={setEmail}
            ></BaseInput>
            <span>
              <BaseInput
                placeholder='Senha'
                type='password'
                size='137px'
                insert={setSenha}
              ></BaseInput>
              <BaseInput
                placeholder='Confirme'
                type='password'
                size='137px'
                insert={setConfirmaSenha}
              ></BaseInput>
            </span>

            <S.Select
              onFocus={Focus}
              onChange={Change}
              onBlur={Blur}
              onClick={Click}
              insert={setTipo}
            >
              <option value="">Cadastrar como</option>
              <option value="1">Host</option>
              <option value="2">Estudante</option>
            </S.Select>

            <BaseButton
              theme={colors.primary_blue}
              size='279'
              children='Criar conta'
              color='blue !important'
              onClick={
                tipo === 2 ? (
                  cadastro
                ) : (
                  cadastroHost
                )
              }>
            </BaseButton>
          </S.ButtonWrapper>

        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Cadastro;
