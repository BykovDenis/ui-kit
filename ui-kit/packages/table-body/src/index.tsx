import React, { useEffect, useState } from 'react';

import TTableBody from '../types/ttable-body';
import TableBodyStyled from './table-body.styled';

const TableBody: React.FunctionComponent<TTableBody> = (props: TTableBody) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = () => {
    return (
      <TableBodyStyled
        className={props?.className}
      >
        {props.children}
      </TableBodyStyled>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(TableBody);
