import React from 'react';

type TButton = {
  ReactThemeContext?: any,
  backgroundColor?: string,
  backgroundImage?: string,
  baseFontSize?: string,
  borderRadius?: string,
  children?: any | Array<any>, // React.ReactNode | number | string | Array<React.ReactNode>,
  className?: any,
  color?: string,
  colorTheme?: 'normal' | 'warning',
  dataset?: any,
  disabled?: boolean,
  draggable?: boolean,
  focusColor?: string,
  fontFamily?: string,
  fontSize?: number,
  fontWeight?: number,
  height?: number | string,
  id?: string,
  name?: string,
  onClick?: (evt: React.ChangeEvent<HTMLButtonElement>) => void,
  onDragStart?: (evt: any) => void,
  theme?: any,
  type?: string,
  variant?: TButtonVariants,
  width?: number | string,
};

export default TButton;
