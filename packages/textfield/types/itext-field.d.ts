import Iinput from '../../input/types/iinput';
import ILabel from '../../label/types/ilabel';

interface ITextField extends Iinput, ILabel {
  baseFontSize?: number;
  fontFamily?: string;
  fontSize?: number;
  height?: number;
  id: string;
  isExistValue?: boolean;
  label?: string;
  textAlign?: string;
  value?: string | number;
  width?: number;
}

export default ITextField;
