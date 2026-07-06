import React from 'react';

import ITheme from '../../styles/types/itheme';
import TTable from '../types/ttable';
import TableStyled from './table.styled';
import { useTheme } from '@dbykov-ui-kit/styles';

const Table: React.FunctionComponent<TTable> = (props: TTable) => {
  const theme = useTheme();

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props.color ?? theme.palette.baseFontColor;
    const backgroundColor: string = props.backgroundColor ?? theme.mainBackgroundColor;
    const fontFamily: string = props?.fontFamily ? props?.fontFamily : theme.fontFamily;

    const bgOddColumnColor: string = props.isStrippedColumn ? theme.palette.primary.lighter : backgroundColor;

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


  return componentThemed(theme);
};

export default Table;
