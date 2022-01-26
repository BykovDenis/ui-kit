import React from 'react';

import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ILabel from '../types/ilabel';
import LabelStyled from './label.styled';

const Label: React.FunctionComponent<ILabel> = (props: ILabel) => {
  const Component: React.FunctionComponent<{ theme: ITheme }> = ({ theme }: { theme: ITheme }) => {
    const color: string =
      (props?.colorTheme === 'normal' || !props.colorTheme) && !props?.error
        ? theme?.palette?.baseFontColor
        : theme?.palette?.secondary?.main;

    return (
      <LabelStyled
        className={props?.className}
        fontFamily={theme?.fontFamily}
        focusColor={color}
        color={color}
        fontSize={props?.fontSize ?? theme?.baseFontSize}
      >
        {props.children}
      </LabelStyled>
    );
  };

  return props.ReactThemeContext ? (
    <props.ReactThemeContext.Consumer>
      {(theme: ITheme) => <Component theme={theme}>{props.children}</Component>}
    </props.ReactThemeContext.Consumer>
  ) : (
    <ThemeContext.Consumer>
      {(theme: ITheme) => <Component theme={theme}>{props.children}</Component>}
    </ThemeContext.Consumer>
  );
};

export default Label;
