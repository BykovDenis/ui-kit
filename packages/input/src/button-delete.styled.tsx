import styled from 'styled-components';

import Variants from '../../enums/variants';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import IInput from '../types/iinput';

const ButtonDelete =
  styled('button') <
  IInput >
  `
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: none;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  &:hover .delete-icon > path {
    stroke: ${(props: IInput) => props.hoverColor};
    fill: ${(props: IInput) => props.hoverColor};
  }
  &:focus {
    outline: ${(props: IInput) => (props?.variant === Variants.Outlined ? 0 : rgbToRgba(props?.focusColor, 0.3))};
    box-shadow: 1px 1px 5px 3px ${(props: IInput) => rgbToRgba(props?.focusColor, 0.3)};
    & .delete-icon > path {
      stroke: ${(props: IInput) => props?.focusColor};
      fill: ${(props: IInput) => props?.focusColor};
    }
  }
  &:active {
    outline: ${(props: IInput) => (props?.variant === Variants.Outlined ? 0 : rgbToRgba(props?.focusColor, 0.5))};
    box-shadow: 1px 2px 5px 3px ${(props: IInput) => rgbToRgba(props?.focusColor, 0.5)};
  }
`;

export default ButtonDelete;
