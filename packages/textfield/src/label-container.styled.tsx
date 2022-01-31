import styled from 'styled-components';

import ItextField from '../types/itext-field';

const LabelContainer =
  styled('div') <
  ItextField >
  `
  background-color: ${(props: ItextField) => (props.isExistValue ? '#ffffff' : 'transparent')};
  padding-left: 4px;
  padding-right: 4px;
  display: block;
  position: absolute;
  top: ${(props: ItextField) => (props.isExistValue ? '-10px' : '35%')};
  left: 5px;
  z-index: 1;
  transform: translateY(${(props: ItextField) => (props.isExistValue ? 0 : '-50%')}) rotate(360deg);
  border-radius: 3px;
  transition: all 100ms ease-in-out;
`;

export default LabelContainer;
