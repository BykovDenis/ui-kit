import styled from 'styled-components';

import rgbToRgba from '../../helpers/rgb-to-rgba';
import IIconButton from '../types/iicon-button';

const CONTAINED: string = 'contained';
const OUTLINED: string = 'outlined';
const TEXT: string = 'text';
const TRANSPARENT_COLOR = 'transparent';

const IconButtonStyled =
  styled('button') <
  IIconButton >
  `
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    font-family: ${(props: IIconButton) => props?.fontFamily};
    border: none;
    border-radius: ${(props: IIconButton) => (props?.borderRadius ? props?.borderRadius : '50%')};
    font-style: normal;
    font-weight: normal;
    font-size:  ${(props: IIconButton) => props?.fontSize}px;
    line-height: 1;
    text-align: center;
    letter-spacing: 0.39998px;
    color: ${(props: IIconButton) =>
      props?.variant === CONTAINED || !props?.variant ? props.color : props.backgroundColor};
    padding: ${(props: IIconButton) => (props?.padding >= 0 ? `${props?.padding}px` : '5px')};    
    background-color: ${(props: IIconButton) =>
      props?.variant === CONTAINED || !props?.variant
        ? props.backgroundColor
        : props?.variant === TEXT || props?.variant === OUTLINED
        ? TRANSPARENT_COLOR
        : props.color};
    background-image: ${(props: IIconButton) => props?.backgroundImage ?? 'none'};
    cursor: pointer;    
    border: ${(props: IIconButton) =>
      props?.variant === OUTLINED ? `1px solid ${props.backgroundColor}` : '1px solid transparent'};
    width: ${(props: IIconButton) => `${props?.width}px` ?? 'initial'};
    height: ${(props: IIconButton) => `${props?.height}px` ?? 'initial'};

    &:focus {
      outline: 1px solid ${(props: IIconButton) => rgbToRgba(props?.focusColor, 0.3)};
      box-shadow: 1px 1px 5px 3px ${(props: IIconButton) => rgbToRgba(props?.focusColor, 0.3)};
    }

    &:hover {
      box-shadow: ${(props: IIconButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px rgba(0, 0, 0, 0.15)'}; 
      background-color: ${(props: IIconButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? rgbToRgba(props.backgroundColor, 0.85)
          : rgbToRgba(props.backgroundColor, 0.05)};
    }

    &:active {
      box-shadow: ${(props: IIconButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px 0 rgba(0, 0, 0, 0.15)'};
      background-color: ${(props: IIconButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? rgbToRgba(props.backgroundColor, 0.5)
          : rgbToRgba(props.backgroundColor, 0.25)};
    }

    &:disabled {
      background-color: #bdbdbd;
      box-shadow: none;
      color: #ffffff;
      border: 1px solid #bdbdbd;
    }
  `;

export default IconButtonStyled;
