import styled from 'styled-components';

import hexToRgb from '../../helpers/hex-to-rgba';
import IRadio from '../types/iradio';
import rgbToRgba from '../../helpers/rgb-to-rgba';

type TRadioStylish = {
  backgroundColor: string,
  indeterminate: boolean,
  isIconDisabled?: boolean,
  color: string,
  borderColor: string,
};

const RadioStyled =
  styled.input.attrs({ type: 'radio' }) <
  TRadioStylish >
  `
    display: none;
  & + label:before {
    box-sizing: border-box;
    display:  ${(props: TRadioStylish) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    height: 20px;
    width: 20px;
    min-width: 20px;
    min-height: 20px;
    border: 2px solid ${(props: TRadioStylish) => rgbToRgba(props.borderColor, 0.85)};    
    border-radius: 50%;
    margin-right: 5px;
    background-color: ${(props: TRadioStylish) => (props?.color ? props.color : '#ffffff')};
  }  
  &:disabled + label:before {
    display:  ${(props: TRadioStylish) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    background-color: #bdbdbd;
  }
  &:checked + label:before {
    display:  ${(props: TRadioStylish) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;    
  }
  &:checked + label:after {
    position: absolute;
    display:  ${(props: TRadioStylish) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 6px;
    background-color: ${(props: TRadioStylish) => props.backgroundColor};
  }
  &:disabled:checked + label:after {
    position: absolute;
    display:  ${(props: TRadioStylish) => (props.isIconDisabled === true ? 'none' : 'block')};
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 6px;
    background-color: #ffffff;
  }
`;
export default RadioStyled;
