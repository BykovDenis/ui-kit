import CSS from 'csstype';

type TButtonStyled = {
  backgroundColor?: CSS.Property.BackgroundColor;
  backgroundImage?: CSS.Property.BackgroundImage;
  baseFontSize?: string;
  borderRadius?: CSS.Property.BorderRadius;
  color?: CSS.Property.Color;
  error?: boolean;
  disabled?: boolean;
  draggable?: boolean;
  focusColor?: string;
  fontFamily?: CSS.Property.FontFamily;
  fontSize?: number;
  fontWeight?: CSS.Property.FontWeight;
  height?: number | string;
  padding?: CSS.Property.Padding;
  type?: 'button' | 'submit' | 'reset';
  width?: number | string;
  textDecoration?: CSS.Property.TextDecoration;
  textTransform?: CSS.Property.TextTransform;
};

export default TButtonStyled;
