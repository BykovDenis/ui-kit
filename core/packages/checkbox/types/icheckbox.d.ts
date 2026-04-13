import CSS from 'csstype';
import React from 'react';

import TBaseStyles from '../../types/tbase-styles';

type CheckboxProps = TBaseStyles & {
  checked?: boolean;
  id: string;
  indeterminate?: boolean;
  label?: React.ReactNode | string;
  onChange?: (evt: React.ChangeEvent<HtmlRadioButton>) => void;
  tabIndex?: number | string;
  theme?: any;
  readOnly?: boolean;
  value?: string;
  isIconDisabled?: boolean;
  borderColor?: CSS.Property.BorderColor;
};

export default CheckboxProps;
