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



const ReservasConf = () => {
  const navigate = useNavigate();
  const nomeUser = window.localStorage.getItem('nome_user');

  function reservar() {
    alert("Reserva confirmada!")
    navigate('/reservaConfirmada')
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
            <h2>Chat</h2>t 
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
              <p id="endereco-p">Rua Laurentino de Moraes, 315</p>
              <div id="divisoria"></div>
              <p id='nome-familia'>Reserva Confirmada </p>

              <div id="icon-endereco">
                <div><img src={ChatPink} alt="" /></div>
                <div><img src={Info} alt="" /></div>
              </div>

             

              <div id="divisoria"></div>
            </div>

          </div>
        </div>


      </div>
    </>

  )
}

export default ReservasConf