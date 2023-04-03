import parseInputDate from './parse-input-date';
import DatepickerMask from '../enums/datepicker-mask';

describe('Test function parseInputDate', () => {
  let mask: DatepickerMask;
  let i: number = 1;

  beforeEach(() => {
    mask = DatepickerMask.YYYYMMDD;
  });

  test(`Test${i}. Main script date format DD.MM.YYYY`, () => {
    const date: string = '14102023';
    const expectedDate: string = '14.10.2023';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 4 date format DD.MM.YYYY`, () => {
    const date: string = '4';
    const expectedDate: string = '4';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 14 date format DD.MM.YYYY`, () => {
    const date: string = '14';
    const expectedDate: string = '14.';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 14.1 date format DD.MM.YYYY`, () => {
    const date: string = '141';
    const expectedDate: string = '14.1';
    i += 1;
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  test(`Test${i}. 14.10 date format DD.MM.YYYY`, () => {
    const date: string = '1410';
    const expectedDate: string = '14.10.';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 14.10.2 date format DD.MM.YYYY`, () => {
    const date: string = '14102';
    const expectedDate: string = '14.10.2';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 14.10.20 date format DD.MM.YYYY`, () => {
    const date: string = '141020';
    const expectedDate: string = '14.10.20';
    i += 1;
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  test(`Test${i}. 14.10.202 date format DD.MM.YYYY`, () => {
    const date: string = '1410202';
    const expectedDate: string = '14.10.202';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. 14.10.2023 date format DD.MM.YYYY`, () => {
    const date: string = '14102023';
    const expectedDate: string = '14.10.2023';
    expect(parseInputDate(date)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. Main script date format YYYY-MM-DD`, () => {
    const date: string = '20231014';
    const expectedDate: string = '2023-10-14';
    expect(parseInputDate(date, mask)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. format 2`, () => {
    const date: string = '2';
    const expectedDate: string = '2';
    expect(parseInputDate(date, mask)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. format 20`, () => {
    const date: string = '20';
    const expectedDate: string = '20';
    expect(parseInputDate(date, mask)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. format 202`, () => {
    const date: string = '202';
    const expectedDate: string = '202';
    expect(parseInputDate(date, mask)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. format 2023`, () => {
    const date: string = '2023';
    const expectedDate: string = '2023-';
    expect(parseInputDate(date, mask)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. format 2023-1`, () => {
    const date: string = '20231';
    const expectedDate: string = '2023-1';
    expect(parseInputDate(date, mask)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. format 2023-10`, () => {
    const date: string = '202310';
    const expectedDate: string = '2023-10-';
    expect(parseInputDate(date, mask)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. format 2023-10-1`, () => {
    const date: string = '2023101';
    const expectedDate: string = '2023-10-1';
    expect(parseInputDate(date, mask)).toEqual(expectedDate);
  });
  i += 1;
  test(`Test${i}. format 2023-10-14`, () => {
    const date: string = '20231014';
    const expectedDate: string = '2023-10-14';
    expect(parseInputDate(date, mask)).toEqual(expectedDate);
  });
  i += 1;
});
