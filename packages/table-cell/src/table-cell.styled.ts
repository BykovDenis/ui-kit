import styled from 'styled-components';

import TTableCell from '../types/ttable-cell';
import getMeasureValue from '../../helpers/get-measure-value';

const TableCellStyled =
  styled.td <
  TTableCell >
  `
  width: ${(props: TTableCell) => getMeasureValue(props?.width, 'initial')};  
  position: ${(props: TTableCell) => props?.position ?? 'relative'};
  padding: ${(props: TTableCell) => props?.padding ?? '5px'};
  border-right: ${(props: TTableCell) => (props?.borderColor ? `1px solid ${props.borderColor}` : 'none')};
  border-bottom: ${(props: TTableCell) => (props?.borderColor ? `1px solid ${props.borderColor}` : 'none')};
  vertical-align: middle;
`;

export default TableCellStyled;
