import React, { useEffect, useState } from 'react';
import * as S from './styles';
import TheHeader from '../../components/TheHeader';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TheFooter from '../../components/TheFooter';
import Chat from '../../components/Chat';
import Join from '../../components/join/join';


const ChatPage = () => {
  const [chatVisibility, setChatVisibility] = useState(false)
  const [socket, setScocket] = useState(null)

  return (
    <>
        {/* <S.Container> */}
          {
            chatVisibility ? <Chat socket={socket} setChatVisibility={setChatVisibility} /> : <Join setScocket={setScocket} setChatVisibility={setChatVisibility} />
          }
        {/* </S.Container> */}

        {/* <div>
                <h1>Chat</h1>
                {
                    messageList.map((message, index) => (
                        <p key={index}>{message.author} : {message.text}</p>
                    ))
                }
                <input type="text" ref={messageRef} placeholder="mensagem" />
                <button onClick={() => handleSubmit()}>Enviar</button>
            </div> */}
    </>
  )
}

export default ChatPage;
