import isNotEmptyString from './is-not-empty-string';

function getElementsFromLocalStorage(keyName: string, delimiter: string = ','): Set<string> {
  if (keyName) {
    const columnNamesSelectedText: string = localStorage?.getItem(keyName);
    if (isNotEmptyString(columnNamesSelectedText)) {
      return new Set(columnNamesSelectedText.split(delimiter));
    }
  }
  return new Set();
}

export default getElementsFromLocalStorage;
