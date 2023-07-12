import React, { useEffect, useState } from 'react';

import Label from '../../label/src/';
import ITheme from '../../styles/types/itheme';
import TLabelInteractive from '../types/tlabel-interactive';
import ButtonStyled from './button.styled';
import LabelInteractiveStyled from './label-interactive.styled';

const LabelInteractive: React.FunctionComponent<TLabelInteractive> = (props: TLabelInteractive) => {
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
    // @ts-ignore
    return props?.isInteractive ? (
      <LabelInteractiveStyled backgroundColor={props?.backgroundColor}>
        <ButtonStyled minHeight={props?.minHeight} onClick={props?.onClick}>
          <Label
            className={props?.className}
            fontFamily={theme?.fontFamily}
            focusColor={color}
            color={color}
            fontSize={props?.fontSize ?? theme?.baseFontSize}
            htmlFor={props?.htmlFor}
            fontWeight={props?.fontWeight}
            width={props?.width}
            disabled={props.disabled}
            whiteSpace={props?.whiteSpace}
            justifyContent={props?.justifyContent ? props?.justifyContent : 'center'}
          >
            {props.children}
          </Label>
          <props.Icon color={color} />
        </ButtonStyled>
      </LabelInteractiveStyled>
    ) : (
      <LabelInteractiveStyled backgroundColor={props?.backgroundColor}>
        <Label
          className={props?.className}
          fontFamily={theme?.fontFamily}
          focusColor={color}
          color={color}
          fontSize={props?.fontSize ?? theme?.baseFontSize}
          htmlFor={props?.htmlFor}
          fontWeight={props?.fontWeight}
          width={props?.width}
          disabled={props.disabled}
          whiteSpace={props?.whiteSpace}
          justifyContent={props?.justifyContent ? props?.justifyContent : 'center'}
        >
          {props.children}
        </Label>
        <props.Icon color={color} />
      </LabelInteractiveStyled>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

LabelInteractive.defaultProps = {
  isInteractive: true,
};

export default React.memo(LabelInteractive);
