import React from 'react';
import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/ilabel';

interface ITextField extends IInput, ILabel {
  baseFontSize?: number;
  fontFamily?: string;
  fontSize?: number;
  height?: number;
  id: string;
  isExistTextMessageHelper?: boolean;
  isExistValue?: boolean;
  label?: string | React.ReactNode;
  textAlign?: string;
  value?: string | number;
  width?: number;
}

export default ITextField;
