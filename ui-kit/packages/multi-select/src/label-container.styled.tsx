import styled from 'styled-components';

interface ILabelContainer {
  backgroundColor: string;
}

const LabelContainer =
  styled('div') <
  ILabelContainer >
  `
  background-color: ${(props: ILabelContainer) => props.backgroundColor};
  padding-left: 4px;
  padding-right: 4px;
  display: block;
  position: absolute;
  top: 0;
  left: 5px;
  z-index: 1;
  transform: translateY(-50%) rotate(360deg);
  border-radius: 3px;
  transition: all 100ms ease-in-out;
`;

export default LabelContainer;
