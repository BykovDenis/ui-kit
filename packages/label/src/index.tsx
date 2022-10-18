import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import ILabel from '../types/ilabel';
import LabelStyled from './label.styled';

const FONT_WEIGHT_REGULAR = 400;

const Label: React.FunctionComponent<ILabel> = (props: ILabel) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
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

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(Label);
