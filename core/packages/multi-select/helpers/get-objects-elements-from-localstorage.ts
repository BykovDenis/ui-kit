import TMapMultiSelectObjects from "../types/tmap-multi-select-objects";
import isNotEmptyString from "../../helpers/is-not-empty-string";
import isJson from "../../helpers/is-json";
import convertArrayToMap from "../../helpers/convert-array-to-map";

function getObjectsElementsFromLocalStorage(keyName: string): TMapMultiSelectObjects {
  if (keyName && typeof localStorage !== 'undefined') {
    const columnNamesSelectedText: string = localStorage.getItem(keyName);
    if (isNotEmptyString(columnNamesSelectedText) && isJson(columnNamesSelectedText)) {
      return convertArrayToMap(JSON.parse(columnNamesSelectedText));
    }
  }
  return new Map();
}

export default getObjectsElementsFromLocalStorage;
