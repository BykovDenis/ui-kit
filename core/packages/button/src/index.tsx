import React, { PropsWithChildren, useEffect, useState } from 'react';

import { TButtonType } from '../../enums/button-type';
import ButtonType from '../../enums/button-type';
import ColorTheme from '../../enums/color-theme';
import ITheme from '../../styles/types/itheme';
import TButton from '../types/tbutton';
import ButtonStyled from './button.styled';

const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<TButton>>((props: TButton, ref) => {
  const [Consumer, setConsumer] = useState(globalThis?.ReactThemeContextConsumer);
  const [colorTheme] = useState<string>(props?.colorTheme || ColorTheme.Normal);
  const [error, setError] = useState<boolean>(props?.error !== undefined ? props.error : false);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    setError(props?.error !== undefined ? props.error : false);
  }, [props.error]);

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props.disabled
      ? theme.inactiveBackgroundColor
      : (colorTheme === ColorTheme.Normal && !error) || !colorTheme
      ? theme?.palette?.primary?.main
      : theme?.palette?.secondary?.main;

    const color: string = props.disabled
      ? theme.inactiveColor
      : props?.color
      ? props?.color
      : props.variant === 'text'
      ? theme.palette.primary.main
      : theme?.palette?.baseButtonFontColor;
    return (
      <ButtonStyled
        {...props}
        ref={ref}
        id={props?.id}
        type={(props.type ?? ButtonType.Button) as TButtonType}
        onClick={props?.onClick}
        color={color}
        backgroundColor={props?.backgroundColor || backgroundColor}
        backgroundImage={props?.backgroundImage}
        fontSize={props?.fontSize ?? theme?.baseFontSize}
        theme={theme}
        dataset={props?.dataset}
        fontFamily={props?.fontFamily || theme?.fontFamily}
        focusColor={props.focusColor || backgroundColor}
        onDragStart={props?.onDragStart}
        error={error}
      />
    );
  };

  if (!Consumer) {
    console.error('The Button component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
});

export default Button;
