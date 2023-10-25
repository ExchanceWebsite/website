import styled, { withTheme } from 'styled-components';
import bg from '../../assets/home-bg.png'
import bg2 from '../../assets/home2-bg.png'
import bg3 from '../../assets/home3-bg.png'
import colors from '../../styles/theme';
import BaseContainer from '../../components/BaseContainer';

export const FirstSection = styled.section`
  /* background-image: linear-gradient(to right, rgba(17, 17, 17, 0.898), rgba(17, 17, 17, 0.783), rgba(17, 17, 17, 0.55), rgba(17, 17, 17, 0.3),rgba(0, 0, 0, 0)), url(${bg3}); */
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;

  span {
    display: flex;
  }

  input {
    color: white;
    background-color: rgba(255, 255, 255, 0.101);
    border: none
  }

  button {
    margin-top: 25px;
  }
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

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  max-width: 500px;
  margin-bottom: 17px;
  color: white;
  margin-right: 45px;
`

export const Question = styled.h2`
  font-weight: 600;
  font-size: 27px;
  max-width: 600px;
  color: ${colors.darker_grey};
  align-self: flex-end;
`

export const Answer = styled.h3`
  font-weight: 300;
  max-width: 600px;
  color: ${colors.darker_grey};
  justify-content: flex-end;
  align-self: flex-end;
  margin-bottom: 30px;
`
export const Content3 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

export const Container = styled(BaseContainer)`
    padding-top: 100px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    transform: translate(-50%, -50%);
    top: 47%;
    left: 50%;
    position: absolute;

    img {
      margin: 0 auto
    }
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: fit-content;
  border-radius: 5px;
`
export const Select = styled.select`
  background-color: transparent;
    margin: 0;
    border: 1px solid ${colors.light_grey};
    border-radius: 3.5px;
    height: 40px;
    width: 279px;
    padding: 0 15px;
    color: grey;
    margin-top: 10px;
`
export const Subtitle = styled.h2`
  font-size: 16px;
  margin: 20px 0 6px;
  color: white;
  font-weight: 500;
  /* text-align: ; */
`