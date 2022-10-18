import React from 'react';

import Itheme from '../../styles/types/itheme';
import IconButtonStyled from './icon-button.styled';

const IconButton: React.FunctionComponent = (props: any) => {
  const componentThemed: any = (theme: Itheme) => {
    const backgroundColor: string =
      props?.colorTheme === 'normal' || !props.colorTheme
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
      >
        {props.children}
      </IconButtonStyled>
    );
  };

  if (!globalThis.ReactThemeContextConsumer) {
    console.error('The IconButton component. You need an initialization provider');
    return null;
  }

  return <globalThis.ReactThemeContextConsumer>{componentThemed}</globalThis.ReactThemeContextConsumer>;
};

export default React.memo(IconButton);
