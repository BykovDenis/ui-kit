import CSS from 'csstype';
import React from 'react';

type TSwitcher = {
  id?: string;
  name?: string;
  activeElement?: string | undefined;
  backgroundColor?: CSS.Property.BackgroundColor;
  classes?: any;
  color?: CSS.Property.Color;
  disabled?: boolean;
  element1: string;
  element2: string;
  onSwitcherChange?: (value: string, name?: string, evt?: React.ChangeEvent<HTMLInputElement>) => void;
  height?: number | string;
  width?: number | string;
  fontSize?: number | string;
};

export default TSwitcher;
