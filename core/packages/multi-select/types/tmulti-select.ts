import CSS from "csstype";

type TMultiSelect = {
  width?: number | string,
  height?: number | string,
  className?: string,
  disabled?: boolean,
  fontFamily?: CSS.Property.FontFamily,
  elementNames: Array<number | string>,
  keyName?: string,
  fontSize?: number | string,
  name: string,
  onChange?: (columnNames: Array<string>) => void,
  elementNamesDefaultSelected?: Array<string>,
  isUseLocaleStorage?: boolean,
  sortDirection?: 'asc' | 'desc',
  label?: string,
  id: string,
  isSelectAll?: boolean,
  variant?: string | null,
  onSelectedOptionsClean?: () => void,
};

export default TMultiSelect;
