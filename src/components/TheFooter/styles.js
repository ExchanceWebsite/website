import styled from 'styled-components';
import BaseContainer from '../BaseContainer';
import colors from '../../styles/theme';

export const Wrapper = styled.footer`
  width: 100%;
  background-color: ${colors.darker_grey};
  z-index: 10;
  padding: 30px 0;
  /* margin-top: 150px */
`

export const Link = styled.a`
  color: white;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.02em;
`
export const Container = styled(BaseContainer)`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 20px;
`

export const StyledA = styled.a`
  color: white;
  font-weight: 300;
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Title = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: 400;
`

export const Contact = styled.p`
  color: white;
  font-weight: 300;
  font-size: 15px;
`

export const SocialMediaWrapper = styled.div`
display: flex;
justify-content: center;
  img {
    display: inline-block;
    margin-right: 10px;
  }
`

export const Faixa = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  &::after,
  &&::before {
    display: block;
    height: 1.5px;
    width: 100vw;
    background-color: white;
    color: white;
    content: "";
 }

  span {
    display: flex;
    gap: 70px;
    margin: 7px 0
  }

`
