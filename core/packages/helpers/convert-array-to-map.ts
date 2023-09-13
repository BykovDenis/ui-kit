import TMultiSelectOption from "../multi-select/types/tmulti-select-option";

function convertArrayToMap(elements: Array<TMultiSelectOption>): Map<string, number | string> {
  if (elements?.length > 0) {
    return new Map(elements?.map((element: TMultiSelectOption) => [element.label, element.value]) as Array<any>);
  }
  return new Map();
}

export default convertArrayToMap;