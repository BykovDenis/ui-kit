import React from 'react';

import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ILabel from '../types/ilabel';
import LabelStyled from './label.styled';

const Label: React.FunctionComponent<ILabel> = (props: ILabel) => {
  const componentThemed: any = (theme: ITheme) => {
    const color: string =
      (props?.colorTheme === 'normal' || !props.colorTheme) && !props?.error
        ? props?.isFocus
          ? theme?.palette?.primary?.main
          : theme?.palette?.baseFontColor
        : theme?.palette?.secondary?.main;

    return (
      <LabelStyled
        className={props?.className}
        fontFamily={theme?.fontFamily}
        focusColor={color}
        color={color}
        fontSize={props?.fontSize ?? theme?.baseFontSize}
        htmlFor={props?.htmlFor}
      >
        {props.children}
      </LabelStyled>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default Label;
