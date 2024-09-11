import React from 'react';
import TBaseStyles from '../../types/tbase-styles';
import CSS from 'csstype';

type CheckboxProps = TBaseStyles & {
  checked?: boolean;
  id: string;
  indeterminate?: boolean;
  label?: string | React.ReactNode;
  onChange?: (evt: React.ChangeEvent<HtmlRadioButton>) => void;
  tabIndex?: string;
  theme?: any;
  readOnly?: boolean;
  value?: string;
  isIconDisabled?: boolean;
  borderColor?: CSS.Property.BorderColor;
};

export default CheckboxProps;
