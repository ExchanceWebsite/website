import React, { useRef, useEffect } from "react";
import io from 'socket.io-client';

export default function Joine({ setChatVisibility, setScocket }) {

  const usernameRef = useRef()

  const handleSubmit = async () => {
    const username = 'Gabriel'
    if (!username) return
    const socket = await io.connect('http://localhost:3001')
    // socket.emit('set_username', username)
    setScocket(socket)
    setChatVisibility(true)
  }

  // const [renderizado, setRenderizado] = React.useState(true);

  // React.useEffect(() => {
  //   if (renderizado) {
  //     setRenderizado(false)
  //   }
  //   console.log(renderizado)
  //   console.log("oi")
  // }, []);

  return (
    <div>
      <h1 onClick={console.log("cliquei")}>Ola</h1>
      <p>jj</p>
      <input type="text" ref={usernameRef} placeholder="Nome de usuário" />
      <button>Entrar</button>
    </div>
  )
}