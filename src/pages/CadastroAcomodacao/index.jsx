
import React, { useEffect, useState } from 'react';
import '../../CSS/pos-login.css';
import brownLogo from '../../assets/brown-logo.png'
import BaseImage from '../../components/BaseImage';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import colors from '../../styles/theme';
import httpFetch from '../../hooks/httpFetch';

const CadastroAcomodacao = () => {

  const [pais, setPais] = useState();
  const [endereco, setEndereco] = useState();
  const [cep, setCep] = useState();
  const [cidade, setCidade] = useState();

  const nomeHost = window.localStorage.getItem('nome_host');
  const idHost = window.localStorage.getItem('id_host');

  function cadastroLocal() {
    const cadastroUser = { pais, cidade, endereco, cep };

    httpFetch.post('/localidade', cadastroUser)
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.clear();
        console.log(err.response);
        console.log(cadastroUser);
      });

    // window.localStorage.clear();
    window.localStorage.setItem('USERNAME', nome);
  }

  return (
    <>
      <div id="header">
        <div id="teste">
          <BaseImage
            src={brownLogo}
            size='180'
          />
        </div>
        <h2 id="frase">Olá, {nomeHost}</h2>
      </div>
      <div id="corpo">
        <div id="header-vertical">

          <div id="menu">
            <img src="../image/icons8-aeroporto-32 (1).png" alt="" />
            <h2>Reservas</h2>
          </div>
          <div id="menu">
            <img src="../image/icons8-mensagem-de-bate-papo-32.png" alt="" />
            <h2>Chat</h2>
          </div>
          <div id="menu">
            <img src="../image/icons8-alarme-32.png" alt="" />
            <h2>Notificações</h2>
          </div>
          <div id="menu">
            <img src="../image/icons8-usuário-50.png" alt="" />
            <h2 id="ajuste">Conta</h2>
          </div>
        </div>

        <h2>Atualize o seu cadastro</h2>

        <div className='Wrapper'>
          <BaseInput
            placeholder='País'
            type='text'
            insert={setPais}
          ></BaseInput>
          <BaseInput
            placeholder='Logradouro'
            type='text'
            insert={setEndereco}
          ></BaseInput>
          <BaseInput
            placeholder='Cidade'
            type='text'
            insert={setCidade}
          ></BaseInput>
          <BaseInput
            placeholder='CEP'
            type='text'
            insert={setCep}
          ></BaseInput>

          <BaseButton
            theme={colors.primary_blue}
            size='279'
            children='Enviar'
            color='blue !important'
            onClick={cadastroLocal}>
          </BaseButton>
        </div>

        <button id="cadastrar">+ Cadastrar acomodação</button>
      </div>
    </>

  )
}

export default CadastroAcomodacao;