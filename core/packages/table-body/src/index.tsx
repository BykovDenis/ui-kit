import React from 'react';

import TTableBody from '../types/ttable-body';
import TableBodyStyled from './table-body.styled';
import { useTheme } from '@dbykov-ui-kit/styles';

const TableBody: React.FunctionComponent<TTableBody> = (props: TTableBody) => {
  const theme = useTheme();

  const componentThemed: any = () => {
    return <TableBodyStyled className={props?.className}>{props.children}</TableBodyStyled>;
  };


  return componentThemed(theme);
};

export default TableBody;
