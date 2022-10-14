import React from 'react';

import ITheme from '../../styles/types/itheme';
import { ReactThemeContextConsumer } from '../../styles/src';
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
        focusColor={props.focusColor || backgroundColor}
        borderRadius={props?.borderRadius}
        draggable={props?.draggable}
        onDragStart={props?.onDragStart}
        name={props?.name}
      >
        {props.children}
      </ButtonStyled>
    );
  };

  if (!ReactThemeContextConsumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <ReactThemeContextConsumer>{componentThemed}</ReactThemeContextConsumer>;
};

export default React.memo(Button);
