import React from 'react';

import TTableBody from '../types/ttable-body';
import TableBodyStyled from './table-body.styled';

const TableBody: React.FunctionComponent<TTableBody> = (props: TTableBody) => {

  return (
    <TableBodyStyled
      className={props?.className}
    >
      {props.children}
    </TableBodyStyled>
  );
};

export default React.memo(TableBody);
