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
  isSeparateNumberFormat?: boolean;
  mask?: RegExp;
  max?: number;
  min?: number;
  onBlur?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (
    evt: React.ChangeEvent<HTMLInputElement>,
    name: string,
    value?: number | string | null | undefined
  ) => void;
  onClick?: (evt: any) => void;
  onFocus?: (evt: any) => void;
  onInput?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: (name: string, value?: string | null | undefined, evt?: any) => void;
  ref?: any;
  required?: boolean;
  step?: number;
  textMessage?: string;
  theme?: any;
  type?: string;
  value?: number | string | null | undefined;
  variant?: 'outlined' | 'text' | 'contained';
  inputComponent?: any;
  placeholder?: string;
  textAlign?: string;
  inputRef?: React.MutableRefObject<HTMLInputElement>;
  isNotRunDebounce?: boolean;
  height?: number;
  delayDebounce?: number;
}

export default IInput;
