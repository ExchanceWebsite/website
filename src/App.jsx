import { ThemeProvider } from 'styled-components';
import colors from './styles/theme';
import GlobalStyles from './styles/global';
import Home from './pages/Home';

function App() {

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;900&display=swap" rel="stylesheet"></link>

      <div className="app">
        <Home></Home>
        <GlobalStyles />
      </div>
    </>
  )
}

export default App
