import IButtonVariants from './ibutton-variants';

interface IButton {
  ReactThemeContext?: any;
  backgroundColor?: string;
  backgroundImage?: string;
  baseFontSize: string;
  children?: any;
  className?: any;
  color?: string;
  dataset?: any;
  disabled?: boolean;
  fontFamily: string;
  fontSize: string;
  height: string;
  onClick?: (evt: any) => void;
  theme?: any;
  type?: string;
  variant?: IButtonVariants;
  width: string;
}

export default IButton;
