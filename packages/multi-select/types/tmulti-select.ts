type TMultiSelect = {
  width?: number | string,
  height?: number | string,
  className?: string,
  disabled?: boolean,
  fontFamily?: string,
  elementNames: Array<string>,
  keyName?: string,
  fontSize?: number | string,
  name: string,
  onChange?: (columnNames: Array<string>) => void,
  elementNamesDefaultSelected?: Array<string>,
  isUseLocaleStorage?: boolean,
};

export default TMultiSelect;
