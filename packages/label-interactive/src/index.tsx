import React, {useState} from 'react';

import Label from '../../label/src/';
import TLabelInteractive from '../types/tlabel-interactive';
import ButtonStyled from './button.styled';
import LabelInteractiveStyled from './label-interactive.styled';
import getCssVariables from '../../styles/src/get-css-variables';

const LabelInteractive: React.FunctionComponent<TLabelInteractive> = (props: TLabelInteractive) => {
  const [ isInteractive, setIsInteractive ] = useState<boolean>(props.isInteractive !== undefined ? props.isInteractive : true);
  const cssVariables: any = getCssVariables();

    const color: string = props?.error
      ? cssVariables.secondaryMainColor
      : props?.isFocus
      ? cssVariables.primaryMainColor
      : props.disabled
      ? cssVariables.baseFontColorOpacity05
      : cssVariables.baseFontColor;
    // @ts-ignore
    return isInteractive ? (
      <LabelInteractiveStyled backgroundColor={props?.backgroundColor || cssVariables.mainBackgroundColor}>
        <ButtonStyled minHeight={props?.minHeight} onClick={props?.onClick}>
          <Label
            className={props?.className}
            fontFamily={cssVariables.fontFamily}
            focusColor={color}
            color={color}
            fontSize={props?.fontSize ?? cssVariables?.baseFontSize}
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
          fontFamily={cssVariables.fontFamily}
          focusColor={color}
          color={color}
          fontSize={props?.fontSize ?? cssVariables.baseFontSize}
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

export default React.memo(LabelInteractive);
