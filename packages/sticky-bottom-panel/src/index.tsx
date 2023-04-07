import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TStickyBottomPanel from '../types/tsticky-bottom-panel';
import StickyBottomPanelStyled from './sticky-bottom-panel.styled';

const StickyBottomPanel: React.FunctionComponent<TStickyBottomPanel> = (props: TStickyBottomPanel) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props?.backgroundColor || theme?.mainBackgroundColor;
    const color: string = props?.color || theme.palette.baseFontColor;

    return (
      <StickyBottomPanelStyled backgroundColor={backgroundColor} height={props?.height} color={color}>
        {props.children}
      </StickyBottomPanelStyled>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(StickyBottomPanel);
