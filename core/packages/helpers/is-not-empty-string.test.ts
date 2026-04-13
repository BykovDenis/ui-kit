import isNotEmptyString from './is-not-empty-string';

describe('test function of isNotEmptyString', () => {
  it('Test 1. String is not empty', () => {
    const someText: string = 'Some text';
    expect(isNotEmptyString(someText)).toBeTruthy();
  });
  it('Test 2. String is empty', () => {
    const someText: string = '';
    expect(isNotEmptyString(someText)).toBeFalsy();
  });
  it('Test 3. String is null', () => {
    const someText: string = null;
    expect(isNotEmptyString(someText)).toBeFalsy();
  });
});
