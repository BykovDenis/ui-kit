import CSS from "csstype";

type TTable = {
  backgroundColor?: CSS.Property.BackgroundColor,
  bgOddColumnColor?: string,
  children?: React.ReactNode,
  className?: string,
  color?: CSS.Property.Color,
  fontFamily?: CSS.Property.FontFamily,
  fontSize?: string | number,
  fontWeight?: CSS.Property.FontWeight
  isSorted?: boolean,
  isStrippedColumn?: boolean,
  position?: CSS.Property.Position,
  textAlign?: string,
  width?: number | string,
};

export default TTable;
