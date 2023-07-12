function sortArray<T>(elements: Array<T>, direction: 'asc' | 'desc'): Array<T> {
  function sortCondition<T>(a: T, b: T): number {
    if (direction === 'asc') {
      return a < b ? -1 : a === b ? 0 : 1;
    }
    return a < b ? 1 : a === b ? 0 : -1;
  }

  return [...elements].sort(sortCondition);
}

export default sortArray;
