import styled from 'styled-components';

import TTable from '../types/ttable';

const TableStyled = styled.table`
  position: ${(props: TTable) => props?.position ?? 'relative'};
  background-color: ${(props: TTable) => props?.backgroundColor};
  color: ${(props: TTable) => props?.color};
  font-family: ${(props: TTable) => props?.fontFamily};
  text-align: ${(props: TTable) => props?.textAlign ?? 'center'};
  border-collapse: collapse;
`;

export default TableStyled;
