import { styled } from '@dbykov-ui-kit/styles';

import TTableHead from '../types/ttable-head';

const TableHeadStyled = styled.thead`
  position: ${(props: TTableHead) => props?.position ?? 'relative'};
`;

export default TableHeadStyled;
