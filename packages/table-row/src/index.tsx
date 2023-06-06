import React from 'react';

import TTableRow from '../types/ttable-row';
import TableRowStyled from './table-row.styled';
import getCssVariables from '../../styles/src/get-css-variables';

const TableRow: React.FunctionComponent<TTableRow> = (props: TTableRow) => {
  const cssVariables = getCssVariables();
  const backgroundColor: string =
    props?.backgroundColor ?? props?.isHeader ? cssVariables.primaryMainColor : cssVariables.backgroundColor;
  const borderColor: string = props.isHeader ? cssVariables.backgroundColor : cssVariables.baseFontColor;

  return (
    <TableRowStyled {...props} backgroundColor={backgroundColor} borderColor={borderColor}>
      {props.children}
    </TableRowStyled>
  );
};

export default React.memo(TableRow);
