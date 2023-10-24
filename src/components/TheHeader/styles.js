import styled from 'styled-components';
import BaseContainer from '../BaseContainer';
import colors from '../../styles/theme';

export const Wrapper = styled.header`
  width: 100vw;
  background-color: transparent;
  height: 85px;
  align-items: center;
  display: flex;
  position: fixed;
  z-index: 10;
`

export const Navbar = styled.nav`
  align-items: center;
  display: flex;
  justify-content:flex-end;
  gap: 50px;
  width: 100%;
  padding: 0 80px;
  font-weight: 400;
`

export const Link = styled.a`
  color: white;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0.02em;
`
export const LinkUser = styled.a`
  color: white;
  font-size: 17px;
  display: flex;
  width: 90px;
  margin-top: 18px;
  
`
export const Container = styled(BaseContainer)`
  display: flex !important;
  justify-content: space-between;
`
export const StyledA = styled.a`
  color: white;
  font-weight: 300;
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 10px;
`
