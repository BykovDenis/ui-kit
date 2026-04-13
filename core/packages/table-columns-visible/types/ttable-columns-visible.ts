import CSS from "csstype";

type TTableColumnsVisible = {
  width?: number | string,
  height?: number | string,
  className?: string,
  disabled?: boolean,
  fontFamily?: CSS.Property.FontFamily,
  columnNames: Array<string>,
  keyName?: string,
  fontSize?: number | string,
  minHeight?: number | string,
  name?: string,
  onChange?: (columnNames: Array<string>) => void,
  columnNamesDefaultSelected?: Array<string>,
};

export default TTableColumnsVisible;
