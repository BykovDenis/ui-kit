import React from 'react';

import ChevronDownIcon from '../../icons-components/24x24/chevron-down-icon';
import ITheme from '../../styles/types/itheme';
import TTableHead from '../types/ttable-head';
import TableHeadStyled from './table-head.styled';
import { useTheme } from '@dbykov-ui-kit/styles';

const TableHead: React.FunctionComponent<TTableHead> = (props: TTableHead) => {
  const theme = useTheme();

  const componentThemed: any = (theme: ITheme) => {
    return <TableHeadStyled className={props?.className}>{props.children}</TableHeadStyled>;
  };


  return componentThemed(theme);
};

export default TableHead;
