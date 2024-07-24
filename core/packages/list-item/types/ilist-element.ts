import CSS from 'csstype';

interface IListElement {
  activeBackgroundColor?: string;
  backgroundColor?: string;
  children: any;
  className?: string;
  color?: CSS.Property.Color;
  colorTheme?: string;
  fontFamily?: CSS.Property.FontFamily;
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
  alignItems?: CSS.Property.AlignItems;
  alignSelf?: CSS.Property.AlignSelf;
  border?: CSS.Property.Border;
  colorInverted?: string;
  padding?: CSS.Property.Padding;
  isDisable?: boolean;
  id?: string;
  isSelected?: boolean;
}

export default IListElement;
