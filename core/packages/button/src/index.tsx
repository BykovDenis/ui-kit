import React, { PropsWithChildren } from 'react';

import { TButtonType } from '../../enums/button-type';
import ButtonType from '../../enums/button-type';
import ColorTheme from '../../enums/color-theme';
import ITheme from '../../styles/types/itheme';
import TButton from '../types/tbutton';
import ButtonStyled from './button.styled';
import { useTheme } from '@dbykov-ui-kit/styles';

const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<TButton>>((props: TButton, ref) => {
  const theme = useTheme();
  // plain derived values: the useState copies froze the initial prop and
  // needed a sync effect (or silently ignored prop updates) to stay current
  const colorTheme: string = props?.colorTheme || ColorTheme.Normal;
  const error: boolean = props?.error !== undefined ? props.error : false;

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props.disabled
      ? theme.inactiveBackgroundColor
      : (colorTheme === ColorTheme.Normal && !error) || !colorTheme
      ? theme?.palette?.primary?.main
      : theme?.palette?.secondary?.main;

    const color: string = props.disabled
      ? theme.inactiveColor
      : props?.color
      ? props?.color
      : props.variant === 'text'
      ? theme.palette.primary.main
      : theme?.palette?.baseButtonFontColor;
    return (
      <ButtonStyled
        {...props}
        ref={ref}
        id={props?.id}
        type={(props.type ?? ButtonType.Button) as TButtonType}
        onClick={props?.onClick}
        color={color}
        backgroundColor={props?.backgroundColor || backgroundColor}
        backgroundImage={props?.backgroundImage}
        fontSize={props?.fontSize ?? theme?.baseFontSize}
        theme={theme}
        dataset={props?.dataset}
        fontFamily={props?.fontFamily || theme?.fontFamily}
        focusColor={props.focusColor || backgroundColor}
        onDragStart={props?.onDragStart}
        error={error}
      />
    );
  };


  return componentThemed(theme);
});

export default Button;
