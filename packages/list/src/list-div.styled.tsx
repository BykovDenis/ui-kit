import styled from 'styled-components';

import Ilist from '../types/ilist';

const ListDiv =
  styled('div') <
  Ilist >
  `
  display: block;
  list-style: none;
  font-family: ${(props: Ilist) => props.fontFamily};
`;

export default ListDiv;
