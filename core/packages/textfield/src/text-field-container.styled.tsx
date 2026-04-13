import { styled } from 'styled-components';

interface ITextFieldContainerStyled {
  width: number;
  height: number;
  backgroundImage?: string;
}

const TextFieldContainerStyled =
  styled('div') <
  ITextFieldContainerStyled >
  `
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  width: ${(props: ITextFieldContainerStyled) => (props?.width ? `${props?.width}px` : `100%`)};
  height: ${(props: ITextFieldContainerStyled) => (props?.height ? `${props?.height + 5}px` : 'calc(100% + 5px)')};
  line-height: 1;
`;

export default TextFieldContainerStyled;
