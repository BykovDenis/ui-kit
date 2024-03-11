import styled from 'styled-components';

import Variants from '../../enums/variants';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import IInput from '../types/iinput';
import getMeasureValue from '../../helpers/get-measure-value';

const Input = styled.input<IInput>`
  ${(props: IInput) => `
      box-sizing: border-box;
      font-size: ${props.fontSize}px;
      width: ${getMeasureValue(props.width, '100%')};
      height: ${props?.variant === Variants.Outlined ? props.height : props.height - 1}px;
      text-align: ${props?.textAlign};   
      border-width: 1px;
      border-style: solid;
      border-radius: ${props?.variant === Variants.Outlined ? '3px' : 0};  
      border-color: ${props?.variant === Variants.Outlined ? props?.borderColor : 'transparent'};
      color: ${props?.color};
      background-color: ${props?.backgroundColor};  
      font-weight: ${props.fontWeight};
      &:hover {
        border-color: ${props?.variant === Variants.Outlined ? props?.hoverBorderColor : 'transparent'};
        background-color: ${props?.hoverBackgroundColor};
        color: ${props?.hoverColor};
      }
      &:hover + .underline {
        background-color: ${props?.hoverColor};
      }
      &:focus {
        color: ${props?.focusColor};
        outline: ${props?.variant === Variants.Outlined ? 0 : rgbToRgba(props?.focusColor, 0.3)};
        box-shadow: 1px 1px 5px 3px ${rgbToRgba(props?.focusColor, 0.3)};
        border-color: ${props?.variant === Variants.Outlined ? props?.focusColor : 'transparent'};
        background-color: transparent;
        & + .underline {
          background-color: ${props?.focusColor};
        }
      }
      &:read-only:focus {
        border-color: ${props?.variant === Variants.Outlined ? props?.borderColor : 'transparent'};
        box-shadow: none;
        color: ${props?.disabledColor};
        & + .underline {
          background-color: ${props?.disabledColor};
        }
      }
      &:read-only:hover + .underline {
        background-color: ${props?.disabledColor};
      }
      &:read-only:hover ~ .text-message {
        color: ${props?.disabledColor};
      }
      &:read-only:hover {
        border-color: ${props?.variant === Variants.Outlined ? props?.disabledColor : 'transparent'};
      }
      padding: ${props?.padding};
  `}
`;

export default Input;
