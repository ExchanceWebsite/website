import { ThemeProvider } from 'styled-components';
import colors from './styles/theme';
import GlobalStyles from './styles/global';
import Home from './pages/Home/index';
import Busca from './pages/Busca/index';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Detalhes from './pages/Detalhes'

// import Routes from 'pages/routes';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';
import ChatPage from './pages/ChatPage';
import Reservas from './pages/Reservas';
import Conta from './pages/Conta';
import ContaE from './pages/ContaE';
import CadastroAcomodacao from './pages/CadastroAcomodacao';
import ReservasConf from './pages/ReservasConf';
import ReservasHost from './pages/ReservasHost';
import Notification from './pages/Notificacao';

function App() {
  // const [chatVisibility, setChatVisibility] = useState(false)

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;900&display=swap" rel="stylesheet"></link>
      <Router>
        <div className="app">
          {/* {
            chatVisibility ? <Chat /> : <Join />
          } */}
          <Link to='/'></Link>
          <Link to='/busca'></Link>
          {/* <Busca></Busca> */}
          <GlobalStyles />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/busca' element={<Busca />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
          <Route path='/chatPage' element={<ChatPage />}></Route>
          <Route path='/detalhes' element={<Detalhes />}></Route>
          <Route path='/reservas' element={<Reservas />}></Route>
          <Route path='/reservaConfirmada' element={<ReservasConf />}></Route>
          <Route path='/reservasHost' element={<ReservasHost />}></Route>
          <Route path='/conta' element={<Conta />}></Route>
          <Route path='/contaE' element={<ContaE />}></Route>
          <Route path='/cadastroAcomodacao' element={<CadastroAcomodacao />}></Route>
          <Route path='/notificacao' element={<Notification />}></Route>
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
