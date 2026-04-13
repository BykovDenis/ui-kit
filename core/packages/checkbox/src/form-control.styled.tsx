import { styled } from 'styled-components';

interface IFormControlStylish {
  isExistLabel: boolean;
}

const FormControl =
  styled.p <
  IFormControlStylish >
  `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props: IFormControlStylish) => (props.isExistLabel ? 'flex-start' : 'center')};
  margin: 0;
  padding: 0;
`;

export default FormControl;
