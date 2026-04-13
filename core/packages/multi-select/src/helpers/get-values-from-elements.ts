function getValuesFromElements(elements: Array<{ label: string, value: number | string }>): Array<string> {
  return elements?.map((element: { label: string, value: string }) => element.value);
}

export default getValuesFromElements;
