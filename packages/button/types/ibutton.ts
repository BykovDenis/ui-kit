import IButtonVariants from './ibutton-variants';

interface IButton {
  ReactThemeContext?: any;
  backgroundColor?: string;
  backgroundImage?: string;
  children?: any;
  className?: any;
  color?: string;
  disabled?: boolean;
  fontSize: string;
  height: string;
  onClick?: (evt: any) => void;
  theme?: any;
  type?: string;
  variant?: IButtonVariants;
  width: string;
}

export default IButton;
