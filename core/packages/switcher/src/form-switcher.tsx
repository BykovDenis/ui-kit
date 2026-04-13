import { styled } from 'styled-components';
import CSS from "csstype";
import getMeasureValue from "../../helpers/get-measure-value";

type TFormSwitcher = {
  backgroundColor?: CSS.Property.BackgroundColor,
  borderColor: string,
  width?: number | string,
  height?: number | string,
};

const FormSwitcher =
  styled.div <
  TFormSwitcher >
  `
  display: flex;
  flex-direction: row;
  background-color: ${(props: TFormSwitcher) => props.backgroundColor};
  border: 1px solid ${(props: TFormSwitcher) => props.borderColor};
  box-sizing: border-box;
  border-radius: 4px;
  width: ${(props: TFormSwitcher) => getMeasureValue(props.width, '100%')};
  height: ${(props: TFormSwitcher) => getMeasureValue(props.height, '100%')};
`;

export default FormSwitcher;
