import styled from 'styled-components';

type TButtonExpandStyled = {
  fontSize: string,
  borderColorFocused: string,
};

const ButtonExpandStyled =
  styled.button <
  TButtonExpandStyled >
  `
  font-size: ${(props: TButtonExpandStyled) => props.fontSize};
  border: none;
  background: none;
  `;

export default ButtonExpandStyled;
