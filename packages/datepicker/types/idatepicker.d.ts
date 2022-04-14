import Variants from '../../enums/variants';
import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/ilabel';

export default interface IDatepicker extends IInput, ILabel {
  baseFontSize: number;
  children?: any;
  error?: boolean;
  fontFamily: string;
  fontSize: number;
  height: number;
  id: string;
  isCreatable?: boolean;
  isDisabled?: boolean;
  isExistValue?: boolean;
  label?: string;
  locale: string;
  maxDate?: string;
  minDate?: string;
  name?: string;
  onChange?: (name: string, value: string, isValid: boolean) => void;
  textAlign: string;
  value?: string;
  variant?: Variants;
}



