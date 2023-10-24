import React from 'react';
import './styles.css';
import Info from '../../assets/icons8-informações-42.png';
import { useState } from 'react';
const NotificationPopUp = () => {
    const [notificacoes, setNotificacoes] = useState([
        {
            image: Info,
            message: 'Nova mensagem de Lariasa Silva'
        },
        {
            image: Info,
            message: 'Parabéns! Você tem um novo convidado!'
        },
        {
            image: Info,
            message: 'Sua acomodação foi cadastrada com sucesso'
        },
    ]);

    function deleteNotification(index) {
        setNotificacoes(notificacoes.slice(index + 1));
    };
    return (
        <div className='container'>
            {notificacoes.map((item, index) => (
                <div index={index} className='notification'>
                    <div>
                        <img src={item.image} />
                        <p>{item.message}</p>
                    </div>
                    <span onClick={() => deleteNotification(index)}>x</span>
                </div>
            ))}
            {notificacoes.length === 0 && (
                <p>
                    Nenhuma notificação, volte mais tarde...

                </p>
            )}
        </div>

    )
}
export default NotificationPopUp;
