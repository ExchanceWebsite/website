import { ThemeProvider } from 'styled-components';
import colors from './styles/theme';
import GlobalStyles from './styles/global';
import Home from './pages/Home/index';
import Busca from './pages/Busca/index';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Reserva from './pages/reserva';

// import Routes from 'pages/routes';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;900&display=swap" rel="stylesheet"></link>
      <Router>
        <div className="app">
          <Link to='/'></Link>
          <Link to='/busca'></Link>
          {/* <Busca></Busca> */}
          <GlobalStyles />
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='busca' element={<Busca/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='cadastro' element={<Cadastro/>}></Route>
          <Route path='reserva' element={<Reserva/>}></Route>
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
