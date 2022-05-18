import React from 'react';

import ThemeContext from '../../styles/src/themes';
import Itheme from '../../styles/types/itheme';
import ILabel from '../types/ilabel';
import LabelStyled from './label.styled';

const FONT_WEIGHT_REGULAR = 400;

const Label: React.FunctionComponent<ILabel> = (props: ILabel) => {
  const componentThemed: any = (theme: Itheme) => {
    const color: string =
      (props?.colorTheme === 'normal' || !props.colorTheme) && !props?.error
        ? props?.isFocus && !props.isReadOnly && !props.isDisabled
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
        fontWeight={props?.fontWeight || FONT_WEIGHT_REGULAR}
        width={props?.width}
        backgroundColor={props?.backgroundColor}
      >
        {props.children}
      </LabelStyled>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default Label;
