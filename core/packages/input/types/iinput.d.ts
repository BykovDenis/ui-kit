import React from 'react';
import TBaseStyles from '../../types/tbase-styles';

interface IInput extends TBaseStyles {
  ReactThemeContext?: any;
  backgroundImage?: string;
  baseFontSize?: number;
  borderColor?: string;
  colorTheme?: string;
  disabledBackgroundColor?: string;
  disabledColor?: string;
  error?: boolean;
  focusBackgroundColor?: string;
  focusColor?: string;
  getIsChangingState?: (isChanging: boolean) => void;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  hoverColor?: string;
  isNotClearable?: boolean;
  isReadOnly?: boolean;
  isSeparateNumberFormat?: boolean;
  mask?: RegExp;
  max?: number;
  min?: number;
  onBlur?: (evt: any) => void;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>, name?: string, value?: number | string) => void;
  onClick?: (evt: any) => void;
  onFocus?: (evt: any) => void;
  onInput?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: (name: string, value?: string, evt?: any) => void;
  ref?: any;
  required?: boolean;
  step?: number;
  textAlign?: string;
  textMessage?: string;
  theme?: any;
  type?: string;
  value?: number | string;
  variant?: 'outlined' | 'text' | 'contained';
  inputComponent?: any;
  placeholder?: string;
  textAling?: string;
  inputRef?: React.MutableRefObject<HTMLInputElement>;
  isNotRunDebounce?: boolean;
  height?: number;
}

export default IInput;
