import styled from 'styled-components';

import ICheckbox from './icheckbox';

const Label =
  styled.label <
  ICheckbox >
  `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props: ICheckbox) => props.fontFamily};
  cursor: pointer;
  color: ${(props: ICheckbox) => props.color};  
  font-size: ${(props: ICheckbox) => props.fontSize};  
`;

export default Label;
