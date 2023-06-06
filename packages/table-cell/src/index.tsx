import React  from 'react';

import ChevronDownIcon from '../../icons-components/24x24/chevron-down-icon';
import TTableCell from '../types/ttable-cell';
import TableCellStyled from './table-cell.styled';
import getCssVariables from '../../styles/src/get-css-variables';

const TableCell: React.FunctionComponent<TTableCell> = (props: TTableCell) => {
  const cssVariables: any = getCssVariables();
  const borderColor: string = props.isHeader ? cssVariables.backgroundColor : cssVariables.baseFontColor;
  return !props.isHeader ? (
    <TableCellStyled {...props} borderColor={borderColor}>
      {props.children}
    </TableCellStyled>
  ) : (
    <TableCellStyled {...props} borderColor={borderColor}>
      <div>
        {props.children}
        <ChevronDownIcon color={cssVariables.baseFontColor} />
      </div>
    </TableCellStyled>
  );
};

export default React.memo(TableCell);
