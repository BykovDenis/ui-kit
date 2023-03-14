enum SortDirections {
  Asc = 'asc',
  Desc = 'desc',
}

function sortArray<T>(elements: Array<T>, direction: SortDirections): Array<T> {
  function sortCondition<T>(a: T, b: T): number {
    if (direction === SortDirections.Asc) {
      return a < b ? -1 : a === b ? 0 : 1;
    }
    return a < b ? 1 : a === b ? 0 : -1;
  }

  return elements.sort(sortCondition);
}

export default sortArray;
export { SortDirections };
