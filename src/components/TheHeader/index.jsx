
import BaseContainer from '../BaseContainer';
import BaseImage from '../BaseImage';
import * as S from './styles';
import blueLogo from '../../assets/blue-logo.png'
import brownLogo from '../../assets/brown-logo.png'
import BaseButton from '../BaseButton';
import colors from '../../styles/theme';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

var currentHome = Boolean

const Logo = () => {
  const location = useLocation()
  location.pathname === '/' ? currentHome = true : currentHome = false

  const [blueHeader, setBlueHeader] = useState(currentHome ? false : true)
  const changeHeader = () => {
    if (window.scrollY > 240 || !currentHome) {
      setBlueHeader(true)
    } else {
      setBlueHeader(false)
    }
  }

  window.addEventListener('scroll', changeHeader);

  return (
    {
      ...blueHeader ? (
        <BaseImage
          src={brownLogo}
          size='200'
        />
      ) : (
        <BaseImage
          src={blueLogo}
          size='200'
        />
      )
    }
  )
}

const Button = ({ children }) => {
  const location = useLocation()
  location.pathname === '/' ? currentHome = true : currentHome = false

  const [blueHeader, setBlueHeader] = useState(currentHome ? false : true)
  const changeHeader = () => {
    if (window.scrollY > 240 || !currentHome) {
      setBlueHeader(true)
    } else {
      setBlueHeader(false)
    }
  }

  window.addEventListener('scroll', changeHeader);

  return (
    {
      ...blueHeader ? (
        <BaseButton
          theme={colors.darker_brown}
          size='200'
          color='blue !important'
        >{children}
        </BaseButton>
      ) : (
        <BaseButton
          theme={colors.primary_blue}
          size='200'
        >{children}
        </BaseButton>
      )
    }
  )
}


const Wrapper = ({ children }) => {
  const location = useLocation()
  location.pathname === '/' ? currentHome = true : currentHome = false

  const [blueHeader, setBlueHeader] = useState(currentHome ? false : true)
  const changeHeader = () => {
    if (window.scrollY > 240 || !currentHome) {
      setBlueHeader(true)
    } else {
      setBlueHeader(false)
    }
  }

  window.addEventListener('scroll', changeHeader);

  return (
    {
      ...blueHeader ? (
        <S.Wrapper
          style={{
            backgroundColor: colors.primary_blue,
          }}
        >
          {children}
        </S.Wrapper>
      ) : (
        <S.Wrapper
          style={{
            backgroundColor: 'transparent'
          }}
        >
          {children}
        </S.Wrapper>
      )
    }
  )
}

const TheHeader = () => {
  const nome = localStorage.getItem('nomeHost');
  return (
    <Wrapper>
      <S.Container>
        <Link to='/'>
          <Logo />
        </Link>
        <S.Navbar>
          <Link to='/'>
            <S.Link>Início</S.Link>
          </Link>
          <Link to='/busca'>
            <S.Link>Busca</S.Link>
          </Link>
          {!nome && (
            <>
              <Link to='/login'>
                <S.Link>Login</S.Link>
              </Link>
            </>
          )}
        </S.Navbar>
        {nome ? (
          <Link to='/conta'>
            <S.LinkUser>Olá, {nome}</S.LinkUser>
          </Link>
        ) : (
          <Link to='/cadastro'>
            <Button
              children={<S.Link>Cadastre-se</S.Link>}
            />
          </Link>)}
      </S.Container>
    </Wrapper >
  )
}

export default TheHeader;
