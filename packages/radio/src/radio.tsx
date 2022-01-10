import styled from 'styled-components';

import hexToRgb from '../../helpers/hex-to-rgb';
import Iradio from '../types/iradio';

const RadioStyled =
  styled.input.attrs({ type: 'Radio' }) <
  Iradio >
  `
    display: none;
  & + label:before {
    box-sizing: border-box;
    display: block;
    content: '';
    height: 20px;
    width: 20px;
    border: 2px solid ${(props: Iradio) => hexToRgb(props.color, 0.85)};    
    border-radius: 50%;
    margin-right: 5px;
    background-color: #ffffff;
  }  
  &:disabled + label:before {
    display: block;
    content: '';
    background-color: #bdbdbd;
  }
  &:checked + label:before {
    display: block;
    content: '';
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;    
  }
  &:checked + label:after {
    position: absolute;
    display: block;
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 6px;
    background-color: ${(props: Iradio) => props.backgroundColor};
  }
    &:disabled:checked + label:after {
      position: absolute;
      display: block;
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      left: 6px;
      background-color: #ffffff;
    }
`;
export default RadioStyled;
