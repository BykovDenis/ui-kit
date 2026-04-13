import styled from 'styled-components';

import IList from '../types/ilist';
import getMeasureValue from '../../helpers/get-measure-value';

const List =
  styled('ul') <
  IList >
  `
  list-style: none;
  padding: 0;
  width: ${(props: IList) => props?.width ? getMeasureValue(props.width)  : '100%'};
  font-family: ${(props: IList) => props.fontFamily};
  font-size: ${(props: IList) => getMeasureValue(props.fontSize, 'inherit')};   
`;

export default List;
