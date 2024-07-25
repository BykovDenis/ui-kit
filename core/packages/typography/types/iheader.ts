import * as CSS from 'csstype';

interface IHeader {
  error?: boolean;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  fontFamily?: string;
  textDecoration?: CSS.Property.TextDecoration;
  textTransform?: CSS.Property.TextTransform;
  textAlign?: CSS.Property.TextAlign;
  margin?: string;
  padding?: CSS.Property.Padding;
  opacity?: number;
  display?: CSS.Property.Display;
  flexDirection?: CSS.Property.FlexDirection;
  justifyContent?: CSS.Property.JustifyContent;
  alignItems?: CSS.Property.AlignItems;
  alignSelf?: CSS.Property.AlignSelf;
}

export default IHeader;
