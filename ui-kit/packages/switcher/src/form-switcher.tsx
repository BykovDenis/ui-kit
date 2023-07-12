import styled from 'styled-components';

type TFormSwitcher = {
  backgroundColor?: string,
  borderColor: string,
};

const FormSwitcher =
  styled.form <
  TFormSwitcher >
  `
  display: flex;
  flex-direction: row;
  background-color: ${(props: TFormSwitcher) => props.backgroundColor};
  border: 1px solid ${(props: TFormSwitcher) => props.borderColor};;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;  
`;

export default FormSwitcher;
