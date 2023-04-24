
import BaseContainer from '../BaseContainer';
import BaseImage from '../BaseImage';
import * as S from './styles';
import blueLogo from '../../assets/blue-logo.png'
import brownLogo from '../../assets/brown-logo.png'
import BaseButton from '../BaseButton';
import colors from '../../styles/theme';
import { useState } from 'react';
import instaImg from '../../assets/instagram-img.png';
import faceImg from '../../assets/facebook-img.png';
import youtubeImg from '../../assets/youtube-img.png'

const TheFooter = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          Dúvidas e outros assuntos
        </S.Title>
        <S.Contact>
          contato@exchance.com
        </S.Contact>
        <S.SocialMediaWrapper>
          <S.Link>
            <BaseImage size='30' src={instaImg} />
          </S.Link>
          <S.Link>
            <BaseImage size='30' src={faceImg} />
          </S.Link>
          <S.Link>
            <BaseImage size='30' src={youtubeImg} />
          </S.Link>
        </S.SocialMediaWrapper>
        <S.Faixa>
          <span>
            <S.Link>Política de privacidade</S.Link>
            <S.Link>Exchange S.A. CNPJ: 27.652.684/0001-62 © 2023 Exchange</S.Link>
            <S.Link>Termos de uso</S.Link>
          </span>
        </S.Faixa>
        <BaseImage
          size='170'
          src={blueLogo} />
      </S.Container>
    </S.Wrapper>
  )
}
export default TheFooter;
