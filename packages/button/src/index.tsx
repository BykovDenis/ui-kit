import React from 'react';
import styled from 'styled-components';

import hexToRgb from '../../helpers/hex-to-rgb';
import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import Ibutton from '../types/ibutton';

const CONTAINED: string = 'contained';
const OUTLINED: string = 'outlined';

const ButtonStyled =
  styled('button') <
  Ibutton >
  `
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    font-family: ${(props: Ibutton) => props?.fontFamily};
    border: none;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size:  ${(props: Ibutton) => props?.fontSize};
    line-height: 1;
    text-align: center;
    letter-spacing: 0.39998px;
    text-transform: uppercase;
    color: ${(props: Ibutton) =>
      props?.variant === CONTAINED || !props?.variant ? props.color : props.backgroundColor};
    padding: 10px 15px;    
    background-color: ${(props: Ibutton) =>
      props?.variant === CONTAINED || !props?.variant ? props.backgroundColor : props.color};
    background-image: ${(props: Ibutton) => props?.backgroundImage ?? 'none'};
    cursor: pointer;    
    border: ${(props: Ibutton) =>
      props?.variant === OUTLINED ? `1px solid ${props.backgroundColor}` : '1px solid transparent'};
    width: ${(props: Ibutton) => props?.width ?? 'initial'};
    height: ${(props: Ibutton) => props?.height ?? 'initial'};

    &:hover {
      box-shadow: ${(props: Ibutton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px rgba(0, 0, 0, 0.15)'}; 
      background-color: ${(props: Ibutton) =>
        props?.variant === CONTAINED || !props?.variant
          ? hexToRgb(props.backgroundColor, 0.85)
          : hexToRgb(props.backgroundColor, 0.05)};
      border-radius: 4px;
    }

    &:active {
      box-shadow: ${(props: Ibutton) =>
        props?.variant === CONTAINED || !props?.variant
          ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
          : '0 1px 1px 0 rgba(0, 0, 0, 0.15)'};
      background-color: ${(props: Ibutton) =>
        props?.variant === CONTAINED || !props?.variant
          ? hexToRgb(props.backgroundColor, 0.5)
          : hexToRgb(props.backgroundColor, 0.25)};
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

const Button: React.FunctionComponent = (props: any) => {
  const Component = ({ theme }: { theme: ITheme }) => {
    const backgroundColor: string =
      props?.colorTheme === 'normal' || !props.colorTheme
        ? theme?.palette?.primary?.main
        : theme?.palette?.secondary?.main;
    return (
      <ButtonStyled
        {...props}
        width={props.width}
        height={props.height}
        type={props.type ?? 'button'}
        onClick={props?.onClick}
        disabled={props?.disabled}
        color={theme?.palette?.baseButtonFontColor}
        backgroundColor={backgroundColor}
        backgroundImage={props?.backgroundImage}
        fontSize={props?.fontSize ?? theme?.baseFontSize}
        className={props?.className}
        fontFamily={theme?.fontFamily}
        theme={theme}
        dataset={props?.dataset}
      >
        {props.children}
      </ButtonStyled>
    );
  };

  return props.ReactThemeContext ? (
    <props.ReactThemeContext.Consumer>
      {(theme: ITheme) => <Component theme={theme} />}
    </props.ReactThemeContext.Consumer>
  ) : (
    <ThemeContext.Consumer>{(theme: ITheme) => <Component theme={theme} />}</ThemeContext.Consumer>
  );
};

export default React.memo(Button);
