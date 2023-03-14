import sortArray, { SortDirections } from './sort-array';

describe('Test sortArray function', () => {
  test('Test 1. Numbers Element sorted by Asc', () => {
    const elements: Array<number> = [6, 5, 3, 7, 1, 9];
    const expectedElements: Array<number> = [1, 3, 5, 6, 7, 9];
    expect(sortArray(elements, SortDirections.Asc)).toEqual(expectedElements);
  });
  test('Test 2. Numbers Element sorted by Desc', () => {
    const elements: Array<number> = [6, 5, 3, 7, 1, 9];
    const expectedElements: Array<number> = [9, 7, 6, 5, 3, 1];
    expect(sortArray(elements, SortDirections.Desc)).toEqual(expectedElements);
  });
  test('Test 3. String Element sorted by asc', () => {
    const elements: Array<string> = ['11', '6', '3', '7', '1', '9', '31', '5'];
    const expectedElements: Array<string> = ['1', '11', '3', '31', '5', '6', '7', '9'];
    expect(sortArray(elements, SortDirections.Asc)).toEqual(expectedElements);
  });
  test('Test 4. String Element sorted by desc', () => {
    const elements: Array<string> = ['11', '6', '3', '7', '1', '9', '31', '5'];
    const expectedElements: Array<string> = ['9', '7', '6', '5', '31', '3', '11', '1'];
    expect(sortArray(elements, SortDirections.Desc)).toEqual(expectedElements);
  });
});
