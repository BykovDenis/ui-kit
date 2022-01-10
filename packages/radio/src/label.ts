import styled from 'styled-components';

import Iradio from '../types/iradio';

const Label =
  styled.label <
  Iradio >
  `
  position: relative;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props: Iradio) => props.fontFamily};
  cursor: pointer;
  color: ${(props: Iradio) => props.color};  
  font-size: ${(props: Iradio) => props.fontSize};  
`;

export default Label;
