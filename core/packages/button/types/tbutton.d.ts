import React from 'react';
import TButtonVariants from './tbutton-variants';
import TButtonStyled from './tbutton-styled';
import * as CSS from 'csstype';

type TButton = TButtonStyled & {
  ReactThemeContext?: any;
  children?: React.ReactNode | string;
  className?: any;
  colorTheme?: 'normal' | 'warning';
  dataset?: any;
  id?: string;
  name?: string;
  onClick?: (evt: React.ChangeEvent<HTMLButtonElement>) => void;
  onDragStart?: (evt: any) => void;
  theme?: any;
  variant?: TButtonVariants;
  justifyContent?: CSS.Property.JustifyContent;
  alignItems?: CSS.Property.AlignItems;
  padding?: string;
};

export default TButton;
