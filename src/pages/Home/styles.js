import styled from 'styled-components';
import bg from '../../assets/home-bg.png'
import bg2 from '../../assets/home2-bg.png'

export const FirstSection = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const Content1 = styled.div`
  padding-top: 490px;
`;

export const Content2 = styled.div`
  background-color: black;
  height: 20px;
  width: 100%;
  height: 600px;
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
`;