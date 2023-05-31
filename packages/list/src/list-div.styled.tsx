import styled from 'styled-components';

import isNotEmptyString from '../../helpers/is-not-empty-string';
import Ilist from '../types/ilist';

const ListDiv =
  styled('div') <
  Ilist >
  `
    ${(props: Ilist) => `  
      display: block;
      list-style: none;
      font-family: ${props.fontFamily};
      ${props.margin ? `margin: ${props.margin};` : ''}
      ${props.padding ? `margin: ${props.padding};` : ''} 
  `}
`;

export default ListDiv;
