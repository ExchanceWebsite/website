import styled from 'styled-components';
import bg from '../../assets/home-bg.png'
import bg2 from '../../assets/home2-bg.png'
import bg3 from '../../assets/home3-bg.png'
import colors from '../../styles/theme';
import BaseContainer from '../../components/BaseContainer';

export const FirstSection = styled.section`
  background-image: linear-gradient( black, 4%, transparent), url(${bg3});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  /* margin-bottom: 85px; */
`;

export const Content1 = styled.div`
  padding-top: 394px;
  padding-bottom: 80px;
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
  font-size: 40px;
  font-weight: 500;
  max-width: 500px;
  margin-bottom: 40px;
  color: ${colors.darker_grey};
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
  width: 100%;
  flex-direction: column;
  gap: 20px;
  /* justify-content: center; */
`;

export const Container = styled(BaseContainer)`
    padding-top: 100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding-left: 80px;

    img {
      margin: 0 auto
    }
`
export const ButtonWrapper = styled.div`
  display: flex;
`
export const Select = styled.select`
  background-color: transparent;
    margin: 0;
    border: 1px solid ${colors.light_grey};
    border-radius: 3.5px;
    height: 40px;
    width: 270px;
    padding: 0 15px;
`
