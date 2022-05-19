import styled from 'styled-components';

import hexToRgb from '../../helpers/hex-to-rgba';
import IRadio from '../types/iradio';

const RadioStyled =
  styled.input.attrs({ type: 'radio' }) <
  IRadio >
  `
    display: none;
  & + label:before {
    box-sizing: border-box;
    display:  ${(props: IRadio) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    height: 20px;
    width: 20px;
    min-width: 20px;
    min-height: 20px;
    border: 2px solid ${(props: IRadio) => hexToRgb(props.color, 0.85)};    
    border-radius: 50%;
    margin-right: 5px;
    background-color: #ffffff;
  }  
  &:disabled + label:before {
    display:  ${(props: IRadio) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    background-color: #bdbdbd;
  }
  &:checked + label:before {
    display:  ${(props: IRadio) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;    
  }
  &:checked + label:after {
    position: absolute;
    display:  ${(props: IRadio) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 6px;
    background-color: ${(props: IRadio) => props.backgroundColor};
  }
  &:disabled:checked + label:after {
    position: absolute;
    display:  ${(props: IRadio) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 6px;
    background-color: #ffffff;
  }
`;
export default RadioStyled;
