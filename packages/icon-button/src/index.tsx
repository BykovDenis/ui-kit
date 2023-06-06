import React from 'react';
import { PropsWithChildren } from 'react';
import getCssVariables from '../../styles/src/get-css-variables';

import IconButtonStyled from './icon-button.styled';

const IconButton: React.FunctionComponent<PropsWithChildren<any>> = (props: any) => {
  const cssVariables: any = getCssVariables();
  const children: any = props?.children;

    const backgroundColor: string =
      props?.colorTheme === 'normal' || !props.colorTheme
        ? cssVariables.primaryMainColor
        : cssVariables.secondaryMainColor;
    return (
      <IconButtonStyled
        {...props}
        id={props?.id}
        width={props?.width}
        height={props?.height}
        type={props.type ?? 'button'}
        onClick={props?.onClick}
        disabled={props?.disabled}
        color={props?.color || cssVariables.baseButtonFontColor}
        backgroundColor={props?.backgroundColor || backgroundColor}
        backgroundImage={props?.backgroundImage}
        fontSize={props?.fontSize ?? cssVariables.baseFontSize}
        className={props?.className}
        fontFamily={cssVariables.fontFamily}
        dataset={props?.dataset}
        focusColor={cssVariables.primaryMainColor}
        borderRadius={props?.borderRadius}
        padding={props?.padding}
        name={props.name}
      >
        {children}
      </IconButtonStyled>
    );
};

export default React.memo(IconButton);
