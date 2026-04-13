import { styled } from 'styled-components';
import TTableBody from '../types/ttable-body';

const TableBodyStyled = styled.tbody`
  position: ${(props: TTableBody) => (props?.position ? props.position : 'relative')};
`;

export default TableBodyStyled;
