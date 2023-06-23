type TBaseStyles = {
  name?: string,
  id?: string,
  backgroundColor?: string,
  children?: any | Array<React.ReactNode>, // React.ReactNode | number | string | Array<React.ReactNode>,
  className?: any,
  color?: string,
  disabled?: boolean,
  fontFamily?: string,
  fontSize?: number,
  fontWeight?: number,
  whiteSpace?: string,
  width?: number | string,
  padding?: string,
  margin?: string,
  height?: number | string,
  wordBreak?: string,
  display?: string,
  lineHeight?: number,
  minHeight?: number | string,
  maxWidth?: number | string,
  regExp?: RegExp;
};

export default TBaseStyles;
