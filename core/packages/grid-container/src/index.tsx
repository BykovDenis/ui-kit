import React, { useEffect, useState } from 'react';

import TGridContainer from '../types/tgrid-container';
import ITheme from '../../styles/types/itheme';
import GridContainerStyled from "./grid-container.styled";
import isNotEmptyString from "../../helpers/is-not-empty-string";
import isNotEmptyNumber from "../../helpers/is-not-empty-number";
import getMeasureValue from "../../helpers/get-measure-value";

const GridContainer: React.FunctionComponent<TGridContainer> = (props: TGridContainer) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const columns: number = props?.columns ?? 1;
  const rows: number = props?.columns ?? 1;

  let gridTemplateColumns: string = props?.gridTemplateColumns ?? '';
  let gridTemplateRows: string = props?.gridTemplateRows ?? '';
  let gridColumnGap: number | string = props?.gridColumnGap ?? '';
  let gridRowGap: number | string = props?.gridRowGap ?? '';
  let gridGap: number | string = getMeasureValue(props?.gap, '');

  if (!isNotEmptyString(gridTemplateColumns)) {
    if (!isNotEmptyNumber(columns)) {
      gridTemplateColumns = 'auto';
    } else {
      for (let i: number = 0; i < columns; i++) {
        gridTemplateColumns = `${gridTemplateColumns} ${getMeasureValue(props?.columnWidth, 'auto')}`;
      }
    }
  }
  if (!isNotEmptyString(gridTemplateRows)) {
    if (!isNotEmptyNumber(rows)) {
      gridTemplateRows = 'auto';
    } else {
      for (let i: number = 0; i < columns; i++) {
        gridTemplateRows = `${gridTemplateRows} ${getMeasureValue(props?.rowHeight, 'auto')}`;
      }
    }
  }

  gridTemplateColumns = gridTemplateColumns.trim();
  gridTemplateRows = gridTemplateRows.trim();

  const componentThemed: any = (theme: ITheme) => {
    return (
      <GridContainerStyled
        {...props}
        fontSize={props?.fontSize ?? theme.baseFontSize}
        backgroundColor={props?.backgroundColor || theme.mainBackgroundColor}
        color={props?.color || theme?.palette?.baseFontColor}
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateRows={gridTemplateRows}
        gridGap={gridGap}
        gridColumnGap={gridColumnGap}
        gridRowGap={gridRowGap}
      >
        {props.children}
      </GridContainerStyled>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default GridContainer;
