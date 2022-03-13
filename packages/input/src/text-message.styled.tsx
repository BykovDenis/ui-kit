import styled from 'styled-components';

import Iinput from '../types/iinput';

const TextMessage =
  styled('p') <
  Iinput >
  `
  display: block;
  margin: 0;
  margin-top: 3px;  
  padding: 0;
  font-family: ${(props: Iinput) => props.fontFamily};
  font-size: ${(props: Iinput) => props.fontSize - 2}px; 
  text-align: left;  
  color: ${(props: Iinput) => props?.color};
`;

export default TextMessage;
