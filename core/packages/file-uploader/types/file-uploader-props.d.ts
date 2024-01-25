import TBaseStyles from '../../types/tbase-styles';

type FileUploaderProps = TBaseStyles & {
  id: string;
  colorTheme?: string;
  error?: any;
  focusColor?: string;
  fontFamily?: string;
  htmlFor?: string;
  isFocus?: boolean;
  isReadOnly?: boolean;
  justifyContent?: string;
  tabIndex?: string;
  theme?: any;
  whiteSpace?: string;
  onFileUpload?: (files: Array<File>, evt: any) => void;
  isMultiple?: boolean;
};

export default FileUploaderProps;
