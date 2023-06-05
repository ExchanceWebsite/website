
import React, { useEffect, useState } from 'react';
import '../../CSS/pos-login.css';
import brownLogo from '../../assets/brown-logo.png'
import BaseImage from '../../components/BaseImage';


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