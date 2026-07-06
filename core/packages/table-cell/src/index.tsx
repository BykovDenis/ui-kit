import React from 'react';

import ChevronDownIcon from '../../icons-components/24x24/chevron-down-icon';
import ITheme from '../../styles/types/itheme';
import TTableCell from '../types/ttable-cell';
import TableCellStyled from './table-cell.styled';
import { useTheme } from '@dbykov-ui-kit/styles';

const TableCell: React.FunctionComponent<TTableCell> = (props: TTableCell) => {
  const theme = useTheme();

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


  return componentThemed(theme);
};

export default TableCell;
