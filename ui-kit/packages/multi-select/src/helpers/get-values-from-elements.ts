function getValuesFromElements(elements: Array<{ label: string, value: string }>): Array<string> {
  return elements?.map((element: { label: string, value: string }) => element.value);
}

export default getValuesFromElements;
