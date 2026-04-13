import styled from 'styled-components';

import TTable from '../types/ttable';
import getMeasureValue from '../../helpers/get-measure-value';

const TableStyled =
  styled.table <
  TTable >
  `
  width: ${(props: TTable) => getMeasureValue(props?.width, '100%')};
    position: ${(props: TTable) => props?.position ?? 'relative'};
  background-color: ${(props: TTable) => props?.backgroundColor};
  color: ${(props: TTable) => props?.color};
  font-family: ${(props: TTable) => props?.fontFamily};
  text-align: ${(props: TTable) => props?.textAlign ?? 'center'};
  border-collapse: collapse;
  & > tbody > tr:nth-of-type(even) {
    background-color: ${(props: TTable) => props?.bgOddColumnColor};
  }
`;

export default TableStyled;
