import { styled } from 'styled-components';
import getMeasureValue from '../../helpers/get-measure-value';
import rgbToRgba from '../../helpers/rgb-to-rgba';

type TMultiSelectContainerStyled = {
  width: number | string;
  borderColor: string;
  borderColorFocused: string;
  borderColorHovered: string;
  backgroundColor: string;
  id?: string;
};

const MultiSelectContainerStyled = styled.button<TMultiSelectContainerStyled>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColor};
  border-radius: 4px;
  width: ${(props: TMultiSelectContainerStyled) => getMeasureValue(props.width, '100%')};
  background-color: ${(props: TMultiSelectContainerStyled) => props.backgroundColor};
  padding: 5px;
  &:enabled:hover {
    border: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColorHovered};
    & button[data-name='button-toggle'] svg path {
      fill: ${(props: TMultiSelectContainerStyled) => props.borderColorHovered};
    }
    & div[data-id='multi-select-border-right'] {
      border-right: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColorHovered};
    }
  }
  &:enabled:focus,
  &:enabled:active {
    border: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColorFocused};
    outline: ${(props: TMultiSelectContainerStyled) => rgbToRgba(props?.borderColorFocused, 0.3)};
    box-shadow: 1px 1px 5px 3px ${(props: TMultiSelectContainerStyled) => rgbToRgba(props?.borderColorFocused, 0.3)};
    border-color: ${(props: TMultiSelectContainerStyled) => props?.borderColorFocused};
    & button[data-name='button-toggle'] svg path {
      fill: ${(props: TMultiSelectContainerStyled) => props.borderColorFocused};
    }
    & div[data-id='multi-select-border-right'] {
      border-right: 1px solid ${(props: TMultiSelectContainerStyled) => props.borderColorFocused};
    }
  }
`;

export default MultiSelectContainerStyled;
