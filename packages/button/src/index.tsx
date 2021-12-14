import React from 'react';
import styled from 'styled-components';

import ThemeContext from '../../styles/src/themes';

interface IButton {
  ReactThemeContext?: any;
  backgroundColor?: string;
  children?: any;
  color?: string;
  disabled?: boolean;
  onClick?: (evt: any) => void;
  theme?: any;
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
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.39998px;
  text-transform: uppercase;
  color: ${(props: IButton) => props.color};
  padding-top: 8px;
  padding-bottom: 8px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  background-color: ${(props: IButton) => props.backgroundColor};

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: rgba(66, 165, 245, 0.85);
    border-radius: 4px;
  }

  &:active {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: rgba(66, 165, 245, 0.5);
    border-radius: 4px;
  }

  &:disabled {
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
    background-color: #bdbdbd;
    border-radius: 4px;
  }
`;

export default (props: IButton) =>
  props.ReactThemeContext ? (
    <props.ReactThemeContext.Consumer>
      {(theme: any) => (
        <Button
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
          color={theme?.palette?.baseButtonFontColor}
          backgroundColor={theme?.palette?.primary?.main}
          theme={theme}
          onClick={props?.onClick}
          disabled={props?.disabled}
        >
          {props.children}
        </Button>
      )}
    </ThemeContext.Consumer>
  );
