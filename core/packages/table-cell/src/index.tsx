import React from 'react';

import ChevronDownIcon from '../../icons-components/24x24/chevron-down-icon';
import ITheme from '../../styles/types/itheme';
import TTableCell from '../types/ttable-cell';
import TableCellStyled from './table-cell.styled';

const TableCell: React.FunctionComponent<TTableCell> = (props: TTableCell) => {
  const Consumer = globalThis.ReactThemeContextConsumer;

  const componentThemed: any = (theme: ITheme) => {
    const borderColor: string = theme.mainOutlinedColor;
    return !props.isHeader ? (
      <TableCellStyled {...props} borderColor={borderColor}>
        {props.children}
      </TableCellStyled>
    ) : (
      <TableCellStyled {...props} borderColor={borderColor}>
        {props.children}
        <ChevronDownIcon color={theme.palette.baseFontColor} />
      </TableCellStyled>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default TableCell;
