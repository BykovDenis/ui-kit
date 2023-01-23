import styled from 'styled-components';

import TTableCell from '../types/ttable-cell';

const TableCellStyled =
  styled.td <
  TTableCell >
  `
  position: ${(props: TTableCell) => props?.position ?? 'relative'};
  padding: ${(props: TTableCell) => props?.padding ?? '10px 24px'};
  border-right: ${(props: TTableCell) => (props?.borderColor ? `1px solid ${props.borderColor}` : 'none')};
  border-bottom: ${(props: TTableCell) => (props?.borderColor ? `1px solid ${props.borderColor}` : 'none')};
  vertical-align: middle;
`;

export default TableCellStyled;
