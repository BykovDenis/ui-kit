import styled from 'styled-components';

import IRadio from '../types/iradio';

const Label =
  styled.label <
  IRadio >
  `
  position: relative;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props: IRadio) => props.fontFamily};
  cursor: pointer;
  color: ${(props: IRadio) => props.color};  
  font-size: ${(props: IRadio) => props.fontSize};  
`;

export default Label;
