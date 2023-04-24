
import BaseContainer from '../BaseContainer';
import BaseImage from '../BaseImage';
import * as S from './styles';
import blueLogo from '../../assets/blue-logo.png'
import brownLogo from '../../assets/brown-logo.png'
import BaseButton from '../BaseButton';
import colors from '../../styles/theme';
import { useState } from 'react';
const home = true

const Logo = () => {
  const [blueHeader, setBlueHeader] = useState(false)
  const changeHeader = () => {
    if (window.scrollY > 240 && home) {
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
  const [blueHeader, setBlueHeader] = useState(false)
  const changeHeader = () => {
    if (window.scrollY > 240 && home) {
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
  const [blueHeader, setBlueHeader] = useState(false)
  const changeHeader = () => {
    if (window.scrollY > 240 && home) {
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
            // position: 'fixed'
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
        <Logo />
        <S.Navbar>
          <S.Link>Início</S.Link>
          <S.Link>Busca</S.Link>
          <S.Link>Login</S.Link>
        </S.Navbar>
        <Button
          children={<S.Link>Cadastre-se</S.Link>}
        />
      </S.Container>
    </Wrapper >
  )
}

export default TheHeader;
