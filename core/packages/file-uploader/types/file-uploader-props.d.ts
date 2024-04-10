import TBaseStyles from '../../types/tbase-styles';
import * as CSS from 'csstype';

type FileUploaderProps = TBaseStyles & {
  id: string;
  colorTheme?: string;
  error?: any;
  focusColor?: string;
  fontFamily?: string;
  htmlFor?: string;
  isFocus?: boolean;
  isReadOnly?: boolean;
  justifyContent?: CSS.Property.JustifyContent;
  tabIndex?: string;
  theme?: any;
  whiteSpace?: string;
  onFileUpload?: (files: Array<File>, evt: any) => void;
  isMultiple?: boolean;
};

export default FileUploaderProps;
