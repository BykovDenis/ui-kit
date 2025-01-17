import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TLabel from '../types/tlabel';
import LabelStyled from './label.styled';

const Label: React.FunctionComponent<TLabel> = (props: TLabel) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props?.error
      ? theme?.palette?.secondary?.main
      : props?.isFocus
      ? theme?.palette?.primary?.main
      : props.disabled
      ? theme?.palette?.baseFontColorOpacity05
      : theme?.palette?.baseFontColor;

    const onLabelClick = (evt: React.MouseEvent<HTMLLabelElement>) => {
      if (!props.disabled && props?.onClick) {
        props.onClick(evt);
      }
    };

    return (
      <LabelStyled
        {...props}
        className={props?.className}
        fontFamily={theme?.fontFamily}
        focusColor={color}
        color={props?.color || color}
        fontSize={props?.fontSize ?? theme?.baseFontSize}
        htmlFor={props?.htmlFor}
        fontWeight={props?.fontWeight}
        width={props?.width}
        backgroundColor={props?.backgroundColor}
        disabled={props.disabled}
        whiteSpace={props?.whiteSpace}
        justifyContent={props?.justifyContent}
        padding={props?.padding}
        height={props?.height}
        wordBreak={props?.wordBreak}
        lineHeight={props.lineHeight}
        onClick={onLabelClick}
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

export default Label;
