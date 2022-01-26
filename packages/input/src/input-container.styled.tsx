import styled from 'styled-components';

import IInput from '../types/iinput';

const InputContainer =
  styled('div') <
  IInput >
  `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  width: ${(props: IInput) => props?.width}px;
  height: ${(props: IInput) => props?.height + 5}px;
`;

export default InputContainer;
