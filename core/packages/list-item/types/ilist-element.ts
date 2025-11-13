import CSS from 'csstype';
import {ListItemType} from '../enums/list-item-type';

interface IListElement extends Omit<React.HTMLAttributes<HTMLElement>, 'type' | 'onClick'> {
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
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
  textAlign?: string;
  type?: ListItemType;
  underLineColor?: string;
  width?: number;
  justifyContent?: CSS.Property.JustifyContent;
  alignItems?: CSS.Property.AlignItems;
  alignSelf?: CSS.Property.AlignSelf;
  border?: CSS.Property.Border;
  borderBottom?: CSS.Property.BorderBottom;
  colorInverted?: string;
  padding?: CSS.Property.Padding;
  margin?: CSS.Property.Margin;
  isDisable?: boolean;
  id?: string;
  isSelected?: boolean;
  isVisibleTextUnderline?: boolean;
}

export default IListElement;
