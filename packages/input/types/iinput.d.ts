import IInputVariants from './iinput-variants';

interface IInput {
  ReactThemeContext?: any;
  backgroundColor?: string;
  backgroundImage?: string;
  baseFontSize: string;
  borderColor?: string;
  className?: any;
  color?: string;
  colorTheme?: string;
  dataset?: any;
  disabled?: boolean;
  disabledBackgroundColor?: string;
  disabledColor?: string;
  error?: boolean;
  focusBackgroundColor?: string;
  focusColor?: string;
  fontFamily: string;
  fontSize: number;
  height: number;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  textAlign: string;
  textMessage?: string;
  theme?: any;
  type?: string;
  value: number | string;
  variant: IInputVariants;
  width: number;
}

export default IInput;
