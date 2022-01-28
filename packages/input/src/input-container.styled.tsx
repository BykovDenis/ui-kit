import styled from 'styled-components';

import Iinput from '../types/iinput';

const InputContainer =
  styled('div') <
  Iinput >
  `
  position: relative;  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  width: ${(props: Iinput) => (props?.width ? `${props?.width}px` : `100%`)};
  height: ${(props: Iinput) => props?.height + 5}px;
`;

export default InputContainer;
