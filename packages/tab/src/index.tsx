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
    const color: string = props.disabled
      ? theme?.palette?.baseFontColorOpacity05
      : props.color || theme?.palette?.baseFontColor;

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
        backgroundColor={props?.backgroundColor}
        disabled={props.disabled}
        whiteSpace={props?.whiteSpace}
        padding={props?.padding}
        height={props?.height}
        wordBreak={props?.wordBreak}
        lineHeight={props.lineHeight}
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

export default React.memo(Tab);
