import styled from 'styled-components';
import colors from '../../styles/theme';
import BaseContainer from '../BaseContainer';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  box-shadow: grey 0px 0px 10px;
  max-width: 1266px;
  width: 100%;
  height: 130px;
  /* height: 100%; */
  border-radius: 10px;
  padding: 20px 30px;
  /* z-index: 20; */
  span {
    display: flex;
  }
`
export const BuscaWrapper = styled.button`
  width: 65%;
  height: 19%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 16px 32px 0px rgba(0,0,0,0export const 1);
`;

export const IptWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 35%;
  border-radius: 7px;
`;

export const InputAdress = styled.input`
  height: 89%;
  border-radius: 5px;
  width: 35%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* background: url(pesquisa-de-lupaexport const png) no-repeat center right; */
  border: 1px solid #bfbfbf;
  font-size: 15px;
  padding: 0px 0px 0 43px;
  background-size: 5%;
  background-position-x: 15px;
`

export const InputData = styled.input`
  width: 50%;
  height: 95%;
  border: 1px solid #bfbfbf;
  color: #bfbfbf;
  border-radius: 5px 0 0 5px;
`
export const DataWrapper = styled.div`
  display: flex;
  height: 95%;
`

export const Filtros = styled.select`
  width: 20%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* background: url(seta-suspensaexport const png) no-repeat center right; */
  border: 1px solid #bfbfbf;
  color: #bfbfbf;
  font-size: 15px;
  padding: 0 15px 0 15px;
  background-size: 8%;
  background-position-x: 192px;
`


export const Link = styled.a`
  color: white;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0.02em;
`

export const Container = styled(BaseContainer)`
    display: flex;
    padding-top: 40px;
    align-items: center;
    justify-content: center;
`