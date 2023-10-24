import React, { useEffect, useState } from 'react';
import '../../CSS/pos-login.css';
import BaseImage from '../../components/BaseImage';
import VerticalHeader from '../../components/VerticalHeader';
import brownLogo from '../../assets/brown-logo.png'
import * as S from './styles';
import NotificationPopUp from '../../components/Notification';


const Notification = () => {
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
                <VerticalHeader />
                <S.Container>
                    <NotificationPopUp />
                </S.Container>
            </div >
        </>
    );
}

export default Notification;
