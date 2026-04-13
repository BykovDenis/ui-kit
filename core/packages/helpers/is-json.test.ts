import isJson from './is-json';

describe('isJson', () => {
  test('returns true for valid JSON object string', () => {
    expect(isJson('{"a":1,"b":"x"}')).toBeTruthy();
  });

  test('returns true for valid JSON array string', () => {
    expect(isJson('[1,2,3]')).toBeTruthy();
  });

  test('returns false for invalid JSON string', () => {
    expect(isJson('{a:1}')).toBeFalsy();
  });
});
