import getObjectsElementsFromLocalStorage from './get-objects-elements-from-localstorage';

describe('getObjectsElementsFromLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('returns empty map for empty key', () => {
    expect(getObjectsElementsFromLocalStorage('')).toEqual(new Map());
  });

  test('returns empty map for invalid json', () => {
    localStorage.setItem('columns', 'not-json');

    expect(getObjectsElementsFromLocalStorage('columns')).toEqual(new Map());
  });

  test('returns map for valid json options array', () => {
    localStorage.setItem('columns', JSON.stringify([{ label: 'Name', value: 'name' }]));

    const result = getObjectsElementsFromLocalStorage('columns');

    expect(result.get('Name')).toBe('name');
    expect(result.size).toBe(1);
  });
});
