import styled from 'styled-components';
import colors from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  box-shadow: #8080803b 0px 0px 10px;
  width: 310px;
  height: 350px;
  border-radius: 10px;

  padding: 20px 20px;

  span {
    display: flex;
  }

`
export const TextWrapper = styled.div`
  img {
    border-radius: 2px !important;
    width: 340
  }

  flex-direction: column;

  h2 {
  font-size: 14px;
  font-weight: 600;
  margin-top: 30px;
  color: ${colors.darker_grey};
}

  p {
  font-size: 14px;
  color: ${colors.darker_grey};
  }

  p:last-child {
    display: none;
  }

`

