import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TTabs from '../types/ttabs';
import TabsStyled from './tabs.styled';
import renderChildren from '../helpers/render-children-with-props';

const Tabs: React.FunctionComponent<TTabs> = (props: TTabs) => {
  if (props?.children) {
    const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

    useEffect(() => {
      setConsumer(globalThis.ReactThemeContextConsumer);
    }, [globalThis.ReactThemeContextConsumer]);

    const componentThemed: any = (theme: ITheme) => {
      const color: string = props.disabled
        ? theme?.palette?.baseFontColorOpacity05
        : props.color || theme?.palette?.baseFontColor;

      const children = renderChildren(props.children?.length ? props?.children : [props?.children], props);

      return (
        <TabsStyled
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
          {children}
        </TabsStyled>
      );
    };

    if (!Consumer) {
      console.error('You need an initialization provider');
      return null;
    }

    return <Consumer>{componentThemed}</Consumer>;
  } else {
    return null;
  }
};

export default React.memo(Tabs);
