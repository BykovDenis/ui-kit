import * as CSS from 'csstype';

interface IListElement {
  activeBackgroundColor?: string;
  backgroundColor?: string;
  children: any;
  className?: string;
  color?: string;
  colorTheme?: string;
  fontFamily?: string;
  fontSize?: number | string;
  height?: number | string;
  minHeight?: number | string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  key?: string | number;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  textAlign?: string;
  type?: 'text' | 'button';
  underLineColor?: string;
  width?: number;
  justifyContent?: CSS.Property.JustifyContent;
  colorInverted?: string;
  padding?: string;
  isDisable?: boolean;
  id?: string;
  isSelected?: boolean;
}

export default IListElement;
