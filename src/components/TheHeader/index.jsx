
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

const home = true

const Logo = () => {
  var currentHome = false
  const location = useLocation()
  
  if (location.pathname === '/') {
    currentHome = true
  }

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
  var currentHome = false
  const location = useLocation()
  
  if (location.pathname === '/') {
    currentHome = true
  }

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
          size='230'
          color='blue !important'
        >{children}
        </BaseButton>
      ) : (
        <BaseButton
          theme={colors.primary_blue}
          size='230'
        >{children}
        </BaseButton>
      )
    }
  )
}

const Wrapper = ({ children }) => {
  var currentHome = false
  const location = useLocation()
  
  if (location.pathname === '/') {
    currentHome = true
  }

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
          <Link to='/login'>
            <S.Link>Login</S.Link>
          </Link>
        </S.Navbar>
        <Button
          children={<S.Link>Cadastre-se</S.Link>}
        />
      </S.Container>
    </Wrapper >
  )
}

export default TheHeader;
