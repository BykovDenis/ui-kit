import styled from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';

type TMultiSelectContainerStyled = {
  width: number | string,
  borderColor: string,
  borderColorFocused: string,
  borderColorHovered: string,
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
  &:hover {
    border: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColorHovered};
    & button[data-name="button-toggle"] svg path {
      fill: ${(props: TMultiSelectContainerStyled) => props.borderColorHovered};
    }
    & div[data-id="multi-select-border-right"] {
      border-right: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColorHovered};
    }
    & label[data-label="multiselect-label"] {
      color: ${(props: TMultiSelectContainerStyled) => props.borderColorHovered};
    }
  }
  &:focus,
  &:active {
    border: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColorFocused};
    & button[data-name="button-toggle"] svg path {
      fill: ${(props: TMultiSelectContainerStyled) => props.borderColorFocused};
    }
    & div[data-id="multi-select-border-right"] {
      border-right: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColorFocused};
    }
    & label[data-label="multiselect-label"] {
      color: ${(props: TMultiSelectContainerStyled) => props.borderColorFocused};
    }
  }
  `;

export default MultiSelectContainerStyled;
