import styled from 'styled-components';

import isNotEmptyString from '../../helpers/is-not-empty-string';
import Ilist from '../types/ilist';

const ListDiv =
  styled('div') <
  Ilist >
  `
  display: block;
  list-style: none;
  font-family: ${(props: Ilist) => props.fontFamily};
  margin: ${(props: Ilist) => (isNotEmptyString(props.margin) ? props.margin : 0)}; 
`;

export default ListDiv;
