import styled from 'styled-components';

import IList from '../types/ilist';

const List = styled('ul')`
  list-style: none;
  padding: 0;
  font-family: ${(props: IList) => props.fontFamily};
`;

export default List;
