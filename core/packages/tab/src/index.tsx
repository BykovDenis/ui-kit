import React from 'react';

import ITheme from '../../styles/types/itheme';
import TTab from '../types/ttab';
import TabStyled from './tab.styled';
import { useTheme } from '@dbykov-ui-kit/styles';

const Tab: React.FunctionComponent<TTab> = (props: TTab) => {
  const theme = useTheme();

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props.disabled ? theme?.inactiveColor : props.color ?? theme?.palette?.baseFontColor;

    const borderColor: string = theme.palette.secondary.main;

    const onTabClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
      // tabActive is always injected by the parent Tabs via renderChildren
      props.onChange?.(props.tabActive as number | string, evt);
    };

    const backgroundColor: string | undefined = props.disabled ? theme.inactiveBackgroundColor : props?.backgroundColor;

    return (
      <TabStyled
        {...props}
        className={props?.className}
        fontFamily={theme?.fontFamily}
        focusColor={color}
        color={props?.color || color}
        fontSize={props?.fontSize ?? theme?.baseFontSize}
        fontWeight={props?.fontWeight}
        width={props?.width}
        backgroundColor={backgroundColor}
        disabled={props.disabled}
        whiteSpace={props?.whiteSpace}
        padding={props?.padding}
        wordBreak={props?.wordBreak}
        lineHeight={props.lineHeight}
        borderColor={borderColor}
        onClick={onTabClick}
        maxWidth={props?.maxWidth}
        minHeight={props?.minHeight}
        isUpperCase={props?.isUpperCase}
      >
        {props.children}
      </TabStyled>
    );
  };


  return componentThemed(theme);
};

export default Tab;
