
import React, { useEffect, useState } from 'react';
import '../../CSS/pos-login.css';
import brownLogo from '../../assets/brown-logo.png'
import BaseImage from '../../components/BaseImage';

import Aviao from '../../assets/modo-aviao.png'
import Chat from '../../assets/icons8-bate-papo-cheio-32.png'
import Notificacao from '../../assets/icons8-lembrete-de-compromissos-32.png'
import Perfil from '../../assets/icons8-usuário-de-gênero-neutro-32.png'


const Conta = () => {

  return (
    <>
      <div id="header">
        <div id="teste">
          <BaseImage
            src={brownLogo}
            size='180'
          />
        </div>
        <h2 id="frase">Olá, Convidado!</h2>
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
      </div>
    </>

  )
}

export default Conta;