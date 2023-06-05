import React, { useRef, useEffect } from "react";
import io from 'socket.io-client'

export default function Join({setChatVisibility, setScocket}) {

    const usernameRef = useRef()

    const handleSubmit = async () => {
        // const username = 'Gabriel'
        // if(username == 'Gabriel') return 
        const socket = await io.connect('http://localhost:3001')
        // socket.emit('set_username', username)
        setScocket(socket)
        setChatVisibility(true)
    }

    React.useEffect(() => {
        handleSubmit();
      },[]);

    return (
        <div>
            <h1>HHHHHHH</h1>
            <p>jj</p>
            <input type="text" ref={usernameRef} placeholder="Nome de usuário" />
            <button >Entrar</button>
        </div>
    )
}