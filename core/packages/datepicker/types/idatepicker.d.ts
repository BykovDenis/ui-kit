import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/tlabel';
import TBaseStyles from '../../types/tbase-styles';

export default interface IDatepicker extends IInput, ILabel, TBaseStyles {
  baseFontSize?: number;
  children?: any;
  disabled?: boolean;
  error?: boolean;
  fontFamily?: string;
  fontSize?: number;
  height?: number;
  isCreatable?: boolean;
  isExistValue?: boolean;
  label?: React.ReactNode | string;
  locale?: 'EN' | 'RU' | undefined;
  maxDate?: string | null;
  minDate?: string | null;
  onChange?: (name: string, value: string, isValid: boolean) => void;
  onBlur?: (name: string, value: string, isValid: boolean) => void;
  textAlign?: string;
  value?: string | null | undefined;
  variant?: 'contained' | 'outlined' | 'text';
  mask?: 'dd.MM.yyyy' | 'yyyy-MM-dd' | undefined;
  isErrorMessageDisplayed?: boolean;
  setToday?: () => void;
  isOnInputChangeUsed?: boolean;
  isIconCanBeTodaySelected?: boolean;
  datesContainerAlign?: 'center' | 'left' | 'right';
}
