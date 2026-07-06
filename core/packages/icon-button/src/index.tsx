import React, { useEffect, useState } from 'react';
import { PropsWithChildren } from 'react';

import ITheme from '../../styles/types/itheme';
import IconButtonStyled from './icon-button.styled';
import TButton from '../../button/types/tbutton';
import ColorTheme from '../../enums/color-theme';
import { useTheme } from '@dbykov-ui-kit/styles';

const IconButton: React.FunctionComponent<PropsWithChildren<TButton>> = (props: TButton) => {
  const theme = useTheme();
  const [colorTheme] = useState<string>(props?.colorTheme || ColorTheme.Normal);
  const [error, setError] = useState<boolean>(props?.error !== undefined ? props.error : false);

  useEffect(() => {
    setError(props?.error !== undefined ? props.error : false);
  }, [props.error]);

  const children: any = props?.children;

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props.disabled
      ? theme.inactiveBackgroundColor
      : (colorTheme === ColorTheme.Normal && !error) || !colorTheme
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
        focusColor={props.focusColor || backgroundColor}
        borderRadius={props?.borderRadius}
        padding={props?.padding}
        name={props.name}
      >
        {children}
      </IconButtonStyled>
    );
  };


  return componentThemed(theme);
};

export default IconButton;
