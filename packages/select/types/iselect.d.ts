import React from 'react';

import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/ilabel';
import IOption from './ioption';
import IElement from './ielement';

interface ISelect extends IInput, ILabel {
  activeElement: string | number | IElement;
  baseFontSize?: number;
  children?: any;
  elements?: Array<string> | Array<number> | Array<IElement>;
  error?: boolean;
  fontFamily?: string;
  fontSize?: number;
  height?: number;
  id: string;
  indicatorColor?: string;
  isCreatable?: boolean;
  isExistValue?: boolean;
  label?: string | React.ReactNode;
  name: string;
  onChange?: (option: IOption) => void;
  textAlign?: string;
  variant?: 'contained' | 'text' | 'outlined';
}

export default ISelect;
