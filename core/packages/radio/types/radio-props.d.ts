import React from 'react';
import TBaseStyles from '../../types/tbase-styles';
import CSS from 'csstype';

type RadioProps = TBaseStyles & {
  ReactThemeContext?: any;
  checked?: boolean;
  focusColor?: string;
  id: string;
  label?: string | React.ReactNode;
  name?: string;
  onChange?: (evt: React.ChangeEvent<HtmlRadioButton>) => void;
  tabIndex?: any;
  theme?: any;
  value?: string;
  isIconDisabled?: boolean;
  borderColor?: CSS.Property.BorderColor;
};

export default RadioProps;
