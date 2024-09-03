import styled from 'styled-components';

import TButton from '../../button/types/tbutton';
import getMeasureValue from '../../helpers/get-measure-value';
import isNotEmptyNumber from '../../helpers/is-not-empty-number';
import isNotEmptyString from '../../helpers/is-not-empty-string';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import Variant from '../../enums/variant';

const IconButtonStyled = styled('button')<TButton>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  font-family: ${(props: TButton) => props?.fontFamily};
  border: none;
  border-radius: ${(props: TButton) => (props?.borderRadius ? props?.borderRadius : '50%')};
  font-style: normal;
  font-weight: normal;
  font-size: ${(props: TButton) => props?.fontSize}px;
  line-height: 1;
  text-align: center;
  letter-spacing: 0.39998px;
  color: ${(props: TButton) =>
    props?.variant !== Variant.Outlined || !props?.variant ? props.color : props.backgroundColor};
  padding: ${(props: TButton) => getMeasureValue(props?.padding, '5px')};
  background-color: ${(props: TButton) =>
    props?.variant === Variant.Contained || !props?.variant
      ? props.backgroundColor
      : props?.variant === Variant.Text || props?.variant === Variant.Outlined
      ? 'transparent'
      : props.color};
  background-image: ${(props: TButton) => props?.backgroundImage ?? 'none'};
  cursor: pointer;
  border: ${(props: TButton) =>
    props?.variant === Variant.Outlined ? `1px solid ${props.backgroundColor}` : '1px solid transparent'};
  width: ${(props: TButton) =>
    typeof props?.width === 'string'
      ? isNotEmptyString(props?.width)
        ? props?.width
        : 'initial'
      : isNotEmptyNumber(props?.width)
      ? `${props?.width}px`
      : 'initial'};
  height: ${(props: TButton) => getMeasureValue(props?.height)};

  &:focus {
    outline: 1px solid ${(props: TButton) => rgbToRgba(props?.focusColor, 0.3)};
    box-shadow: 1px 1px 5px 3px ${(props: TButton) => rgbToRgba(props?.focusColor, 0.3)};
  }

  &:hover {
    box-shadow: ${(props: TButton) =>
      props?.variant === Variant.Contained || !props?.variant
        ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
        : '0 1px 1px rgba(0, 0, 0, 0.15)'};
    background-color: ${(props: TButton) =>
      props?.variant === Variant.Contained || !props?.variant
        ? rgbToRgba(props.backgroundColor, 0.85)
        : rgbToRgba(props.backgroundColor, 0.05)};
  }

  &:active {
    box-shadow: ${(props: TButton) =>
      props?.variant === Variant.Contained || !props?.variant
        ? '0 2px 2px 0 rgba(0, 0, 0, 0.25)'
        : '0 1px 1px 0 rgba(0, 0, 0, 0.15)'};
    background-color: ${(props: TButton) =>
      props?.variant === Variant.Contained || !props?.variant
        ? rgbToRgba(props.backgroundColor, 0.5)
        : rgbToRgba(props.backgroundColor, 0.25)};
  }

  &:disabled {
    box-shadow: none;
    border: 1px solid #bdbdbd;
  }
`;

export default IconButtonStyled;
