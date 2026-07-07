import { styled } from '@dbykov-ui-kit/styles';

type TButtonExpandStyled = {
  fontSize: string,
  borderColorFocused: string,
};

const ButtonExpandStyled =
  styled.button <
  TButtonExpandStyled >
  `
  font-size: ${(props: TButtonExpandStyled) => props.fontSize}px;
  border: none;
  background: none;
  `;

export default ButtonExpandStyled;
