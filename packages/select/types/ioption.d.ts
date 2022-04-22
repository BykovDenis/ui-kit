import React from 'react';
import IElement from './ielement';

interface IOption {
  index?: number | null;
  label: string | React.ReactNode;
  name: string;
  value?: string | number | IElement | null;
}

export default IOption;
