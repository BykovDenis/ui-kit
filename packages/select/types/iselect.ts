import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/ilabel';

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
  label?: string;
  onChange: (params: { label: string, value: string }) => void;
  textAlign: string;
  width: number;
}

export default ISelect;
