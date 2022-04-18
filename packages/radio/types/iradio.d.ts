import React from 'react';

interface IRadio {
  ReactThemeContext?: any;
  backgroundColor?: string;
  checked?: boolean;
  className?: string;
  color?: string;
  disabled?: boolean;
  focusColor?: string;
  fontFamily?: string;
  fontSize?: string;
  id: string;
  label?: string | React.ReactNode;
  name?: string;
  onChange?: (evt: any) => void;
  tabIndex?: any;
  theme?: any;
  value?: string;
}

export default IRadio;
