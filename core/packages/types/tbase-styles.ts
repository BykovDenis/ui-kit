import CSS from "csstype";

type TBaseStyles = {
  name?: string;
  id?: string;
  backgroundColor?: string;
  children?: any | Array<React.ReactNode>;
  className?: any;
  color?: string;
  disabled?: boolean;
  fontFamily?: CSS.Property.FontFamily;
  fontSize?: number;
  fontWeight?: number;
  whiteSpace?: CSS.Property.WhiteSpace;
  padding?: CSS.Property.Padding;
  margin?: CSS.Property.Margin;
  wordBreak?: CSS.Property.WordBreak;
  display?: CSS.Property.Display;
  lineHeight?: number;
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  width?: number | string;
  regExp?: RegExp;
  position?: CSS.Property.Position;
  textAlign?: CSS.Property.TextAlign;
  opacity?: CSS.Property.Opacity;
};

export default TBaseStyles;
