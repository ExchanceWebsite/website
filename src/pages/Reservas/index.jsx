import React, { useEffect, useState } from 'react';
import '../../CSS/pos-login.css';
import brownLogo from '../../assets/brown-logo.png'
import BaseImage from '../../components/BaseImage';
import Aviao from '../../assets/modo-aviao.png'
import Chat from '../../assets/icons8-bate-papo-cheio-32.png'
import ChatPink from '../../assets/icons8-bate-papo-cheio-42.png'
import Notificacao from '../../assets/icons8-lembrete-de-compromissos-32.png'
import Perfil from '../../assets/icons8-usuário-de-gênero-neutro-32.png'
import Familia from '../../assets/img-opcao2.png' 
import Info from '../../assets/icons8-informações-42.png'
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import httpFetch from '../../hooks/httpFetch';




const Reservas = () => {
  const navigate = useNavigate();
  const nomeUser = window.localStorage.getItem('nomeUser');

  let diaria = window.localStorage.getItem('diaria')
  let acomod = diaria * 30
  let taxa = acomod * 0.15
  let total = acomod + taxa
  let totalString = String.valueOf(total)

  const reservar = () => {
    const host = {idHostFamily: window.localStorage.getItem('id_host')}
    const estudante = {idEstudante:  1}
    const acomodacao = {idAcomodacao: 1}
    

    const reserva = {
        estudante: estudante,
        entrada: window.localStorage.getItem('entrada'),
        saida:window.localStorage.getItem('saida'),
        formaPagamento:"cartão",
        acomodacao: acomodacao,
        host: host
    }


   /*
    {
      "estudante": {
        "idEstudante": 1
      },
      "entrada": "2023-09-03",
      "saida": "2023-09-05",
      "formaPagamento": "cartao",
      "acomodacao": {
        "idAcomodacao": 1
      },
      "host": {
        "idHostFamily": 1
      }
    }
    */
    
    httpFetch.post('/reservas', reserva)
    .then((res) => {
        console.log(res.reserva);
        navigate('/reservaConfirmada')
      }).catch((err) => {
        console.log(err.response);
      });
  }

  const initialOptions = {
    "client-id": "AQTxV2Ltzo58sGVV7iITvMEHFFyMLuG3mOz5bf5QBtRvctteIPOwCr_JM5XRwxN7k1zVpJjKrKbSE3yi",
    currency: "BRL",
    intent: "capture"
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
        <h2 id="frase">Olá, {nomeUser}</h2>
      </div>
      <div id="corpo">
        <div id="header-vertical">

          <div className='menu-aviao'>
            <div className="icon-box">
              <img src={Aviao} alt="" />
            </div>
            <h2>Reservas</h2>
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
            <h2 onClick={() => navigate('/conta')}>Conta</h2>
          </div>
        </div>
        
        <div id="card">
          <div id="informacoes">
            <div id="imagem">
              <div id="imagem-alinhada">
                <img src={Familia} alt="" />
              </div>
            </div>
            <div id="endereco">
              <p id="endereco-p">{window.localStorage.getItem('1adress')}</p>
              <div id="divisoria"></div>
              <p id='nome-familia'>Família {window.localStorage.getItem('nome')}</p>
              <div id="icon-endereco">
                <div><img src={ChatPink} alt="" /></div>
                <div><img src={Info} alt="" /></div>
              </div>

              <div id="data">
                <p id='entrada-saida'>Entrada</p><input value={window.localStorage.getItem('entrada')} type="date" />
                <p id='entrada-saida'>Sáida</p><input value={window.localStorage.getItem('saida')} type="date" />
              </div>

              <div id="divisoria"></div>
            </div>

          </div>
        </div>
        <button onClick={reservar} id="reserva">Confirmar reserva</button>
      </div>
    </>

  )
}

export default Reservas