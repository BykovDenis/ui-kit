import TMultiSelectOption from "../types/tmulti-select-option";


function optionsToArray(options: Map<string, number | string>): Array<TMultiSelectOption> | [] {
  return Array.from(options)?.map(([key, value]: [string, number | string]) => ({ label: key, value: value }) ) ?? [];
}

export default optionsToArray;