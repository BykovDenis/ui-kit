import styled from 'styled-components';

import ISelect from '../types/iselect';

interface ILabelContainer {
  backgroundColor: string;
  isExistValue: boolean;
}

const LabelContainer =
  styled('div') <
  ILabelContainer >
  `
  background-color: ${(props: ISelect) => (props.isExistValue ? props.backgroundColor : 'transparent')};
  padding-left: 4px;
  padding-right: 4px;
  display: block;
  position: absolute;
  top: ${(props: ISelect) => (props.isExistValue ? '-10px' : '50%')};
  left: ${(props: ISelect) => (props.isExistValue ? '5px' : '15px')};
  z-index: 1;
  transform: translateY(${(props: ISelect) => (props.isExistValue ? 0 : '-50%')}) rotate(360deg);
  border-radius: 3px;
  transition: all 100ms ease-in-out;
`;

export default LabelContainer;
