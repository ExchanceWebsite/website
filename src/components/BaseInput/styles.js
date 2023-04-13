import styled from 'styled-components';
import colors from '../../styles/theme';


export const Wrapper = styled.span`
  input {
    background-color: transparent;
    margin: 0;
    border: 1px solid ${colors.light_grey};
    border-radius: 3.5px;
    height: 40px;
    width: 270px;
    padding: 0 15px;
  }
`;