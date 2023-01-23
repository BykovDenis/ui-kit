import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TTable from '../types/ttable';
import TableStyled from './table.styled';

const Table: React.FunctionComponent<TTable> = (props: TTable) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props.color ?? theme.palette.baseFontColor;
    const backgroundColor: string = props.backgroundColor ?? theme.mainBackgroundColor;
    const fontFamily: string = props?.fontFamily ? props?.fontFamily : theme.fontFamily;

    return (
      <TableStyled {...props} backgroundColor={backgroundColor} color={color} fontFamily={fontFamily}>
        {props.children}
      </TableStyled>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(Table);
