import styled from 'styled-components';
import colors from '../../styles/theme';
import { IMaskInput } from "react-imask";



export const Wrapper = styled.span`
  input {
    background-color: transparent;
    margin: 0;
    border: 1px solid ${colors.light_grey};
    border-radius: 4.5px;
    height: 40px;
    width: 279px;
    padding: 0 15px;
    margin-right: 5px;
  }
`;