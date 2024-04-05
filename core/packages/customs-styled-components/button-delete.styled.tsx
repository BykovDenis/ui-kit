import styled from 'styled-components';

import Variants from '../enums/variants';
import rgbToRgba from '../helpers/rgb-to-rgba';

interface IButtonDelete {
  variant?: Variants;
  hoverColor?: string;
  focusColor?: string;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

const ButtonDelete = styled('button')<IButtonDelete>`
  position: absolute;
  right: 5px;
  top: 0;
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
    stroke: ${(props: IButtonDelete) => props.hoverColor};
    fill: ${(props: IButtonDelete) => props.hoverColor};
  }
  &:focus {
    outline: ${(props: IButtonDelete) =>
      props?.variant === Variants.Outlined ? 0 : rgbToRgba(props?.focusColor, 0.3)};
    box-shadow: 1px 1px 5px 3px ${(props: IButtonDelete) => rgbToRgba(props?.focusColor, 0.3)};
    & .delete-icon > path {
      stroke: ${(props: IButtonDelete) => props?.focusColor};
      fill: ${(props: IButtonDelete) => props?.focusColor};
    }
  }
  &:active {
    outline: ${(props: IButtonDelete) =>
      props?.variant === Variants.Outlined ? 0 : rgbToRgba(props?.focusColor, 0.5)};
    box-shadow: 1px 2px 5px 3px ${(props: IButtonDelete) => rgbToRgba(props?.focusColor, 0.5)};
  }
`;

export default ButtonDelete;
