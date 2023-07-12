import React from 'react';

interface ICheckbox {
  backgroundColor?: string;
  checked?: boolean;
  className?: any;
  color?: string;
  disabled?: boolean;
  fontFamily?: string;
  fontSize?: number;
  id: string;
  indeterminate?: boolean;
  label?: string | React.ReactNode;
  name?: string;
  onChange?: (evt: any) => void;
  tabIndex?: string;
  theme?: any;
  readOnly?: boolean;
  value?: string;
  isIconDisabled?: boolean;
}

export default ICheckbox;
