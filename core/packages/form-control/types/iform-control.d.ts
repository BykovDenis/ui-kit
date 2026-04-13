import React from 'react';
import TBaseStyles from '../../types/tbase-styles';

interface IFormControl extends TBaseStyles {
  children?: Array<React.ReactNode> | React.ReactNode;
  key?: number | string;
}

export default IFormControl;
