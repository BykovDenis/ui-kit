import IButtonVariants from './ibutton-variants';

interface Ibutton {
  ReactThemeContext?: any;
  backgroundColor?: string;
  backgroundImage?: string;
  baseFontSize: string;
  children?: any;
  className?: any;
  color?: string;
  colorTheme?: string;
  dataset?: any;
  disabled?: boolean;
  focusColor?: string;
  fontFamily: string;
  fontSize: string;
  height: string;
  onClick?: (evt: any) => void;
  theme?: any;
  type?: string;
  variant?: IButtonVariants;
  width: string;
}

export default Ibutton;
