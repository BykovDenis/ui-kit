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

    const bgOddColumnColor: string = props.isStrippedColumn ? theme.palette.primary.lighter : backgroundColor;

    return (
      <TableRowStyled {...props} backgroundColor={backgroundColor} bgOddColumnColor={bgOddColumnColor}>
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

export default React.memo(TableRow);
