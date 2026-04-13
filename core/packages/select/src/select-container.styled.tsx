import { styled } from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

interface ISelectContainer {
  width?: number | string;
  height?: number;
  margin: string;
}

const SelectContainer = styled('div')<ISelectContainer>`
  position: relative;
  display: block;
  margin: ${(props: ISelectContainer) => props?.margin ?? 0};
  padding: 0;
  width: ${(props: ISelectContainer) => getMeasureValue(props.width, '100%')};
  height: ${(props: ISelectContainer) => (props?.height ? `${props?.height + 5}px` : 'initial')};
  line-height: 1;
`;

export default SelectContainer;
