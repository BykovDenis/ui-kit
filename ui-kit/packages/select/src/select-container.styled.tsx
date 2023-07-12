import styled from 'styled-components';

interface ISelectContainer {
  width?: number;
  height?: number;
}

const SelectContainer =
  styled('div') <
  ISelectContainer >
  `
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  width: ${(props: ISelectContainer) => (props?.width ? `${props?.width}px` : `100%`)};
  height: ${(props: ISelectContainer) => (props?.height ? `${props?.height + 5}px` : 'calc(100% + 5px)')};
  line-height: 1;
`;

export default SelectContainer;
