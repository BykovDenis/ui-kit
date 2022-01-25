import styled from 'styled-components';

import hexToRgba from '../../helpers/hex-to-rgba';
import IButton from '../types/ibutton';

const CONTAINED: string = 'contained';
const OUTLINED: string = 'outlined';

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
    font-size:  ${(props: IButton) => props?.fontSize};
    line-height: 1;
    text-align: center;
    letter-spacing: 0.39998px;
    text-transform: uppercase;
    color: ${(props: IButton) =>
      props?.variant === CONTAINED || !props?.variant ? props.color : props.backgroundColor};
    padding: 10px 15px;    
    background-color: ${(props: IButton) =>
      props?.variant === CONTAINED || !props?.variant ? props.backgroundColor : props.color};
    background-image: ${(props: IButton) => props?.backgroundImage ?? 'none'};
    cursor: pointer;    
    border: ${(props: IButton) =>
      props?.variant === OUTLINED ? `1px solid ${props.backgroundColor}` : '1px solid transparent'};
    width: ${(props: IButton) => props?.width ?? 'initial'};
    height: ${(props: IButton) => props?.height ?? 'initial'};

    &:focus {
      outline: 1px solid ${(props: IButton) => hexToRgba(props?.focusColor, 0.3)};
      box-shadow: 1px 1px 5px 3px ${(props: IButton) => hexToRgba(props?.focusColor, 0.3)};
    }

    &:hover {
      box-shadow: ${(props: IButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px rgba(0, 0, 0, 0.15)'}; 
      background-color: ${(props: IButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? hexToRgba(props.backgroundColor, 0.85)
          : hexToRgba(props.backgroundColor, 0.05)};
      border-radius: 4px;
    }

    &:active {
      box-shadow: ${(props: IButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px 0 rgba(0, 0, 0, 0.15)'};
      background-color: ${(props: IButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? hexToRgba(props.backgroundColor, 0.5)
          : hexToRgba(props.backgroundColor, 0.25)};
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
