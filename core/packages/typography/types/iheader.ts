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
  padding?: string;
  opacity?: number;
}

export default IHeader;
