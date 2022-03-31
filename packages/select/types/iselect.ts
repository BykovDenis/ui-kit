import React from 'react';

import Variants from '../../enums/variants';
import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/ilabel';
import IOption from './ioption';

interface ISelect extends IInput, ILabel {
  activeElement: string;
  baseFontSize: number;
  children?: any;
  elements?: any;
  error?: boolean;
  fontFamily: string;
  fontSize: number;
  height: number;
  id: string;
  isCreatable?: boolean;
  isExistValue?: boolean;
  label?: string | React.ReactNode;
  name: string;
  onChange: (option: IOption) => void;
  textAlign?: string;
  variant?: Variants;
}

export default ISelect;
