import sortArray from './sort-array';

function sortObjectData<T>(data: Array<T>, sortByField: string, sortDirection: 'asc' | 'desc'): Array<T> {
  const elementsBySortMapped: Array<any> = data?.map((element: T) => element?.[sortByField]);
  const elementsBySorted: Array<any> = sortArray(elementsBySortMapped, sortDirection);

  const elementsSorted: Array<T> = [];
  let dataParsed: Array<T> = [...data];
  let i: number = 0;
  while (dataParsed?.length > 0) {
    const elementParsed: T = elementsBySorted[i];
    const elementFound = dataParsed.find((element: T) => element?.[sortByField] === elementParsed);
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
