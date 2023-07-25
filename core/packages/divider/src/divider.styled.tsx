import styled from 'styled-components';
import TDivider from '../types/tdivider';
import getMeasureValue from '../../helpers/get-measure-value';

const Divider =
  styled('hr') <
  TDivider >
  `
  box-sizing: border-box;  
  width: ${(props: TDivider) => getMeasureValue(props?.width, '100%')};
  height: 1px;
  background-color: ${(props: TDivider) => props.color};
  border: none;
  margin: 5px 0;
  margin-bottom: 0;
  opacity: 0.5;
`;

export default Divider;
