import React, { useEffect, useState } from 'react';
import { PropsWithChildren } from 'react';

import ITheme from '../../styles/types/itheme';
import IconButtonStyled from './icon-button.styled';

const IconButton: React.FunctionComponent<PropsWithChildren<any>> = (props: any) => {
  const [Consumer, setConsumer] = useState(globalThis?.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const children: any = props?.children;

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props.disabled
      ? theme.inactiveBackgroundColor
      : props?.colorTheme === 'normal' || !props.colorTheme
      ? theme?.palette?.primary?.main
      : theme?.palette?.secondary?.main;

    return (
      <IconButtonStyled
        {...props}
        id={props?.id}
        width={props?.width}
        height={props?.height}
        type={props.type ?? 'button'}
        onClick={props?.onClick}
        disabled={props?.disabled}
        color={props?.color || theme?.palette?.baseButtonFontColor}
        backgroundColor={props?.backgroundColor || backgroundColor}
        backgroundImage={props?.backgroundImage}
        fontSize={props?.fontSize ?? theme?.baseFontSize}
        className={props?.className}
        fontFamily={theme?.fontFamily}
        theme={theme}
        dataset={props?.dataset}
        focusColor={theme?.palette?.primary?.main}
        borderRadius={props?.borderRadius}
        padding={props?.padding}
        name={props.name}
      >
        {children}
      </IconButtonStyled>
    );
  };

  if (!Consumer) {
    console.error('The IconButton component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(IconButton);
