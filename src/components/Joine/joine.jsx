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

  React.useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <></>
  )
}