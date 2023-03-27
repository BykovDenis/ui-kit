import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

type TMultiSelectContainerStyled = {
  width: number | string,
  borderColor: string,
  borderColorFocused: string,
};

const MultiSelectContainerStyled =
  styled.button <
  TMultiSelectContainerStyled >
  `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColor};
  border-radius: 4px;
  width: ${(props: TMultiSelectContainerStyled) => getMeasureValue(props.width, '100%')};
  background: none;
  padding: 5px;
  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColorFocused};
    & > svg > path {
      fill: ${(props: TMultiSelectContainerStyled) => props.borderColorFocused};
    }
    & > button {
      border-left: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColorFocused};
    }
  }
  `;

export default MultiSelectContainerStyled;
