import styled from 'styled-components';

import Variants from '../../enums/variants';
import rgbToRgba from '../../../helpers/rgb-to-rgba';
import IInput from '../types/iinput';

const Input =
  styled('input') <
  IInput >
  `
  box-sizing: border-box;
  font-size: ${(props: IInput) => props.fontSize}px;
  width: 100%;
  height: ${(props: IInput) => (props?.variant === Variants.Outlined ? props.height : props.height - 1)}px;
  text-align: ${(props: IInput) => props?.textAlign};   
  padding: 8px 10px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${(props: IInput) => (props?.variant === Variants.Outlined ? '3px' : 0)};  
  border-color: ${(props: IInput) => (props?.variant === Variants.Outlined ? props?.borderColor : 'transparent')};
  color: ${(props: IInput) => props?.color};
  &:hover {
    border-color: ${(props: IInput) => (props?.variant === Variants.Outlined ? props?.hoverColor : 'transparent')};
    background-color: ${(props: IInput) => props?.hoverBackgroundColor};
  }
  &:hover + .underline {
    background-color: ${(props: IInput) => props?.hoverColor};
  }
  &:disabled {
    background-color: ${(props: IInput) => props?.disabledBackgroundColor};
    color: ${(props: IInput) => props?.disabledColor};
    & + .underline {
      background-color: ${(props: IInput) => props?.disabledColor};
    }
    & ~ .text-message {
      color: ${(props: IInput) => props?.disabledColor};
    }
  }
  &:focus {
    color: ${(props: IInput) => props?.focusColor};
    outline: ${(props: IInput) => (props?.variant === Variants.Outlined ? 0 : rgbToRgba(props?.focusColor, 0.3))};
    box-shadow: 1px 1px 5px 3px ${(props: IInput) => rgbToRgba(props?.focusColor, 0.3)};
    border-color: ${(props: IInput) => (props?.variant === Variants.Outlined ? props?.focusColor : 'transparent')};
    background-color: transparent;
    & + .underline {
      background-color: ${(props: IInput) => props?.focusColor};
    }
    & ~ .text-message {
      color: ${(props: IInput) => props?.focusColor};
    }
  }
  &:disabled:focus {
    border-color: ${(props: IInput) => (props?.variant === Variants.Outlined ? props?.borderColor : 'transparent')};
    & + .underline {
      background-color: ${(props: IInput) => props?.disabledColor};
    }
    & ~ .text-message {
      color: ${(props: IInput) => props?.disabledColor};
    }
  }
  &:disabled:hover + .underline {
    background-color: ${(props: IInput) => props?.disabledColor};
  }
  &:disabled:hover ~ .text-message {
    color: ${(props: IInput) => props?.disabledColor};
  }
  &:disabled:hover {
    border-color: ${(props: IInput) => (props?.variant === Variants.Outlined ? props?.disabledColor : 'transparent')};
  }
`;

export default Input;
