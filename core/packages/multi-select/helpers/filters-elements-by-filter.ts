import TMultiSelectOption from "../types/tmulti-select-option";

function filtersElementsByFilter(elements: Array<TMultiSelectOption>, filter: string) {
  return elements?.filter((element: TMultiSelectOption) => element?.label?.indexOf(filter) > -1)
}

export default filtersElementsByFilter;