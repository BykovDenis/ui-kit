import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/tlabel';

export default interface IDatepicker extends IInput, ILabel {
  baseFontSize?: number;
  children?: any;
  disabled?: boolean;
  error?: boolean;
  fontFamily?: string;
  fontSize?: number;
  height?: number;
  id: string;
  isCreatable?: boolean;
  isExistValue?: boolean;
  label?: string | React.ReactNode;
  locale?: string;
  maxDate?: string;
  minDate?: string;
  name: string;
  onChange?: (name: string, value: string, isValid: boolean) => void;
  textAlign?: string;
  value?: string;
  variant?: 'contained' | 'outlined' | 'text';
  mask?: string;
  isErrorMessageDisplay?: boolean,
}



