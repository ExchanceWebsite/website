import styled from 'styled-components';
import bg2 from '../../assets/home2-bg.png'
import bg3 from '../../assets/home3-bg.png'
import colors from '../../styles/theme';
import BaseContainer from '../../components/BaseContainer';

export const FirstSection = styled.section`
  background-image: linear-gradient( to top right, white, white,  white, transparent, transparent), url(${bg3});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  /* margin-bottom: 85px; */

  ul {
  list-style: none;
}
`;

export const Content1 = styled.div`
  padding-top: 394px;
  padding-bottom: 80px;
`;

export const Content2 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 100px;
  margin-top: 30px;
  /* justify-content: center; */
  /* justify-content: center; */
`;

export const CarouselWrapper = styled.div`
  display: inline;
`;

export const CardModule = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

export const SecSection = styled.section`
  background-image: url(${bg2});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  padding-top: 60px;
  position: relative;
`;

export const ThirdSection = styled.section`
  background-image: url(${bg3});
  background-size: cover;
  background-repeat: no-repeat;
  /* height: 100vh; */
  padding-top: 60px;
  position: relative;
  display: flex;
  background-position: 60%;
  padding-bottom: 90px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  max-width: 500px;
  margin-bottom: 10px;
`

export const Question = styled.h2`
  font-weight: 600;
  font-size: 27px;
  max-width: 600px;
  color: ${colors.darker_grey};
  /* text-align: right; */
  align-self: flex-end;

  /* &:nth-child(even) {
    align-self: flex-start;
  } */
`

export const Answer = styled.h3`
  font-weight: 300;
  max-width: 600px;
  color: ${colors.darker_grey};
  justify-content: flex-end;
  /* text-align: right; */
  align-self: flex-end;
  margin-bottom: 30px;

  /* &:nth-child(even) {
    align-self: flex-start;
  } */
`
export const Content3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  /* justify-content: center; */
`;

export const Container = styled(BaseContainer)`
    padding-top: 130px;
    margin-bottom: 60px;
    padding-bottom: 60px;
    /* display: flex; */
    flex-direction: column;
    height: 100vh;
    align-items: center;
    /* max-width: 1700px */
    /* gap: 50px; */
    img {
      margin: 0 auto
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `

export const Descricao = styled.h3`
 font-size: 14px;
 font-weight: 400;
 max-width: 800px;
 margin-top: 20px;
`

export const ContainerDescricao = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    padding: 40px;
`
export const Endereco = styled.p`
font-weight: 600;
margin-top: 40px;
`
