import React, { PropsWithChildren, useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TButton from '../types/tbutton';
import ButtonStyled from './button.styled';

const Button: React.FunctionComponent<PropsWithChildren<TButton>> = (props: TButton) => {
  const [Consumer, setConsumer] = useState(globalThis?.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props.disabled
      ? theme.inactiveBackgroundColor
      : props?.colorTheme === 'normal' || !props.colorTheme
      ? theme?.palette?.primary?.main
      : theme?.palette?.secondary?.main;

    const color: string = props.disabled ? theme.inactiveColor : props?.color || theme?.palette?.baseButtonFontColor;
    return (
      <ButtonStyled
        {...props}
        id={props?.id}
        type={props.type ?? 'button'}
        onClick={props?.onClick}
        color={color}
        backgroundColor={props?.backgroundColor || backgroundColor}
        backgroundImage={props?.backgroundImage}
        fontSize={props?.fontSize ?? theme?.baseFontSize}
        theme={theme}
        dataset={props?.dataset}
        focusColor={props.focusColor || backgroundColor}
        onDragStart={props?.onDragStart}
      />
    );
  };

  if (!Consumer) {
    console.error('The Button component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default Button;
