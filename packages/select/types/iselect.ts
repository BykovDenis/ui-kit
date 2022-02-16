import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/ilabel';

interface ISelect extends IInput, ILabel {
  baseFontSize: number;
  children?: any;
  elements?: any;
  error?: boolean;
  fontFamily: string;
  fontSize: number;
  height: number;
  id: string;
  isExistValue?: boolean;
  label?: string;
  textAlign: string;
  value: string | number;
  width: number;
}

export default ISelect;
