import React, { useEffect, useState } from 'react';

import ChevronDownIcon from '../../icons-components/24x24/chevron-down-icon';
import ITheme from '../../styles/types/itheme';
import TTableHead from '../types/ttable-head';
import TableHeadStyled from './table-head.styled';

const TableHead: React.FunctionComponent<TTableHead> = (props: TTableHead) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => {
    return <TableHeadStyled className={props?.className}>{props.children}</TableHeadStyled>;
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(TableHead);
