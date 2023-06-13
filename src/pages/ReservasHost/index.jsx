
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


const ReservasHost = () => {
  const navigate = useNavigate();
  // let nomeUser = window.localStorage.getItem('nome');

  const [paisHost, setPaisHost] = useState();
  const [cidadeHost, setCidadeHost] = useState();
  const [cepHost, setCepHost] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [descricao, setDescricao] = useState();
  const [verificado, setVerificado] = useState();
  const [senha, setSenha] = useState();
  const [frente, setFrente] = useState();
  const [verso, setVerso] = useState();
  const [selfie, setSelfie] = useState();
  const [arquivo, setArquivo] = useState();

  useEffect(() => {
    setNome(window.localStorage.getItem('nomeHost'))
    setEmail(window.localStorage.getItem('emailHost'))
  }, [])

  function buscarDados() {
    httpFetch.get(`/hosts/host?emai=${email}&nome=${nome}`,)
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem('idHost', res.data.idHostFamily);
        setId(window.localStorage.getItem('idHost'))
        setNome(res.data.nome)
        setEmail(res.data.email)
        setVerificado(res.data.verificado)
        setDescricao(res.data.descricao)
        setSenha(res.data.senha)
        setPaisHost(window.localStorage.getItem('paisHost'))
        setCidadeHost(window.localStorage.getItem('cidadeHost'))
        setCepHost(window.localStorage.getItem('cepHost'))
      }).catch((err) => {
        console.clear();
        console.log(err.response);
      })
  }

  useEffect(() => {
    buscarDados
  }, [])

  const upload = (event) => {
    console.log(arquivo, "valor")
    setArquivo(event.target.value)

    window.localStorage.setItem('frente', frente)
    window.localStorage.setItem('verso', verso)
    window.localStorage.setItem('selfie', selfie)

    const uploadUser = { arquivo };
    event.target.parentNode.style.backgroundImage = `url(${event.target.value})`
    httpFetch.post(`/estudantes?id=${id}`, uploadUser)
      .then((res) => {
        console.log(res.data);
        navigate("/login")
      }).catch((err) => {
        // console.clear();
        console.log(err.response);
        console.log(uploadUser);
      });

    // window.localStorage.clear();
    // window.localStorage.setItem('USERNAME', nome);
  }

  const imagens = () => {

  }

  function cadastroLocal() {
    setVerificado("Verificado por VerifyHost")
    let localidade = { "idLocalidade": "1" };
    const cadastroUser = { nome, verificado, descricao, email, senha, localidade };

    httpFetch.put(`/hosts?id=${id}`, cadastroUser)
      .then((res) => {
        console.log(res.data, "foi");
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
            <h2 onClick={() => navigate('/reservasHost')}>Reservas</h2>
          </div>
          <div id="menu">
            <div className="icon-box">
              <img src={Chat} alt="" />
            </div>
            <h2>Chat</h2>
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
              placeholder='E-mail'
              type='text'
              insert={setEmail}
              value={email}
            ></BaseInput>
            <BaseInput
              placeholder='Descrição'
              type='text'
              insert={setDescricao}
              onFocus={buscarDados}
              value={descricao}
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
              onBlur={(event) => window.localStorage.setItem('paisHost', event.target.value)}
              value={paisHost}
              onFocus={buscarDados}
            ></BaseInput>
            <BaseInput
              placeholder='Cidade'
              type='text'
              onBlur={(event) => window.localStorage.setItem('cidadeHost', event.target.value)}
              value={cidadeHost}
            ></BaseInput>
            <BaseInput
              placeholder='CEP'
              type='text'
              onBlur={(event) => window.localStorage.setItem('cepHost', event.target.value)}
              value={cepHost}
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
              <div id="card-conta">
                <BaseInput type="file" insert={setFrente} onBlur={upload} />
              </div>
            </div>
            <div>
              <h2>Identidade Verso</h2>
              <div id="card-conta">
                <BaseInput type="file" insert={setVerso} onBlur={upload} />
              </div>
            </div>
            <div>
              <h2>Selfie</h2>
              <div id="card-conta">
                <BaseInput type="file" insert={setSelfie} onBlur={upload} />
              </div>
            </div>
          </div>

          <button>Enviar arquivo</button>

          <button id="salvar-conta">Salvar</button>
        </S.Container>
      </div>
    </>

  )
}

export default ReservasHost;