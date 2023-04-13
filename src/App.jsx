import { ThemeProvider } from 'styled-components';
import colors from './styles/theme';
import GlobalStyles from './styles/global';
import Home from './pages/Home';

function App() {

  return (
    <div className="app">
      <Home></Home>
      <GlobalStyles />
    </div>
  )
}

export default App
