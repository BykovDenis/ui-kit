import { styled } from 'styled-components';

interface ISelectIndicator {
  backgroundColor?: string;
}

const SelectIndicator =
  styled('div') <
  ISelectIndicator >
  `
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props: ISelectIndicator) => (props?.backgroundColor ? props.backgroundColor : 'transparent')}
`;

export default SelectIndicator;
