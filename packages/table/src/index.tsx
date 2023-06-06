import React from 'react';

import TTable from '../types/ttable';
import TableStyled from './table.styled';
import getCssVariables from '../../styles/src/get-css-variables';

const Table: React.FunctionComponent<TTable> = (props: TTable) => {
  const cssVariable: any = getCssVariables();
    const color: string = props.color ?? cssVariable.baseFontColor;
    const backgroundColor: string = props.backgroundColor ?? cssVariable.backgroundColor;
    const fontFamily: string = props?.fontFamily ? props?.fontFamily : cssVariable.fontFamily;

    const bgOddColumnColor: string = props.isStrippedColumn ? cssVariable.primaryLighterColor : backgroundColor;

    return (
      <TableStyled
        {...props}
        backgroundColor={backgroundColor}
        color={color}
        fontFamily={fontFamily}
        bgOddColumnColor={bgOddColumnColor}
      >
        {props.children}
      </TableStyled>
    );
};

export default React.memo(Table);
