import styled from 'styled-components';

import IList from '../types/ilist';

const ListDiv = styled('div')`
  list-style: none;
  font-family: ${(props: IList) => props.fontFamily};
`;

export default ListDiv;
