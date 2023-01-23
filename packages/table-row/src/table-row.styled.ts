import styled from 'styled-components';

import isNotEmptyNumber from '../../helpers/is-not-empty-number';
import TTableRow from '../types/ttable-row';

const TableRowStyled =
  styled.tr <
  TTableRow >
  `
  position: ${(props: TTableRow) => props?.position ?? 'relative'};
  font-weight: ${(props: TTableRow) =>
    isNotEmptyNumber(props?.fontWeight) ? props?.fontWeight : props?.isHeader ? 900 : 400};
  background-color: ${(props: TTableRow) => props?.backgroundColor};  
  &:nth-child(even) {
    background-color: ${(props: TTableRow) => props?.bgOddColumnColor};
  }  
`;

export default TableRowStyled;
