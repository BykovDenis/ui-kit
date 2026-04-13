import { styled } from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

interface IInputContainer {
  width?: number | string;
  height?: number;
}

const InputContainer =
  styled('div') <
  IInputContainer >
  `
  position: relative;  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  width: ${(props: IInputContainer) => getMeasureValue(props.width, '100%')};
  height: ${(props: IInputContainer) => (props?.height ? `${props?.height + 5}px` : 'initial')};
`;

export default InputContainer;
