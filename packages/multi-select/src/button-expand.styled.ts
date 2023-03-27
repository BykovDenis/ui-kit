import styled from 'styled-components';

type TButtonExpandStyled = {
  fontSize: string,
  borderColor: string,
  borderColorFocused: string,
};

const ButtonExpandStyled =
  styled.button <
  TButtonExpandStyled >
  `
  font-size: ${(props: TButtonExpandStyled) => props.fontSize};
  border: none;
  border-left: 1px solid ${(props: TButtonExpandStyled) => props.borderColor};
  background: none;
  `;

export default ButtonExpandStyled;
