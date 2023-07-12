import styled from 'styled-components';

import TTableHead from '../types/ttable-head';

const TableHeadStyled = styled.thead`
  position: ${(props: TTableHead) => props?.position ?? 'relative'};
`;

export default TableHeadStyled;
