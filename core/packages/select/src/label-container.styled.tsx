import { styled } from 'styled-components';

import Iselect from '../types/iselect';

interface ILabelContainer {
  backgroundColor: string;
  isExistValue?: boolean;
}

const LabelContainer =
  styled('div') <
  ILabelContainer >
  `
  background-color: ${(props: ILabelContainer) => (props.isExistValue ? props.backgroundColor : 'transparent')};
  padding-left: 4px;
  padding-right: 4px;
  display: block;
  position: absolute;
  top: ${(props: ILabelContainer) => (props.isExistValue ? '-10px' : '50%')};
  left: ${(props: ILabelContainer) => (props.isExistValue ? '5px' : '15px')};
  z-index: 1;
  transform: translateY(${(props: ILabelContainer) => (props.isExistValue ? 0 : '-50%')}) rotate(360deg);
  border-radius: 3px;
  transition: all 100ms ease-in-out;
`;

export default LabelContainer;
