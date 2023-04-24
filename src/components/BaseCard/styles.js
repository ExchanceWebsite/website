import styled from 'styled-components';
import colors from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  box-shadow: #8080803b 0px 0px 10px;
  max-width: 350px;
  width: 100%;
  height: 150px;
  border-radius: 10px;
  /* z-index: 20; */
  padding: 20px 20px;
  gap: 20px;

  span {
    display: flex;
  }
`

export const CardImg = styled.img`

`
export const TextWrapper = styled.div`
  display: grid;
  gap: 5px;

  h2 {
  font-size: 18px;
  font-weight: 600;
  color: ${colors.darker_brown};
}

  p {
  font-size: 15px;
  color: ${colors.darker_grey};
}

`


// export const BuscaWrapper = styled.button`
//   width: 65%;
//   height: 19%;
//   border-radius: 15px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   box-shadow: 0px 16px 32px 0px rgba(0,0,0,0export const 1);
// `;

// export const IptWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   width: 90%;
//   height: 35%;
//   border-radius: 7px;
// `;

// // export const ContainerBusca = styled.div`

// // `

// // export const ContainerIputs = styled.div`

// // `

// // export const InputStyle = styled.div `

// // `

// export const InputAdress = styled.input`
//   height: 89%;
//   border-radius: 5px;
//   width: 35%;
//   appearance: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   /* background: url(pesquisa-de-lupaexport const png) no-repeat center right; */
//   border: 1px solid #bfbfbf;
//   font-size: 15px;
//   padding: 0px 0px 0 43px;
//   background-size: 5%;
//   background-position-x: 15px;
// `

// export const InputData = styled.input`
//   width: 50%;
//   height: 95%;
//   border: 1px solid #bfbfbf;
//   color: #bfbfbf;
//   border-radius: 5px 0 0 5px;
// `
// export const DataWrapper = styled.div`
//   display: flex;
//   height: 95%;
// `

// export const Filtros = styled.select`
//   width: 20%;
//   appearance: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   /* background: url(seta-suspensaexport const png) no-repeat center right; */
//   border: 1px solid #bfbfbf;
//   color: #bfbfbf;
//   font-size: 15px;
//   padding: 0 15px 0 15px;
//   background-size: 8%;
//   background-position-x: 192px;
// `
