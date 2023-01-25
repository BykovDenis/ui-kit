import styled from 'styled-components';

import TTable from '../types/ttable';

const TableStyled =
  styled.table <
  TTable >
  `
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
