import { styled } from '@dbykov-ui-kit/styles';
import TTableBody from '../types/ttable-body';

const TableBodyStyled = styled.tbody`
  position: ${(props: TTableBody) => (props?.position ? props.position : 'relative')};
`;

export default TableBodyStyled;
