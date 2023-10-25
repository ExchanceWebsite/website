

import React from 'react';
import Aviao from '../../assets/modo-aviao.png'
import Chat from '../../assets/icons8-bate-papo-cheio-32.png'
import Perfil from '../../assets/icons8-usuário-de-gênero-neutro-32.png'
import Notification from '../../assets/notification.png'
import { useNavigate } from 'react-router-dom';
import Lupa from '../../assets/lupa.png'
import Logout from '../../assets/logout.png'
import '../../CSS/pos-login.css';

const VerticalHeader = () => {
    const navigate = useNavigate();
    function deslogar() {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div id="header-vertical">
            <div id='menu'>
                <div className="icon-box">
                    <img src={Aviao} alt="" />
                </div>
                <h2 onClick={() => navigate('/reservasHost')}>Acomodações</h2>
            </div>
            <div id="menu">
                <div className="icon-box">
                    <img src={Chat} alt="" />
                </div>
                <h2 onClick={() => navigate('/chatPage')}>Chat</h2>
            </div>
            <div id="menu">
                <div className="icon-box">
                    <img src={Notification} alt="" />
                </div>
                <h2 onClick={() => navigate('/notificacao')}>Notificações</h2>
            </div>
            <div id="menu">
                <div className="icon-box">
                    <img src={Perfil} alt="" />
                </div>
                <h2 onClick={() => navigate('/conta')}>Conta</h2>
            </div>
            <div id="menu">
                <div className="icon-box">
                    <img src={Logout} alt="" />
                </div>
                <h2 onClick={() => deslogar()}>Sair</h2>
            </div>
        </div>
    )
}



export default VerticalHeader;


