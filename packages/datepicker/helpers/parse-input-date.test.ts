import parseInputDate from './parse-input-date';

describe('Test function parseInputDate', () => {
  let i: number = 1;
  test(`Test${i}. Main script`, () => {
    const date: string = '14102023';
    const expectedDate: string = '14.10.2023';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 4`, () => {
    const date: string = '4';
    const expectedDate: string = '4';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 14`, () => {
    const date: string = '14';
    const expectedDate: string = '14.';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 14.1`, () => {
    const date: string = '141';
    const expectedDate: string = '14.1';
    i += 1;
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  test(`Test${i}. 14.10`, () => {
    const date: string = '1410';
    const expectedDate: string = '14.10.';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 14.10.2`, () => {
    const date: string = '14102';
    const expectedDate: string = '14.10.2';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 14.10.20`, () => {
    const date: string = '141020';
    const expectedDate: string = '14.10.20';
    i += 1;
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  test(`Test${i}. 14.10.202`, () => {
    const date: string = '1410202';
    const expectedDate: string = '14.10.202';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 14.10.2023`, () => {
    const date: string = '14102023';
    const expectedDate: string = '14.10.2023';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
});
