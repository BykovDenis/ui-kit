import React from 'react';
import styled from 'styled-components';

import hexToRgba from '../../helpers/hex-to-rgba';
import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ILabel from '../types/ilabel';

const Label: React.FunctionComponent<ILabel> = (props: ILabel) => {
  const LabelStyles =
    styled.label <
    ILabel >
    `
        &:focus {
          outline: 1px solid ${(props: ILabel) => hexToRgba(props?.focusColor, 0.3)};
          box-shadow: 1px 1px 5px 3px ${(props: ILabel) => hexToRgba(props?.focusColor, 0.3)};
        }
      
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        font-family: ${(props: ILabel) => props.fontFamily};
        cursor: pointer;
        color: ${(props: ILabel) => props.color};
        font-size: ${(props: ILabel) => props.fontSize};
        line-height: 1.3;      
      `;

  return props.ReactThemeContext ? (
    <props.ReactThemeContext.Consumer>
      {(theme: ITheme) => (
        <LabelStyles theme={theme} className={props?.className} fontFamily={theme?.fontFamily}>
          {props.children}
        </LabelStyles>
      )}
    </props.ReactThemeContext.Consumer>
  ) : (
    <ThemeContext.Consumer>
      {(theme: ITheme) => (
        <LabelStyles {...props} theme={theme} className={props?.className} fontFamily={theme?.fontFamily}>
          {props.children}
        </LabelStyles>
      )}
    </ThemeContext.Consumer>
  );
};

export default Label;
