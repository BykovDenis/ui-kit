import React from 'react';
import styled from 'styled-components';

import hexToRgb from '../../helpers/hex-to-rgb';
import ThemeContext from '../../styles/src/themes';

interface IButton {
  ReactThemeContext?: any;
  backgroundColor?: string;
  children?: any;
  color?: string;
  disabled?: boolean;
  onClick?: (evt: any) => void;
  theme?: any;
  type?: string;
}

const Button =
  styled('button') <
  IButton >
  `
      font-family: Roboto, Arial, sans-serif;
      border: none;
      border-radius: 4px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 1;
      text-align: center;
      letter-spacing: 0.39998px;
      text-transform: uppercase;
      color: ${(props: IButton) => props.color};
      padding-top: 9px;
      padding-bottom: 9px;
      background-color: ${(props: IButton) => props.backgroundColor};
      cursor: pointer;    

      &:hover {
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
        background-color: ${(props: IButton) => hexToRgb(props.backgroundColor, 0.85)};
        border-radius: 4px;
      }

      &:active {
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
        background-color: ${(props: IButton) => hexToRgb(props.backgroundColor, 0.5)};
        border-radius: 4px;
      }

      &:disabled {
        background-color: #bdbdbd;
        border-radius: 4px;
      }
    `;

export default React.memo((props: IButton) =>
  props.ReactThemeContext ? (
    <props.ReactThemeContext.Consumer>
      {(theme: any) => (
        <Button
          type={props.type}
          onClick={props?.onClick}
          disabled={props?.disabled}
          color={theme?.palette?.baseButtonFontColor}
          backgroundColor={theme?.palette?.primary?.main}
          theme={theme}
        >
          {props.children}
        </Button>
      )}
    </props.ReactThemeContext.Consumer>
  ) : (
    <ThemeContext.Consumer>
      {(theme: any) => (
        <Button
          type={props.type}
          color={props?.color || theme?.palette?.baseButtonFontColor}
          backgroundColor={props?.backgroundColor || theme?.palette?.primary?.main}
          theme={theme}
          onClick={props?.onClick}
          disabled={props?.disabled}
        >
          {props.children}
        </Button>
      )}
    </ThemeContext.Consumer>
  )
);
