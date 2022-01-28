import React from 'react';

import IInputVariants from './iinput-variants';

interface Iinput {
  ReactThemeContext?: any;
  backgroundColor?: string;
  backgroundImage?: string;
  baseFontSize: number;
  borderColor?: string;
  className?: any;
  color?: string;
  colorTheme?: string;
  dataset?: any;
  disabled?: boolean;
  disabledBackgroundColor?: string;
  disabledColor?: string;
  error?: boolean;
  focusBackgroundColor?: string;
  focusColor?: string;
  fontFamily: string;
  fontSize: number;
  height: number;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  id?: string;
  isSeparateNumberFormat?: boolean;
  name: string;
  onBlur: () => void;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onInput?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: (name: string, value: string) => void;
  textAlign: string;
  textMessage?: string;
  theme?: any;
  type?: string;
  value: number | string;
  variant?: IInputVariants;
  width: number;
}

export default Iinput;
