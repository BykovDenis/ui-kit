import sortArray from './sort-array';

function sortObjectData<T>(data: Array<T>, sortByField: string, sortDirection: 'asc' | 'desc'): Array<T> {
  const fieldOf = (element: T): unknown => (element as Record<string, unknown> | null | undefined)?.[sortByField];
  const elementsBySortMapped: Array<unknown> = data?.map(fieldOf);
  const elementsBySorted: Array<unknown> = sortArray(elementsBySortMapped, sortDirection);

  const elementsSorted: Array<T> = [];
  let dataParsed: Array<T> = [...data];
  let i: number = 0;
  while (dataParsed?.length > 0) {
    const elementParsed: unknown = elementsBySorted[i];
    // find() can return undefined, but every value in elementsBySorted comes
    // from mapping data itself, so a match always exists
    const elementFound = dataParsed.find((element: T) => fieldOf(element) === elementParsed) as T;
    if (sortDirection === 'asc') {
      elementsSorted.push(elementFound);
    } else {
      elementsSorted.unshift(elementFound);
    }
    dataParsed = dataParsed.filter((element: T) => element !== elementFound);
    i++;
    if (i > 10) {
      break;
    }
  }

  return elementsSorted;
}

export default sortObjectData;
