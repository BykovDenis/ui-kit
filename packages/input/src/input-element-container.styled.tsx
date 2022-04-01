import styled from 'styled-components';

interface IInputElementContainer {
  backgroundColor?: string;
}

const InputElementContainer =
  styled('p') <
  IInputElementContainer >
  `
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${(props: IInputElementContainer) => props.backgroundColor};
  border-radius: 3px;
`;

export default InputElementContainer;
