import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TTab from '../types/ttab';
import TabStyled from './tab.styled';

const Tab: React.FunctionComponent<TTab> = (props: TTab) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props.disabled ? theme?.inactiveColor : props.color ?? theme?.palette?.baseFontColor;

    const borderColor: string = theme.palette.secondary.main;

    const onTabClick = (evt: React.ChangeEvent<HTMLButtonElement>) => {
      props.onChange(props.tabActive, evt);
    };

    const backgroundColor: string = props.disabled ? theme.inactiveBackgroundColor : props?.backgroundColor;

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

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default Tab;
