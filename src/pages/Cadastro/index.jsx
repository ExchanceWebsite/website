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
  const [telefone, setTelefone] = useState();
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
    let descricao = "x"
    const cadastroUser = { nome, idade, descricao, email, senha, telefone, cpf };

    httpFetch.post('/estudantes', cadastroUser)
      .then((res) => {
        console.log(res.data);
        navigate("/login")
      }).catch((err) => {
        console.clear();
        console.log(err.response);
        console.log(cadastroUser);
      });

    // window.localStorage.clear();
    window.localStorage.setItem('USERNAME', nome);
  }

  function cadastroHost() {
    const cadastroUser = { nome, email, senha, telefone };

    httpFetch.post('/hosts', cadastroUser)
      .then((res) => {
        console.log(res.data);
        navigate("/login")
      }).catch((err) => {
        console.clear();
        console.log(err.response);
        console.log(cadastroUser);
      });

    // window.localStorage.clear();
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
    setTipo(event.target.value)
    console.log(tipo, "valorrrrrr")
    // setTipo(event.target.value)
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
                type='text'
                size='137px'
                insert={setCpf}
              ></BaseInput>

            </span>
            <BaseInput
              placeholder='Nascimento'
              type='text'
              onFocus={(focus) => focus.target.type = "date"}
              onBlur={(blur) => {
                blur.target.value ? null : blur.target.type = "text"
                idade < 13 ? alert('Você deve ter ao menos 13 anos para se cadastrar') : null
              }}
              insert={setNascimento}
            ></BaseInput>
            <BaseInput
              placeholder='telefone'
              type='text'
              insert={setTelefone}
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
            >
              <option value="1">Cadastrar como</option>
              <option value="host">Host</option>
              <option value="estudante">Estudante</option>
            </S.Select>

            <BaseButton
              theme={colors.primary_blue}
              size='279'
              children='Criar conta'
              color='blue !important'
              onClick={
                tipo === 'estudante' ? (
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
