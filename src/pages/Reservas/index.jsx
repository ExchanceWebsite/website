
import React, { useEffect, useState } from 'react';
import '../../CSS/pos-login.css';
import brownLogo from '../../assets/brown-logo.png'
import BaseImage from '../../components/BaseImage';

const Reservas = () => {

  const nomeUser = window.sessionStorage.getItem('nome_user');

  return (
    <>
      <div id="header">
        <div id="teste">
          <BaseImage
            src={brownLogo}
            size='180'
          />
        </div>
        <h2 id="frase">Olá, {nomeUser}</h2>
      </div>
      <div id="corpo">
        <div id="header-vertical">

          <div id="menu">
            <img src="../image/icons8-aeroporto-32 (1).png" alt="" />
            <h2 id="ajuste">Reservas</h2>
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
            <h2>Conta</h2>
          </div>
        </div>

        <div id="card">
          <div id="informacoes">
            <div id="imagem">
              <div id="imagem-alinhada"></div>
            </div>
            <div id="endereco">
              <h1>Rua Lorem Ipsum Sit, 3000</h1>
              <div id="divisoria"></div>
              <h2>Família Schwartz</h2>

              <div id="icon-endereco">
                <div><img src="../image/icons8-bate-papo-cheio-24.png" alt="" /></div>
                <div><img src="../image/icons8-informações-50.png" alt="" /></div>
              </div>

              <div id="data">
                <h3>Entrada</h3><input type="date" />
                <h3>Sáida</h3><input type="date" />
              </div>

              <div id="divisoria"></div>
            </div>

          </div>
        </div>

        <div id="card-pagamento">
          <div id="informacoes-pagamento">
            <h2>Taxa de acomodação</h2>
            <h2>R$ 1000</h2>
          </div>
          <div id="informacoes-pagamento">
            <h2>Taxa de Mantimento</h2>
            <h2>R$ 1000</h2>
          </div>
          <div id="informacoes-pagamento">
            <h2>Taxa de serviço Exchance</h2>
            <h2>R$ 1000</h2>
          </div>

          <div id="divisoria"></div>

          <div id="total">
            <h2>Total</h2>
            <h2>R$ 2000 </h2>
          </div>

          <div id="selecao-pagamento">
            <h1>Pagamento</h1>
            <input type="number" />
          </div>
        </div>

        <button id="reserva">Confirmar reserva</button>



      </div>
    </>

  )
}

export default Reservas