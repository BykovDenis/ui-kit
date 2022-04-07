import styled from 'styled-components';

import IList from '../types/ilist';

const ListDiv =
  styled('div') <
  IList >
  `
  display: block;
  list-style: none;
  font-family: ${(props: IList) => props.fontFamily};
`;

export default ListDiv;
