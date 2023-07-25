import styled from 'styled-components';

interface IInputContainer {
  width: number;
  height: number;
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
  width: ${(props: IInputContainer) => (props?.width ? `${props?.width}px` : `100%`)};
  height: ${(props: IInputContainer) => (props?.height ? `${props?.height + 5}px` : 'initial')};
`;

export default InputContainer;
