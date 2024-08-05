import CSS from 'csstype';
import React from 'react';
import TBaseStyles from '../../types/tbase-styles';

type TSwitcher = TBaseStyles & {
  id?: string;
  name?: string;
  activeElement?: string | undefined;
  backgroundColor?: CSS.Property.BackgroundColor;
  classes?: any;
  color?: CSS.Property.Color;
  element1: string;
  element2: string;
  onSwitcherChange?: (value: string, name?: string, evt?: React.ChangeEvent<HTMLInputElement>) => void;
};

export default TSwitcher;
