interface IListElement {
  ReactThemeContext?: any;
  activeBackgroundColor?: string;
  backgroundColor?: string;
  children: any;
  className?: string;
  color?: string;
  colorTheme?: string;
  height?: number;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  key?: string | number;
  onClick?: (evt: React.ChangeEvent<HTMLButtonElement>) => void;
  textAlign?: string;
  type?: string;
  underLineColor?: string;
  width?: number;
}

export default IListElement;
