import React, { useEffect, useState } from 'react';
import * as S from './styles';
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

const Cadastro = () => {

  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [nascimento, setNascimento] = useState();
  const [celular, setCelular] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmaSenha, setConfirmaSenha] = useState();


  function cadastro() {
    const cadastroUser = { nome, cpf, nascimento, celular, email, senha, confirmaSenha };
    const teste = sessionStorage.getItem("nome")



    httpFetch.post('/cadastro', cadastroUser)
      .then((res) => {
        console.log(res.data);
  console.log(`Nome usuário ${teste}`)

      }).catch((err) => {
        console.clear();
        console.log(err.response.status);
        console.log(nome);
        console.log(cpf);
        console.log(nascimento);
        console.log(celular);
        console.log(email);
        console.log(email);
        console.log(confirmaSenha);
  
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
              onClick={cadastro}>
            </BaseButton>
          </S.ButtonWrapper>

        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Cadastro;
