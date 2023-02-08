import styled from 'styled-components';

import isNotEmptyNumber from '../../helpers/is-not-empty-number';
import TTableRow from '../types/ttable-row';
import getMeasureValue from '../../helpers/get-measure-value';

const TableRowStyled =
  styled.tr <
  TTableRow >
  `
  position: ${(props: TTableRow) => props?.position ?? 'relative'};
  font-weight: ${(props: TTableRow) =>
    isNotEmptyNumber(props?.fontWeight) ? props?.fontWeight : props?.isHeader ? 900 : 400};
  background-color: ${(props: TTableRow) => props?.backgroundColor};
  width: 100%;
  min-height: ${(props: TTableRow) => getMeasureValue(props?.minHeight)};
`;

export default TableRowStyled;
