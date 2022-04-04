import styled from 'styled-components';

import ISelect from '../../select/types/iselect';

const LabelContainer =
  styled('div') <
  ISelect >
  `
  background-color: ${(props: ISelect) => (props.isExistValue ? '#ffffff' : 'transparent')};
  padding-left: 4px;
  padding-right: 4px;
  display: block;
  position: absolute;
  top: ${(props: ISelect) => (props.isExistValue ? '-10px' : 'calc(50% - 3px)')};
  left: 5px;
  z-index: 1;
  transform: translateY(${(props: ISelect) => (props.isExistValue ? 0 : '-50%')}) rotate(360deg);
  border-radius: 3px;
  transition: all 100ms ease-in-out;
`;

export default LabelContainer;
