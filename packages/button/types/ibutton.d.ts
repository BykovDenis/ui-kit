import IButtonVariants from './ibutton-variants';

interface IButton {
  ReactThemeContext?: any;
  backgroundColor?: string;
  backgroundImage?: string;
  baseFontSize?: string;
  borderRadius?: string;
  children?: any;
  className?: any;
  color?: string;
  colorTheme?: string;
  dataset?: any;
  disabled?: boolean;
  focusColor?: string;
  fontFamily: string;
  fontSize: number;
  height?: number;
  id?: string;
  onClick?: (evt: any) => void;
  theme?: any;
  type?: string;
  variant?: IButtonVariants;
  width?: number | string;
}

export default IButton;
