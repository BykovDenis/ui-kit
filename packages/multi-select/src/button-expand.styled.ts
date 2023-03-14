import styled from 'styled-components';

type TButtonExpandStyled = {
  fontSize: string,
  color: string,
};

const ButtonExpandStyled =
  styled.button <
  TButtonExpandStyled >
  `
  font-size: ${(props: TButtonExpandStyled) => props.fontSize};
  border: 1px solid ${(props: TButtonExpandStyled) => props.color};
  background: none;  
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export default ButtonExpandStyled;
