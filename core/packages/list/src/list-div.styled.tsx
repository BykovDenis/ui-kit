import { styled } from 'styled-components';

import isNotEmptyString from '../../helpers/is-not-empty-string';
import Ilist from '../types/ilist';
import getMeasureValue from "../../helpers/get-measure-value";

const ListDiv =
  styled('div') <
  Ilist >
  `
    ${(props: Ilist) => `  
      display: block;
      list-style: none;
      font-family: ${props.fontFamily};
      width: ${props?.width ? getMeasureValue(props.width)  : '100%'};
      ${props.margin ? `margin: ${props.margin};` : ''}
      ${props.padding ? `margin: ${props.padding};` : ''} 
  `}
`;

export default ListDiv;
