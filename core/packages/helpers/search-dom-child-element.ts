function searchDomChildElement(element: any, searchElement: any): boolean {
  let currentElement = searchElement.parentNode;
  if (currentElement === element) {
    return true;
  }
  while (currentElement !== null) {
    currentElement = currentElement.parentNode;
    if (currentElement === element) {
      return true;
    }
  }
  return false;
}

export default searchDomChildElement;
