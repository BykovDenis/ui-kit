import { SortDirections } from '../../helpers/sort-array';

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
  sortDirection?: SortDirections,
  label?: string,
};

export default TMultiSelect;
