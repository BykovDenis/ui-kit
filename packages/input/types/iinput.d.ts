import React from 'react';

import IInputVariants from './iinput-variants';

interface IInput {
  ReactThemeContext?: any;
  backgroundColor?: string;
  backgroundImage?: string;
  baseFontSize: number;
  borderColor?: string;
  className?: any;
  color?: string;
  colorTheme?: string;
  disabled?: boolean;
  disabledBackgroundColor?: string;
  disabledColor?: string;
  error?: boolean;
  focusBackgroundColor?: string;
  focusColor?: string;
  fontFamily: string;
  fontSize: number;
  fontWeight?: number;
  height: number;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  id?: string;
  isSeparateNumberFormat?: boolean;
  max?: number;
  min?: number;
  name: string;
  onBlur: () => void;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onInput?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: (name: string, value: string) => void;
  ref?: any;
  required?: boolean;
  step?: number;
  textAlign: string;
  textMessage?: string;
  theme?: any;
  type?: string;
  value: number | string;
  variant?: IInputVariants;
  width: number;
}

export default IInput;
