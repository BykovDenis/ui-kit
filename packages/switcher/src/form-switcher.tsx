import styled from 'styled-components';

interface IFormSwitcher {
  backgroundColor?: string;
}

const FormSwitcher =
  styled.form <
  IFormSwitcher >
  `
  display: flex;
  flex-direction: row;
  background-color: ${(props: IFormSwitcher) => props.backgroundColor ?? '#ffffff'};
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
`;

export default FormSwitcher;
