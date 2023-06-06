
import React, { useEffect, useState } from 'react';
import '../../CSS/pos-login.css';
import brownLogo from '../../assets/brown-logo.png'
import BaseImage from '../../components/BaseImage';
import Aviao from '../../assets/modo-aviao.png'
import Chat from '../../assets/icons8-bate-papo-cheio-32.png'
import Notificacao from '../../assets/icons8-lembrete-de-compromissos-32.png'
import Perfil from '../../assets/icons8-usuário-de-gênero-neutro-32.png'
import { useNavigate } from 'react-router-dom';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import colors from '../../styles/theme';
import httpFetch from '../../hooks/httpFetch';
import * as S from './styles';


const Conta = () => {
  const navigate = useNavigate();
  // let nomeUser = window.localStorage.getItem('nome');

  const [pais, setPais] = useState();
  const [endereco, setEndereco] = useState();
  const [cep, setCep] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [descricao, setDescricao] = useState();
  const [verificado, setVerificado] = useState();
  const [senha, setSenha] = useState();

  function buscarDados() {
    setNome(window.localStorage.getItem('nome', nome))
    setEmail(window.localStorage.getItem('email', email))

    console.log(nome)
    console.log(email)

    httpFetch.get(`/hosts/host?emai=${email}&nome=${nome}`,)
      .then((res) => {
        console.log(res.data, "respondes");
        window.localStorage.setItem('idUser', res.data.idHostFamily);
        setId(window.localStorage.getItem('idUser'))
        setNome(res.data.nome)
        setEmail(res.data.email)
        // setVerificado(res.data.verificado)
        // setDescricao(res.data.descricao)
        // setSenha(res.data.senha)
      }).catch((err) => {
        // console.clear();
        console.log(err.response);
      })
  }

  function cadastroLocal() {
    const idLocalidade = 1;
    const cadastroUser = { nome, verificado, descricao, email, senha, idLocalidade };

    httpFetch.put(`/hosts?id=${id}`, cadastroUser)
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.clear();
        console.log(err.response);
        console.log(cadastroUser);
      });
  }


  return (
    <>
      <div id="header">
        <div id="teste">
          <BaseImage
            src={brownLogo}
            size='180'
            onClick={() => navigate('/')}
          />
        </div>
        <h2 id="frase">Olá, {window.localStorage.getItem("nome")}</h2>
      </div>
      <div id="corpo">
        <div id="header-vertical">

          <div className='menu-aviao'>
            <div className="icon-box">
              <img src={Aviao} alt="" />
            </div>
            <h2 onClick={() => navigate('/reservas')}>Reservas</h2>
          </div>
          <div id="menu">
            <div className="icon-box">
              <img src={Chat} alt="" />
            </div>
            <h2>Chat</h2>
          </div>
          <div id="menu">
            <div className="icon-box">
              <img src={Notificacao} alt="" />
            </div>
            <h2>Notificações</h2>
          </div>
          <div id="menu">
            <div className="icon-box">
              <img src={Perfil} alt="" />
            </div>
            <h2>Conta</h2>
          </div>
        </div>

        <S.Container>
          <S.ButtonWrapper>
            <S.Subtitle>Atualize o seu cadastro:</S.Subtitle>
            <BaseInput
              placeholder='Nome'
              type='text'
              insert={setNome}
              onFocus={buscarDados}
              value={nome}
            ></BaseInput>
            <BaseInput
              placeholder='Descrição'
              type='text'
              insert={setDescricao}
              onFocus={buscarDados}
              value={descricao}
            ></BaseInput>
            <BaseInput
              placeholder='E-mail'
              type='text'
              insert={setEmail}
              value={email}
            ></BaseInput>
            <BaseInput
              placeholder='Senha'
              type='password'
              insert={setSenha}
              value={senha}
            ></BaseInput>
            <BaseInput
              placeholder='País'
              type='text'
              insert={setPais}
              value={pais}
              onFocus={buscarDados}
            ></BaseInput>
            <BaseInput
              placeholder='Cidade'
              type='text'
              insert={setEndereco}
              value={endereco}
            ></BaseInput>
            <BaseInput
              placeholder='CEP'
              type='text'
              insert={setCep}
              value={cep}
            ></BaseInput>

            <BaseButton
              theme={colors.primary_blue}
              size='279'
              children='Enviar'
              color='blue !important'
              onClick={cadastroLocal}>
            </BaseButton>
          </S.ButtonWrapper>

          <div id="informacoes-conta">
            <div>
              <h2>Identidade frente</h2>
              <div id="card-conta"><img src="../image/icons8-fazer-upload-50.png" alt="" /></div>
            </div>
            <div>
              <h2>Identidade Verso</h2>
              <div id="card-conta"><img src="../image/icons8-fazer-upload-50.png" alt="" /></div>
            </div>
            <div>
              <h2>Matrícula Curso</h2>
              <div id="card-conta"><img src="../image/icons8-fazer-upload-50.png" alt="" /></div>
            </div>
            <div>
              <h2>Selfie</h2>
              <div id="card-conta"><img src="../image/icons8-fazer-upload-50.png" alt="" /></div>
            </div>
          </div>

          <button id="salvar-conta">Salvar</button>
        </S.Container>
      </div>
    </>

  )
}

export default Conta;