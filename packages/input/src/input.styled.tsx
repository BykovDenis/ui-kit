import styled from 'styled-components';

import Variant from '../../enums/variant';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import IInput from '../types/iinput';
import getMeasureValue from "../../helpers/get-measure-value";

type TInputStyled = IInput & {
    isFocus: boolean,
}

const Input =
  styled.input <
  IInput >
  `
  ${(props: TInputStyled) => { 
      
      const color: string = props.disabled
          ? 'var(--inactive-font-color)' 
          : props?.error 
          ? 'var(--secondary-main-color)'
          :  props.isFocus && !props.isReadOnly
            ? 'var(--primary-main-color)'
            : 'var(--base-font-color)';

    const hoverBackgroundColor: string = props.disabled ? 'var(--inactive-background-color)' : props?.error ? 'var(--secondary-lighter-color)' : 'var(--main-background-color)';
    const hoverFontColor: string = props.disabled ? 'var(--inactive-font-color)' : props?.error ? 'var(--secondary-main-color)' : props?.hoverColor || 'var(--base-font-color)';
    const focusColor: string = props?.error ? 'var(--secondary-main-color)' : props?.focusColor || 'var(--primary-main-color)';
    const disabledColor: string = 'var(--base-font-color-opacity05)';
      
      return   `
          box-sizing: border-box;
          font-size: ${getMeasureValue(props.fontSize, 'var(--base-font-size)')};
          width: 100%;
          height: ${props?.variant === Variant.Outlined ? props.height : props.height - 1}px;
          text-align: ${props?.textAlign};   
          padding: 8px 10px;
          padding-right: ${props.isNotClearable || props?.isReadOnly || props.disabled ? '10px' : '25px'};
          border-width: 1px;
          border-style: solid;
          border-radius: ${props?.variant === Variant.Outlined ? '3px' : 0};  
          border-color: ${props?.variant === Variant.Outlined ? props?.borderColor : 'transparent'};
          color: ${color};
          background-color: ${props?.backgroundColor};  
          font-weight: ${props?.fontWeight || 'var(--base-font-weight)'};
          font-family: var(--base-font-family);
          &:hover {
            border-color: ${props?.variant === Variant.Outlined ? hoverFontColor : 'transparent'};
            background-color: ${hoverBackgroundColor};
            color: ${hoverFontColor};
          }
          &:hover + .underline {
            background-color: ${hoverFontColor};
          }
          &:disabled {
            & + .underline {
              background-color: ${disabledColor};
            }
            & ~ .text-message {
              color: ${props?.color};
            }
          }
          &:focus {
            color: ${focusColor};
            outline: ${(props?.variant === Variant.Outlined ? 0 : rgbToRgba(focusColor, 0.3))};
            box-shadow: 1px 1px 5px 3px ${rgbToRgba(focusColor, 0.3)};
            border-color: ${(props?.variant === Variant.Outlined ? focusColor : 'transparent')};
            background-color: transparent;
            & + .underline {
              background-color: ${focusColor};
            }
          }
          &:disabled:focus {
            border-color: ${(props?.variant === Variant.Outlined ? props?.borderColor : 'transparent')};
            & + .underline {
              background-color: ${disabledColor};
            }
            & ~ .text-message {
              color: ${props?.color};
            }
          }
          &:disabled:hover + .underline {
            background-color: ${disabledColor};
          }
          &:disabled:hover ~ .text-message {
            color: ${disabledColor};
          }
          &:disabled:hover {
            border-color: ${(props?.variant === Variant.Outlined ? disabledColor : 'transparent')};
          }
          &:read-only:focus {
            border-color: ${(props?.variant === Variant.Outlined ? props?.borderColor : 'transparent')};
            box-shadow: none;
            color: ${disabledColor};
            & + .underline {
              background-color: ${disabledColor};
            }
          }
          &:read-only:hover + .underline {
            background-color: ${disabledColor};
          }
          &:read-only:hover ~ .text-message {
            color: ${disabledColor};
          }
          &:read-only:hover {
            border-color: ${(props?.variant === Variant.Outlined ? disabledColor : 'transparent')};
          }
  `}}
`;

export default Input;
