import DatepickerMask from '../enums/datepicker-mask';
import DateParser from './date-parser';

describe('Date parser library', () => {
  it('parses valid dotted date and exposes date parts', () => {
    const parser = new DateParser('14.10.2023');

    expect(parser.checkIsValidDate()).toBe(true);
    expect(parser.getParsedDate()).toBe('14.10.2023');
    expect(parser.getNumberDay()).toBe(14);
    expect(parser.getNumberMonth()).toBe(9);
    expect(parser.getNumberYear()).toBe(2023);
    expect(parser.getCountDaysInMonth()).toBe(31);
    expect(parser.getTimestamp()).toBeGreaterThan(0);
  });

  it('parses dashed mask date', () => {
    const parser = new DateParser('2023-10-14', DatepickerMask.DashedYYYYMMDD);

    expect(parser.checkIsValidDate()).toBe(true);
    expect(parser.getParsedDate()).toBe('2023-10-14');
    expect(parser.formatToString()).toBe('2023-10-14');
  });

  it('marks invalid and returns null string formatting for malformed date', () => {
    const parser = new DateParser('31.02.2023');

    expect(parser.checkIsValidDate()).toBe(false);
    expect(parser.formatToString()).toBeNull();
  });

  it('marks malformed dotted value as invalid', () => {
    const parser = new DateParser('1969-06-12');

    expect(parser.checkIsValidDate()).toBe(false);
  });

  it('updates current date when day/month/year are changed', () => {
    const parser = new DateParser('14.10.2023');

    parser.changeDay(20);
    parser.changeMonth(0);
    parser.changeYear(2025);

    expect(parser.getNumberDay()).toBe(20);
    expect(parser.getNumberMonth()).toBe(1);
    expect(parser.getNumberYear()).toBe(2025);
  });

  it('moves to next and previous month/year', () => {
    const parser = new DateParser('14.10.2023');

    parser.changeToTheNextMonth();
    expect(parser.getNumberMonth()).toBe(10);

    parser.changeToThePreviousMonth();
    expect(parser.getNumberMonth()).toBe(9);

    parser.changeToTheNextYear();
    expect(parser.getNumberYear()).toBe(2024);

    parser.changeToThePreviousYear();
    expect(parser.getNumberYear()).toBe(2023);
  });

  it('returns current day for helper getters', () => {
    const parser = new DateParser();
    const today = parser.getTodayPartitionedDate();

    expect(parser.setToday()).toBe(true);
    expect(today).toEqual(
      expect.objectContaining({
        year: expect.any(Number),
        month: expect.any(Number),
        day: expect.any(Number),
      })
    );
    expect(parser.getNumberCurrentDateOfMonth()).toBeGreaterThanOrEqual(1);
    expect(parser.getNumberDayInWeek()).toBeGreaterThanOrEqual(0);
    expect(parser.getDate()).toBeTruthy();
    expect(parser.getSplittedParamsByDate()).toBeUndefined();
  });
});
