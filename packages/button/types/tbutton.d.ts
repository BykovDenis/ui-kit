import React from 'react';
import TButtonVariants from './tbutton-variants';
import TButtonStyled from './tbutton-styled';

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
  theme?: any,
  variant?: TButtonVariants,
  justifyContent?: string,
  alignItems?: string,
  padding?: string,
};

export default TButton;
