import React from 'react';

import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ButtonStyled from './button.styled';

const Button: React.FunctionComponent = (props: any) => {
  const componentThemed: any = (theme: ITheme) => {
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
        focusColor={theme?.palette?.primary?.main}
      >
        {props.children}
      </ButtonStyled>
    );
  };

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(Button);
