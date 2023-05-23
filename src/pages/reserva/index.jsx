import React, { useEffect, useState } from 'react';
import * as S from '../Cadastro/styles';
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

const Reserva = () => {

  return (
    <>
      <TheHeader></TheHeader>
      <S.FirstSection>
        <S.Container>
        <div id="header">
        <div id="teste"><img src="../image/LogoExchance.png"/></div>
        <h2 id="frase">Olá, Convidado!</h2>
    </div>
    <div id="corpo">
        <div id="header-vertical">
            
                <div id="menu">
                    <img src="../image/icons8-aeroporto-32 (1).png" alt=""/>
                    <h2 id="ajuste">Reservas</h2>
                </div>
                <div id="menu">
                    <img src="../image/icons8-mensagem-de-bate-papo-32.png" alt=""/>
                    <h2>Chat</h2>
                </div>
                <div id="menu">
                    <img src="../image/icons8-alarme-32.png" alt=""/>
                    <h2>Notificações</h2>
                </div>
                <div id="menu">
                    <img src="../image/icons8-usuário-50.png" alt=""/>
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
                        <div><img src="../image/icons8-bate-papo-cheio-24.png" alt=""/></div>
                        <div><img src="../image/icons8-informações-50.png" alt=""/></div>
                    </div>

                    <div id="data">
                        <h3>Entrada</h3><input type="date"/>
                        <h3>Sáida</h3><input type="date"/>
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
                <input type="number"/>
            </div>
        </div>

        <button id="reserva">Confirmar reserva</button>
       

        
    </div>

        </S.Container>
      </S.FirstSection>
      <TheFooter></TheFooter>
    </>
  )
}

export default Reserva;
