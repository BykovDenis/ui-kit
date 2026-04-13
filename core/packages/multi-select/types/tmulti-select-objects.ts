import TMultiSelect from "./tmulti-select";
import TMultiSelectOption from "./tmulti-select-option";

type TMultiSelectObjects = TMultiSelect & {
  elementNamesDefaultSelected?: Array<TMultiSelectOption>,
  elementNames: Array<TMultiSelectOption>,
  onChange?: (columnNames: Array<TMultiSelectOption>) => void,
}

export default TMultiSelectObjects;