import React from 'react';

import ITheme from '../../styles/types/itheme';
import TLabel from '../types/tlabel';
import LabelStyled from './label.styled';
import { useTheme } from '@dbykov-ui-kit/styles';

const Label: React.FunctionComponent<TLabel> = (props: TLabel) => {
  const theme = useTheme();

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props?.error
      ? theme?.palette?.secondary?.main
      : props?.isFocus
      ? theme?.palette?.primary?.main
      : props.disabled
      ? theme?.palette?.baseFontColorOpacity05
      : theme?.palette?.baseFontColor;

    const onLabelClick = (evt: React.MouseEvent<HTMLLabelElement>) => {
      console.log('label click =', props.htmlFor);
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


  return componentThemed(theme);
};

export default Label;
