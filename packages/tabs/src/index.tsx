import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TTabs from '../types/ttabs';
import TabsStyled from './tabs.styled';
import renderChildren from '../helpers/render-children-with-props';
import getCssVariables from '../../styles/src/get-css-variables';

const Tabs: React.FunctionComponent<TTabs> = (props: TTabs) => {
  const cssVariables: any = getCssVariables();

    const color: string = props.disabled
      ? cssVariables.baseFontColorOpacity05
      : props.color || cssVariables.baseFontColor;

    const children = renderChildren(props.children, props);

    return (
      <TabsStyled
        {...props}
        className={props?.className}
        fontFamily={cssVariables.fontFamily}
        focusColor={color}
        color={props?.color || color}
        fontSize={props?.fontSize ?? cssVariables.baseFontSize}
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

export default React.memo(Tabs);
