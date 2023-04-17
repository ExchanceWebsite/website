
import BaseContainer from '../BaseContainer';
import BaseImage from '../BaseImage';
import * as S from './styles';
import logo from '../../assets/blue-logo.png'
import BaseButton from '../BaseButton';
import colors from '../../styles/theme';

const TheHeader = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <BaseImage
          src={logo}
          size='200'
        />
        <S.Navbar>
          <S.Link>Início</S.Link>
          <S.Link>Busca</S.Link>
          <S.Link>Login</S.Link>
        </S.Navbar>
        <BaseButton
          theme={colors.primary_blue}
          size='230'
        >
          <S.Link>Cadastre-se</S.Link>
        </BaseButton>
      </S.Container>
    </S.Wrapper >
  )
}

export default TheHeader;
