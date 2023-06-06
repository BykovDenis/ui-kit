import React from 'react';
import TButtonVariants from './tbutton-variants';
import TButtonStyled from './tbutton-styled';
import Variant from "../../enums/variant";

type TButton = TButtonStyled & {
  ReactThemeContext?: any,
  children?: React.ReactNode | string,
  className?: any,
  colorTheme?: 'normal' | 'warning',
  dataset?: any,
  id?: string,
  name?: string,
  onClick?: (evt: React.ChangeEvent<HTMLButtonElement>) => void,
  onDragStart?: (evt: any) => void,
  variant?: Variant,
  justifyContent?: string,
  alignItems?: string,
  padding?: string,
  type?: string,
  cssVariables?: {[key: string]: value},
};

export default TButton;
