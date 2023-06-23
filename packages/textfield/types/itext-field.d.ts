import React from 'react';
import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/tlabel';

interface ITextField extends IInput, ILabel {
  isExistTextMessageHelper?: boolean;
  isExistValue?: boolean;
  label?: string | React.ReactNode;
}

export default ITextField;
