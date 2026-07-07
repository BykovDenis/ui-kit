import { styled } from '@dbykov-ui-kit/styles';

interface ISelectHeader {
  height: number;
}

const SelectHeader =
  styled('div') <
  ISelectHeader >
  `
  position: relative;
  border-radius: 3px;
  height: ${(props: ISelectHeader) => props.height}px;  
`;

export default SelectHeader;
