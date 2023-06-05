import React, { useRef, useState, useEffect } from "react";
// import * as T from './styles'
import * as S from './styles';
import Voltar from '../../assets/seta-esquerda.png'
import Perfil from '../../assets/perfil.png'
import Familia from '../../assets/familia.jpeg'
import httpFetch from '../../hooks/httpFetch';


export default function Chat({ socket }) {

  const [localidade, setLocalidade] = useState();

  useEffect(() => {
    httpFetch.get(`/localidades/${localDigitado}`, localidade)
      .then((response) => setHost(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const [userName, setUserName] = useState('Alex');
  const messageRef = useRef()
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    console.log(window.sessionStorage.getItem('nome_user'))
    setUserName(window.sessionStorage.getItem('nome_user'))
    console.log(userName)
  }, [])

  useEffect(() => {
    socket.on('receive_message', data => {
      setMessageList((current) => [...current, data])
    })

    return () => socket.off('receive_message')
  }, [socket])

  const handleSubmit = () => {
    const message = messageRef.current.value
    if (!message.trim()) return

    socket.emit('message', message)
    clearInput()
  }

  const clearInput = () => {
    messageRef.current.value = ''
  }

  return (
    <S.Container>
      <S.ContainerChat>
        <S.NavBarFamilia>
          <S.Voltar>
            <S.ImgVoltar src={Voltar}></S.ImgVoltar>
          </S.Voltar>
          <S.NomeFamilia>
            <S.ImgPerfilFamilia src={Perfil}></S.ImgPerfilFamilia>
            <S.NomeFamiliaText>{familys.family.nome}</S.NomeFamiliaText>
          </S.NomeFamilia>
        </S.NavBarFamilia>
        <S.BoxChat>
          <S.BoxMensagem>
            <S.Mensagem>
              {
                messageList.map((message, index) => (
                  <p key={index}>{userName} : {message.text}</p>
                ))
              }
            </S.Mensagem>



            {/* <h1>Chat</h1>
                {
                    messageList.map((message, index) => (
                        <p key={index}>{message.author} : {message.text}</p>
                    ))
                }
                <input type="text" ref={messageRef} placeholder="mensagem" />
                <button onClick={() => handleSubmit()}>Enviar</button> */}
          </S.BoxMensagem>
          <S.BoxInput>
            <S.Wrapper>
              <input type="text" ref={messageRef} placeholder="Mensagem..." />
              <button onClick={() => handleSubmit()}>Enviar</button>
            </S.Wrapper>
          </S.BoxInput>
        </S.BoxChat>
      </S.ContainerChat>
      <S.ConatinerDetalhes>
        <S.NavBarDetalhes>
          <S.NavBarDetalhesTexto>
            Detalhes
          </S.NavBarDetalhesTexto>
        </S.NavBarDetalhes>
        <S.Boxdetalhes>
          <S.BoxdetalhesImg src={Familia}></S.BoxdetalhesImg>
        </S.Boxdetalhes>
        <S.Linha></S.Linha>
        <S.BoxDescricao>
          <S.DescricaoTitulo>
            <S.DescricaoTituloTexto>Descrição</S.DescricaoTituloTexto>
          </S.DescricaoTitulo>
          <S.BoxDescricaoTexto>
            {/* {hostFamily.descricao} */}
            Como host family, oferecemos uma acomodação confortável, com um quarto privativo para o estudante, mobiliado com cama, mesa de estudo, armário e acesso à internet. Além disso, proporcionamos refeições caseiras, adaptadas às preferências alimentares do estudante, e compartilhamos momentos em família durante as refeições.
          </S.BoxDescricaoTexto>
        </S.BoxDescricao>
      </S.ConatinerDetalhes>
    </S.Container>
  )
}