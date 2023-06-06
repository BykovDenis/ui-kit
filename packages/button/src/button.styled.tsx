import styled from 'styled-components';

import getMeasureValue from '../../helpers/get-measure-value';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import TButton from '../types/tbutton';
import Variant from "../../enums/variant";
import getBackgroundColor from "../../helpers/get-bg-color-by-variant";

const ButtonStyled =
  styled('button') <
  TButton >
  `
    ${(props: TButton) => {
        
      const backgroundColor: string = props.disabled ? props.cssVariables.inactiveBackgroundColor : props?.variant === Variant.Text || props?.variant === Variant.Outlined ? 'transparent' : props?.backgroundColor || 'var(--primary-main-color)';
      const backgroundColorOpacity085: string = getBackgroundColor(props.cssVariables.primaryMainColor, 0.85, props.disabled, props.variant, props.cssVariables.inactiveBackgroundColor, props?.backgroundColor);
      const backgroundColorOpacity025: string = getBackgroundColor(props.cssVariables.primaryMainColor, 0.25, props.disabled, props.variant, props.cssVariables.inactiveBackgroundColor, props?.backgroundColor);
      const backgroundColorOpacity05: string = getBackgroundColor(props.cssVariables.primaryMainColor, 0.5, props.disabled, props.variant, props.cssVariables.inactiveBackgroundColor, props?.backgroundColor);
      const color: string = props.disabled ? props.cssVariables.inactiveFontColor : props?.color || 'var(--base-font-color)';
      const borderColor: string = props.disabled ? '1px solid var(--inactive-background-color)' : props.variant === Variant.Outlined ? '1px solid var(--primary-main-color)' : '1px solid transparent';
      
      return `
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        box-sizing: border-box;
        font-family: ${props?.fontFamily || 'var(--base-font-family)'};
        border-radius: ${getMeasureValue(props.borderRadius, 'var(--base-border-radius)')};  
        border: ${borderColor};
        font-style: inherit;
        font-weight: ${props?.fontWeight ?? 'var(--base-font-weight)'};
        font-size:  ${props?.fontSize ?? 'var(--base-font-size)'}px;
        line-height: 1;
        text-align: center;
        letter-spacing: 0.39998px;
        color: ${color};
        padding: ${props?.padding || '10px 15px'};    
        background-color: ${backgroundColor};
        background-image: ${props?.backgroundImage ?? 'none'};
        cursor: pointer;    
        width: ${getMeasureValue(props?.width)};
        height: ${getMeasureValue(props?.height)};
        margin: 0;
        &:focus {
          outline: 1px solid ${rgbToRgba(props?.focusColor || backgroundColor, 0.3)};
          box-shadow: 1px 1px 5px 3px ${rgbToRgba(props?.focusColor || backgroundColor, 0.3)};
        }

        &:hover {
          box-shadow: ${
            props?.variant === Variant.Contained || !props?.variant
              ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
              : '0 1px 1px rgba(0, 0, 0, 0.15)'};
          background-color: ${
            props?.variant === Variant.Contained
              ? backgroundColorOpacity085
              : backgroundColorOpacity05}
        }

        &:active {
          box-shadow: ${(props: TButton) =>
            props?.variant === Variant.Contained || !props?.variant
              ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
              : '0 1px 1px 0 rgba(0, 0, 0, 0.15)'};
          background-color: ${
            props?.variant === Variant.Contained || !props?.variant
              ? backgroundColorOpacity05
              : backgroundColorOpacity025
        }
       `;
    }} 
  `;

export default ButtonStyled;
