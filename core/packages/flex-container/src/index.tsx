import React, { useEffect, useState } from 'react';

import FlexContainerStyled from './flex-container.styled';
import TFlexContainer from '../types/tflex-container';
import ITheme from '../../styles/types/itheme';

const FlexContainer: React.FunctionComponent<TFlexContainer> = (props: TFlexContainer) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const flexDirection: string = props.flexDirection || 'row';
  const alignItems: string = props.alignItems || 'center';
  const justifyContent: string = props.justifyContent || 'flex-start';

  const componentThemed: any = (theme: ITheme) => {
    return (
      <FlexContainerStyled
        {...props}
        flexDirection={flexDirection}
        alignItems={alignItems}
        justifyContent={justifyContent}
        fontSize={props?.fontSize ?? theme.baseFontSize}
      >
        {props.children}
      </FlexContainerStyled>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default FlexContainer;
