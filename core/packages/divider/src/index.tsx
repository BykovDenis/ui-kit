import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import DividerStyled from './divider.styled';
import TDivider from '../types/tdivider';

const Divider: React.FunctionComponent<TDivider> = (props: TDivider) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props?.color || theme.mainOutlinedColor;

    return <DividerStyled className={props?.className} color={color} width={props?.width} />;
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default Divider;
