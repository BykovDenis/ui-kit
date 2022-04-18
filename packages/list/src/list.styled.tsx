import styled from 'styled-components';

import Ilist from '../types/ilist';

const List = styled('ul')`
  list-style: none;
  padding: 0;
  font-family: ${(props: Ilist) => props.fontFamily};
`;

export default List;
