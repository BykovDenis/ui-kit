import React from 'react';

import Label from '@dbykov-ui-kit/label';
import ITheme from '../../styles/types/itheme';
import TLabelInteractive from '../types/tlabel-interactive';
import ButtonStyled from './button.styled';
import LabelInteractiveStyled from './label-interactive.styled';
import { useTheme } from '@dbykov-ui-kit/styles';

const LabelInteractive: React.FunctionComponent<TLabelInteractive> = (props: TLabelInteractive) => {
  const theme = useTheme();

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


  return componentThemed(theme);
};

LabelInteractive.defaultProps = {
  isInteractive: true,
};

export default LabelInteractive;
