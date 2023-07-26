import checkFormatDate from './check-format-date';

describe('Test function checkFormatDate', () => {
  test('Main scenario 29.02.2100', () => {
    const day: number = 29;
    const month: number = 2;
    const year: number = 2100;

    expect(checkFormatDate(day, month, year)).toBeTruthy();
  });
  test('Main scenario 29.02.2400', () => {
    const day: number = 29;
    const month: number = 2;
    const year: number = 2400;

    expect(checkFormatDate(day, month, year)).toBeTruthy();
  });
  test('Main scenario 29.02.2401', () => {
    const day: number = 29;
    const month: number = 2;
    const year: number = 2401;

    expect(checkFormatDate(day, month, year)).toBeFalsy();
  });
  test('Main scenario 30.02.2022', () => {
    const day: number = 30;
    const month: number = 2;
    const year: number = 2022;

    expect(checkFormatDate(day, month, year)).toBeFalsy();
  });
  test('Main scenario 30.02.222', () => {
    const day: number = 30;
    const month: number = 2;
    const year: number = 222;

    expect(checkFormatDate(day, month, year)).toBeFalsy();
  });
  test('Main scenario 32.12.2023', () => {
    const day: number = 32;
    const month: number = 12;
    const year: number = 2023;

    expect(checkFormatDate(day, month, year)).toBeFalsy();
  });
  test('Main scenario 31.12.2023', () => {
    const day: number = 31;
    const month: number = 12;
    const year: number = 2023;

    expect(checkFormatDate(day, month, year)).toBeTruthy();
  });
  test('should return true for a valid date', () => {
    expect(checkFormatDate(12, 6, 2022)).toBe(true);
  });

  test('should return false for day 0', () => {
    expect(checkFormatDate(0, 6, 2022)).toBe(false);
  });

  test('should return false for month greater than 12', () => {
    expect(checkFormatDate(12, 13, 2022)).toBe(false);
  });

  test('should return false for month less than 1', () => {
    expect(checkFormatDate(12, 0, 2022)).toBe(false);
  });

  test('should return false for year less than 1970', () => {
    expect(checkFormatDate(12, 6, 1969)).toBe(false);
  });

  test('should return false for February with 29 days on a non-leap year', () => {
    expect(checkFormatDate(29, 2, 2021)).toBe(false);
  });

  // TODO must be fixed
  // test('should return false for February with 30 days on a leap year', () => {
  //   expect(checkFormatDate(30, 2, 2020)).toBe(false);
  // });

  test('should return false for a month with 31 days but day is 31', () => {
    expect(checkFormatDate(31, 4, 2022)).toBe(false);
  });

  test('should return false for a month with 30 days but day is 31', () => {
    expect(checkFormatDate(31, 6, 2022)).toBe(false);
  });

  test('should return false for a month with 31 days but day is 32', () => {
    expect(checkFormatDate(32, 5, 2022)).toBe(false);
  });

  test('should return false for a month with 30 days but day is 31', () => {
    expect(checkFormatDate(31, 9, 2022)).toBe(false);
  });
});
