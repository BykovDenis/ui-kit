import React from 'react';

import TTableHead from '../types/ttable-head';
import TableHeadStyled from './table-head.styled';

const TableHead: React.FunctionComponent<TTableHead> = (props: TTableHead) => {
  return <TableHeadStyled className={props?.className}>{props.children}</TableHeadStyled>;
};

export default React.memo(TableHead);
