import styled from 'styled-components';
import bg from '../../assets/home-bg.png'
import bg2 from '../../assets/home2-bg.png'
import bg3 from '../../assets/home3-bg.png'
import colors from '../../styles/theme';

export const FirstSection = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const Content1 = styled.div`
  padding-top: 394px;
`;

export const Content2 = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
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
  font-size: 60px;
  font-weight: 500;
  max-width: 500px;
`

export const Question = styled.h2`
  font-weight: 600;
  font-size: 27px;
  max-width: 600px;
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
  width: 100%;
  flex-direction: column;
  gap: 20px;
  /* justify-content: center; */
`;
