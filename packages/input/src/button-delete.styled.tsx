import styled from 'styled-components';

import Variants from '../../enums/variants';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import Iinput from '../types/iinput';

const ButtonDelete =
  styled('button') <
  Iinput >
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
    stroke: ${(props: Iinput) => props.hoverColor};
    fill: ${(props: Iinput) => props.hoverColor};
  }
  &:focus {
    outline: ${(props: Iinput) => (props?.variant === Variants.Outlined ? 0 : rgbToRgba(props?.focusColor, 0.3))};
    box-shadow: 1px 1px 5px 3px ${(props: Iinput) => rgbToRgba(props?.focusColor, 0.3)};
    & .delete-icon > path {
      stroke: ${(props: Iinput) => props?.focusColor};
      fill: ${(props: Iinput) => props?.focusColor};
    }
  }
  &:active {
    outline: ${(props: Iinput) => (props?.variant === Variants.Outlined ? 0 : rgbToRgba(props?.focusColor, 0.5))};
    box-shadow: 1px 2px 5px 3px ${(props: Iinput) => rgbToRgba(props?.focusColor, 0.5)};
  }
`;

export default ButtonDelete;
