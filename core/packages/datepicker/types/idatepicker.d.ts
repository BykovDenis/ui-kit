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
  id: string;
  isCreatable?: boolean;
  isExistValue?: boolean;
  label?: string | React.ReactNode;
  locale?: 'EN' | 'RU' | undefined;
  maxDate?: string;
  minDate?: string;
  name: string;
  onChange?: (name: string, value: string, isValid: boolean) => void;
  textAlign?: string;
  value?: string;
  variant?: 'contained' | 'outlined' | 'text';
  mask?: 'dd.MM.yyyy' | 'yyyy-MM-dd' | undefined;
  isErrorMessageDisplayed?: boolean;
  setToday?: () => void;
  isOnInputChangeUsed?: boolean;
  isIconCanBeTodaySelected?: boolean;
  datesContainerAlign?: 'left' | 'right';
}
