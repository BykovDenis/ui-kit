interface IButton {
  ReactThemeContext?: any;
  backgroundColor?: string;
  backgroundImage?: string;
  baseFontSize?: string;
  borderRadius?: string;
  children?: React.ReactNode;
  className?: any;
  color?: string;
  colorTheme?: string;
  dataset?: any;
  disabled?: boolean;
  focusColor?: string;
  fontFamily?: string;
  fontSize?: number;
  height?: number;
  id?: string;
  onClick?: (evt: any) => void;
  theme?: any;
  type?: string;
  variant?: 'contained' | 'outlined' | 'text';
  width?: number | string;
  padding?: number;
}

export default IButton;
