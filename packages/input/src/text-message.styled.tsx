import styled from 'styled-components';

import IInput from '../types/iinput';

const TextMessage =
  styled('p') <
  IInput >
  `
  display: block;
  margin: 0;
  padding: 0;
  font-family: ${(props: IInput) => props.fontFamily};
  font-size: ${(props: IInput) => props.fontSize - 2}px; 
  text-align: left;  
  color: ${(props: IInput) => props?.color};
`;

export default TextMessage;
