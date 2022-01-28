import React from 'react';
import styled from 'styled-components';

import Variants from '../../enums/variants';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import Iinput from '../types/iinput';
import NumberFormatCustom from './number-format-custom';

const NativeInput: React.FunctionComponent<Iinput> = (props: Iinput) => <input {...props} />;

const Input =
  styled((props: Iinput) =>
    props.isSeparateNumberFormat ? <NumberFormatCustom {...props} name={props.name} /> : <NativeInput {...props} />
  ) <
  Iinput >
  `
  box-sizing: border-box;
  font-size: ${(props: Iinput) => props.fontSize}px;
  width: 100%;
  height: ${(props: Iinput) => (props?.variant === Variants.Outlined ? props.height : props.height - 1)}px;
  text-align: ${(props: Iinput) => props?.textAlign};   
  padding: 8px 10px;
  padding-right: 25px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${(props: Iinput) => (props?.variant === Variants.Outlined ? '3px' : 0)};  
  border-color: ${(props: Iinput) => (props?.variant === Variants.Outlined ? props?.borderColor : 'transparent')};
  color: ${(props: Iinput) => props?.color};
  &:hover {
    border-color: ${(props: Iinput) => (props?.variant === Variants.Outlined ? props?.hoverColor : 'transparent')};
    background-color: ${(props: Iinput) => props?.hoverBackgroundColor};
  }
  &:hover + .underline {
    background-color: ${(props: Iinput) => props?.hoverColor};
  }
  &:disabled {
    background-color: ${(props: Iinput) => props?.disabledBackgroundColor};
    color: ${(props: Iinput) => props?.disabledColor};
    & + .underline {
      background-color: ${(props: Iinput) => props?.disabledColor};
    }
    & ~ .text-message {
      color: ${(props: Iinput) => props?.disabledColor};
    }
  }
  &:focus {
    color: ${(props: Iinput) => props?.focusColor};
    outline: ${(props: Iinput) => (props?.variant === Variants.Outlined ? 0 : rgbToRgba(props?.focusColor, 0.3))};
    box-shadow: 1px 1px 5px 3px ${(props: Iinput) => rgbToRgba(props?.focusColor, 0.3)};
    border-color: ${(props: Iinput) => (props?.variant === Variants.Outlined ? props?.focusColor : 'transparent')};
    background-color: transparent;
    & + .underline {
      background-color: ${(props: Iinput) => props?.focusColor};
    }
    & ~ .text-message {
      color: ${(props: Iinput) => props?.focusColor};
    }
  }
  &:disabled:focus {
    border-color: ${(props: Iinput) => (props?.variant === Variants.Outlined ? props?.borderColor : 'transparent')};
    & + .underline {
      background-color: ${(props: Iinput) => props?.disabledColor};
    }
    & ~ .text-message {
      color: ${(props: Iinput) => props?.disabledColor};
    }
  }
  &:disabled:hover + .underline {
    background-color: ${(props: Iinput) => props?.disabledColor};
  }
  &:disabled:hover ~ .text-message {
    color: ${(props: Iinput) => props?.disabledColor};
  }
  &:disabled:hover {
    border-color: ${(props: Iinput) => (props?.variant === Variants.Outlined ? props?.disabledColor : 'transparent')};
  }
`;

export default Input;
