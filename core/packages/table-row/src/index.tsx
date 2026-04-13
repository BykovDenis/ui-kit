import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import TTableRow from '../types/ttable-row';
import TableRowStyled from './table-row.styled';

const TableRow: React.FunctionComponent<TTableRow> = (props: TTableRow) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

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

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default TableRow;
