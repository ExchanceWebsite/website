import React, { useEffect, useState } from 'react';

import '../../CSS/pos-login.css';
import brownLogo from '../../assets/brown-logo.png'
import BaseImage from '../../components/BaseImage';
import Aviao from '../../assets/modo-aviao.png'
import Chat from '../../assets/icons8-bate-papo-cheio-32.png'
import ChatPink from '../../assets/icons8-bate-papo-cheio-42.png'
import Notificacao from '../../assets/icons8-lembrete-de-compromissos-32.png'
import Perfil from '../../assets/icons8-usuário-de-gênero-neutro-32.png'
import Lupa from '../../assets/lupa.png'
import Logout from '../../assets/logout.png'
import Familia from '../../assets/img-opcao2.png'
import Info from '../../assets/icons8-informações-42.png'
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";




const Reservas = () => {

  const [dataIni, setDataIni] = useState()
  const handleChangeIni = (currentDate) => {
    const newDate = (currentDate.target.value);
    setDataIni(newDate);
  }

  const [dataFim, setDataFim] = useState()
  const handleChangeFim = (currentDate) => {
    const newDate = (currentDate.target.value);
    setDataFim(newDate);
  }

  const navigate = useNavigate();
  const nomeUser = window.localStorage.getItem('nomeUser');
  let diaIni = dataIni
  let diaFim = dataFim

  let diaria = window.localStorage.getItem('diaria')


  let totalString = total + ""

  function reservar() {
    navigate('/reservaConfirmada')
  }

  const initialOptions = {
    "client-id": "AQTxV2Ltzo58sGVV7iITvMEHFFyMLuG3mOz5bf5QBtRvctteIPOwCr_JM5XRwxN7k1zVpJjKrKbSE3yi",
    currency: "BRL",
    intent: "capture"
  }

  const date1 = new Date(dataIni);
  const date2 = new Date(dataFim);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const [isPay, setIsPay] = useState(false)


  const handleIsPay = () => {
    setIsPay(!isPay);
  };
  let acomod = diaria * diffDays
  let taxa = acomod * 0.10
  var total = acomod + taxa
  var f2 = total.toLocaleString('en-us', { minimumFractionDigits: 2 });

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
            <h2 onClick={() => navigate('/chatPage')}>Chat</h2>
          </div>

          <div id="menu">
            <div className="icon-box">
              <img src={Perfil} alt="" />
            </div>
            <h2 onClick={() => navigate('/contaE')}>Conta</h2>
          </div>
          <div id="menu">
            <div className="icon-box">
              <img src={Lupa} alt="" />
            </div>
            <h2 onClick={() => navigate('/')}>Buscar</h2>
          </div>
          <div id="menu">
            <div className="icon-box">
              <img src={Logout} alt="" />
            </div>
            <h2 onClick={() => deslogar()}>Sair</h2>
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
              <p id="endereco-p">Rua Lorem Ipsum Sit, 3000</p>
              <div id="divisoria"></div>
              <p id='nome-familia'>Família {window.localStorage.getItem('nomeClicado')}</p>
              <div id="icon-endereco">
                <div><img src={ChatPink} alt="" /></div>
                <div><img src={Info} alt="" /></div>
              </div>

              <div id="data">
                <p id='entrada-saida'>Entrada</p><input onChange={handleChangeIni} type="date" value={dataIni} id='dataIni' />
                <p id='entrada-saida'>Sáida</p><input onChange={handleChangeFim} type="date" id='dataFim' />
                {console.log(dataIni)}
                {console.log(dataFim)}
              </div>

              <div id="divisoria"></div>
            </div>

          </div>
        </div>

        <div id="card-pagamento">
          <div id="informacoes-pagamento">
            <h2>Taxa de acomodação</h2>
            <h2>{acomod}</h2>
          </div>
          <div id="informacoes-pagamento">
            <h2>Taxa de serviço Exchance</h2>
            <h2>{taxa}</h2>
          </div>

          <div id="divisoria"></div>

          <div id="total">
            <h2>Total</h2>
            <h2>R$ {total} </h2>
          </div>


          <div id="selecao-pagamento">
            <h1>Pagamento</h1>
            {isPay == false ?
              <button onClick={handleIsPay}>Iniciar pagamento</button>
              : null}
            {isPay == true ?
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "BRL",
                            value: total,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      const name = details.payer.name.given_name;
                      alert(`Transaction completed by ${name}`);
                    });
                  }}
                />
              </PayPalScriptProvider>
              : null}
          </div>
        </div>
        {isPay == true ?
        <button onClick={reservar} id="reserva">Confirmar reserva</button>
          : null}
        </div>
    </>

  )
}

export default Reservas

function deslogar() {
  localStorage.clear();
  navigate('/')
}