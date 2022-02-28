import styled from 'styled-components';

import rgbToRgba from '../../helpers/rgb-to-rgba';
import IButton from '../types/ibutton';

const CONTAINED: string = 'contained';
const OUTLINED: string = 'outlined';
const TEXT: string = 'text';
const TRANSPARENT_COLOR = 'transparent';

const ButtonStyled =
  styled('button') <
  IButton >
  `
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    font-family: ${(props: IButton) => props?.fontFamily};
    border: none;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size:  ${(props: IButton) => props?.fontSize}px;
    line-height: 1;
    text-align: center;
    letter-spacing: 0.39998px;
    text-transform: uppercase;
    color: ${(props: IButton) =>
      props?.variant === CONTAINED || !props?.variant ? props.color : props.backgroundColor};
    padding: 10px 15px;    
    background-color: ${(props: IButton) =>
      props?.variant === CONTAINED || !props?.variant
        ? props.backgroundColor
        : props?.variant === TEXT || props?.variant === OUTLINED
        ? TRANSPARENT_COLOR
        : props.color};
    background-image: ${(props: IButton) => props?.backgroundImage ?? 'none'};
    cursor: pointer;    
    border: ${(props: IButton) =>
      props?.variant === OUTLINED ? `1px solid ${props.backgroundColor}` : '1px solid transparent'};
    width: ${(props: IButton) => `${props?.width}px` ?? 'initial'};
    height: ${(props: IButton) => `${props?.height}px` ?? 'initial'};

    &:focus {
      outline: 1px solid ${(props: IButton) => rgbToRgba(props?.focusColor, 0.3)};
      box-shadow: 1px 1px 5px 3px ${(props: IButton) => rgbToRgba(props?.focusColor, 0.3)};
    }

    &:hover {
      box-shadow: ${(props: IButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px rgba(0, 0, 0, 0.15)'}; 
      background-color: ${(props: IButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? rgbToRgba(props.backgroundColor, 0.85)
          : rgbToRgba(props.backgroundColor, 0.05)};
      border-radius: 4px;
    }

    &:active {
      box-shadow: ${(props: IButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px 0 rgba(0, 0, 0, 0.15)'};
      background-color: ${(props: IButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? rgbToRgba(props.backgroundColor, 0.5)
          : rgbToRgba(props.backgroundColor, 0.25)};
      border-radius: 4px;
    }

    &:disabled {
      background-color: #bdbdbd;
      box-shadow: none; 
      border-radius: 4px;
      color: #ffffff;
      border: 1px solid #bdbdbd;
    }
  `;

export default ButtonStyled;
