interface IListElement {
  ReactThemeContext?: any;
  activeBackgroundColor?: string;
  backgroundColor?: string;
  children: any;
  className?: string;
  color?: string;
  colorTheme?: string;
  fontFamily?: string;
  fontSize?: number;
  height?: number;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  key?: string | number;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  textAlign?: string;
  type?: string;
  underLineColor?: string;
  width?: number;
}

export default IListElement;
