interface IButton {
  ReactThemeContext?: any;
  backgroundColor?: string;
  backgroundImage?: string;
  baseFontSize?: string;
  borderRadius?: string;
  children?: any;
  className?: any;
  color?: string;
  colorTheme?: 'normal' | 'warning';
  dataset?: any;
  disabled?: boolean;
  draggable?: boolean;
  focusColor?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  height?: number;
  id?: string;
  name?: string;
  onClick?: (evt: any) => void;
  onDragStart?: (evt: any) => void;
  theme?: any;
  type?: string;
  variant?: 'contained' | 'outlined' | 'text';
  width?: number | string;
}

export default IButton;
