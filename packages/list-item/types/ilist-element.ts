interface IListElement {
  ReactThemeContext?: any;
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
  width?: number;
  underLineColor?: string;
}

export default IListElement;
