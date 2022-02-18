import styled from 'styled-components';

import ITextField from '../types/itext-field';

const LabelContainer =
  styled('div') <
  ITextField >
  `
  background-color: ${(props: ITextField) => (props.isExistValue ? '#ffffff' : 'transparent')};
  padding-left: 4px;
  padding-right: 4px;
  display: block;
  position: absolute;
  top: ${(props: ITextField) => (props.isExistValue ? '-10px' : props?.isExistTextMessageHelper ? '35%' : '50%')};
  left: 5px;
  z-index: 1;
  transform: translateY(${(props: ITextField) => (props.isExistValue ? 0 : '-50%')}) rotate(360deg);
  border-radius: 3px;
  transition: all 100ms ease-in-out;
`;

export default LabelContainer;
