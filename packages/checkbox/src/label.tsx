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
  font-family: Roboto, Arial, sans-serif;
  cursor: pointer;
  color: ${(props: ICheckbox) => props.color}  
`;

export default Label;
