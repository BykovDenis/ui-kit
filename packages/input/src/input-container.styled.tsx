import styled from 'styled-components';

import IInput from '../types/iinput';

const InputContainer =
  styled('div') <
  IInput >
  `
  position: relative;  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  width: ${(props: IInput) => (props?.width ? `${props?.width}px` : `100%`)};
  height: ${(props: IInput) => props?.height + 5}px;
`;

export default InputContainer;
