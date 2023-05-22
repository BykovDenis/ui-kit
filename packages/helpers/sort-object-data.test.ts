import sortObjectData from './sort-object-data';

describe('Test sortObjectData', () => {
  test('Test 1. Main script', () => {
    const elements: Array<{ label: string, value: string | number }> = [
      { label: 'one', value: 1 },
      { label: 'five', value: 5 },
      { label: 'three', value: 3 },
      { label: 'two', value: 2 },
      { label: 'four', value: 4 },
      { label: 'some', value: 1 },
    ];
    const expectedElements: Array<{ label: string, value: string | number }> = [
      { label: 'one', value: 1 },
      { label: 'some', value: 1 },
      { label: 'two', value: 2 },
      { label: 'three', value: 3 },
      { label: 'four', value: 4 },
      { label: 'five', value: 5 },
    ];

    expect(sortObjectData(elements, 'value', 'asc')).toEqual(expectedElements);
  });
});
