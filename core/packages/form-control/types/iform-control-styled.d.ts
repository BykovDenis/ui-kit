import * as CSS from 'csstype';

interface IFormControlStyled {
  alignItems?: CSS.Property.AlignItems;
  backgroundColor?: string;
  color?: string;
  flexDirection?: CSS.Property.FlexDirection;
  flexGrow?: number;
  height?: number | string;
  justifyContent?: CSS.Property.JustifyContent;
  margin?: string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  overflowY?: string;
  padding?: string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingRight?: number | string;
  paddingLeft?: number | string;
  position?: string;
  textAlign?: string;
  whiteSpace?: string;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  flexWrap?: CSS.Property.FlexWrap;
  outline?: string;
  borderRadius?: number | string;
  right?: number | string;
  left?: number | string;
  top?: number | string;
  bottom?: number | string;
  fontSize?: number | string;
  alignSelf?: string;
  fontStyle?: string;
  zIndex?: number;
  transform?: string;
  gap?: number | string;
}

export default IFormControlStyled;
