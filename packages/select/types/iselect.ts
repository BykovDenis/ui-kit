import IInput from '../../input/types/iinput';
import ILabel from '../../label/types/ilabel';

interface ISelect extends IInput, ILabel {
  activeElement: string | number;
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
  onChange: (params: { label: string, value: string | number }) => void;
  textAlign: string;
  width: number;
}

export default ISelect;
