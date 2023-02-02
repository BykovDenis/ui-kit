import styled from 'styled-components';

import getMeasureValue from '../../helpers/get-measure-value';

type TButtonStyled = {
  minHeight: number | string,
};

const ButtonStyled =
  styled.button <
  TButtonStyled >
  `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: inherit;
  border: 0;
  width: 100%;
  background-color: transparent;
  min-height: ${(props: TButtonStyled) => getMeasureValue(props?.minHeight)}
`;

export default ButtonStyled;
