import React from 'react';

import ITheme from '../../styles/types/itheme';
import TTableRow from '../types/ttable-row';
import TableRowStyled from './table-row.styled';
import { useTheme } from '@dbykov-ui-kit/styles';

const TableRow: React.FunctionComponent<TTableRow> = (props: TTableRow) => {
  const theme = useTheme();

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string =
      props?.backgroundColor ?? props?.isHeader ? theme.palette.primary.main : theme.mainBackgroundColor;
    const borderColor: string = theme?.mainOutlinedColor;

    return (
      <TableRowStyled {...props} backgroundColor={backgroundColor} borderColor={borderColor}>
        {props.children}
      </TableRowStyled>
    );
  };


  return componentThemed(theme);
};

export default TableRow;
