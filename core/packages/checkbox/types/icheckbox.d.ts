import React from 'react';
import TBaseStyles from '../../types/tbase-styles';

type CheckboxProps = TBaseStyles & {
  backgroundColor?: string;
  checked?: boolean;
  className?: any;
  color?: string;
  disabled?: boolean;
  fontFamily?: string;
  id: string;
  indeterminate?: boolean;
  label?: string | React.ReactNode;
  name?: string;
  onChange?: (evt: React.ChangeEvent<HtmlRadioButton>) => void;
  tabIndex?: string;
  theme?: any;
  readOnly?: boolean;
  value?: string;
  isIconDisabled?: boolean;
};

export default CheckboxProps;
