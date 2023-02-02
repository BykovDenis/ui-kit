import styled from 'styled-components';

import TButton from '../../button/types/tbutton';
import getMeasureValue from '../../helpers/get-measure-value';
import isNotEmptyNumber from '../../helpers/is-not-empty-number';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import rgbToRgba from '../../helpers/rgb-to-rgba';

const CONTAINED: string = 'contained';
const OUTLINED: string = 'outlined';
const TEXT: string = 'text';
const TRANSPARENT_COLOR = 'transparent';

const IconButtonStyled =
  styled('button') <
  TButton >
  `
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    font-family: ${(props: TButton) => props?.fontFamily};
    border: none;
    border-radius: ${(props: TButton) => (props?.borderRadius ? props?.borderRadius : '50%')};
    font-style: normal;
    font-weight: normal;
    font-size:  ${(props: TButton) => props?.fontSize}px;
    line-height: 1;
    text-align: center;
    letter-spacing: 0.39998px;
    color: ${(props: TButton) =>
      props?.variant === CONTAINED || !props?.variant ? props.color : props.backgroundColor};
    padding: ${(props: TButton) => getMeasureValue(props?.padding, '5px')};    
    background-color: ${(props: TButton) =>
      props?.variant === CONTAINED || !props?.variant
        ? props.backgroundColor
        : props?.variant === TEXT || props?.variant === OUTLINED
        ? TRANSPARENT_COLOR
        : props.color};
    background-image: ${(props: TButton) => props?.backgroundImage ?? 'none'};
    cursor: pointer;    
    border: ${(props: TButton) =>
      props?.variant === OUTLINED ? `1px solid ${props.backgroundColor}` : '1px solid transparent'};
    width: ${(props: TButton) =>
      typeof props?.width === 'string'
        ? isNotEmptyString(props?.width)
          ? props?.width
          : 'initial'
        : isNotEmptyNumber(props?.width)
        ? `${props?.width}px`
        : 'initial'};
    height: ${(props: TButton) => getMeasureValue(props?.height)};

    &:focus {
      outline: 1px solid ${(props: TButton) => rgbToRgba(props?.focusColor, 0.3)};
      box-shadow: 1px 1px 5px 3px ${(props: TButton) => rgbToRgba(props?.focusColor, 0.3)};
    }

    &:hover {
      box-shadow: ${(props: TButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px rgba(0, 0, 0, 0.15)'}; 
      background-color: ${(props: TButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? rgbToRgba(props.backgroundColor, 0.85)
          : rgbToRgba(props.backgroundColor, 0.05)};
    }

    &:active {
      box-shadow: ${(props: TButton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px 0 rgba(0, 0, 0, 0.15)'};
      background-color: ${(props: TButton) =>
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
