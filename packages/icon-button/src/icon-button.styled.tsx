import styled from 'styled-components';

import TButton from '../../button/types/tbutton';
import getMeasureValue from '../../helpers/get-measure-value';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import parseColor from "../../helpers/parse-color";

const CONTAINED: string = 'contained';
const OUTLINED: string = 'outlined';
const TEXT: string = 'text';

const IconButtonStyled =
  styled('button') <
  TButton >
    `
    ${(props: TButton) => {
      const backgroundColor: string = props.disabled ? props.cssVariables.inactiveBackgroundColor : props?.variant === TEXT || props?.variant === OUTLINED ? 'transparent' : props?.backgroundColor || 'var(--primary-main-color)';
      const backgroundColorOpacity085: string = props.disabled ? props.cssVariables.inactiveBackgroundColor : props?.variant === TEXT || props?.variant === OUTLINED ? 'transparent' : rgbToRgba(props?.backgroundColor, 0.85) || `rgba(${parseColor(props.cssVariables.primaryMainColor)}, 0.85)`;
      const color: string = props.disabled ? props.cssVariables.inactiveFontColor : props?.color || 'var(--base-font-color)';

      return `
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        box-sizing: border-box;
        font-family: ${props?.fontFamily || 'var(--base-font-family)'};
        border: none;
        border-radius: ${getMeasureValue(props.borderRadius, 'var(--base-border-radius)')};
        font-style: inherit;
        font-weight: ${props?.fontWeight ?? 'var(--base-font-weight)'};
        font-size:  ${props?.fontSize ?? 'var(--base-font-size)'}px;
        line-height: 1;
        text-align: center;
        letter-spacing: 0.39998px;
        color: ${color};
        padding: ${props?.padding || '10px'};    
        background-color: ${backgroundColor};
        background-image: ${props?.backgroundImage ?? 'none'};
        cursor: pointer;    
        border-radius: ${(props?.borderRadius ? props?.borderRadius : '50%')};
        border: 1px solid ${(props: TButton) => props.disabled ? 'var(--inactive-background-color)' : props.variant === OUTLINED ? 'var(--primary-main-color)' : 'var(--main-background-color)'};
        width: ${getMeasureValue(props?.width)};
        height: ${getMeasureValue(props?.height)};
        margin: 0;
        &:focus {
          outline: 1px solid ${rgbToRgba(props?.focusColor || backgroundColor, 0.3)};
          box-shadow: 1px 1px 5px 3px ${rgbToRgba(props?.focusColor || backgroundColor, 0.3)};
        }

        &:hover {
          box-shadow: ${
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px rgba(0, 0, 0, 0.15)'};
          background-color: ${
        props?.variant === CONTAINED || !props?.variant
          ? backgroundColorOpacity085
          : rgbToRgba(backgroundColor, 0.05)};
        }

        &:active {
          box-shadow: ${(props: TButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px 0 rgba(0, 0, 0, 0.15)'};
          background-color: ${
        props?.variant === CONTAINED || !props?.variant
          ? rgbToRgba(backgroundColor, 0.5)
          : rgbToRgba(backgroundColor, 0.25)};
        }
       `;
    }} 
  `;

export default IconButtonStyled;
