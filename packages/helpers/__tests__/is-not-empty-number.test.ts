import isNotEmptyNumber from '../is-not-empty-number';

describe('test function of isNotEmptyString', () => {
  it('Test 1. Number is not empty', () => {
    const someNumber: number = 150;
    expect(isNotEmptyNumber(someNumber)).toBeTruthy();
  });
  it('Test 2. Number is empty', () => {
    const someNumber: number = undefined;
    expect(isNotEmptyNumber(someNumber)).toBeFalsy();
  });
  it('Test 3. Number is null', () => {
    const someNumber: number = null;
    expect(isNotEmptyNumber(someNumber)).toBeFalsy();
  });
});
