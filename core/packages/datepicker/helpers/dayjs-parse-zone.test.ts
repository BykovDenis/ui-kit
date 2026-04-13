import dayjs from 'dayjs';

import pluginFunc from './dayjs-parse-zone';

describe('dayjs parseZone plugin', () => {
  beforeAll(() => {
    dayjs.extend(pluginFunc as any);
  });

  test('adds parseZone method', () => {
    expect(typeof (dayjs as any).parseZone).toBe('function');
  });

  test('parses non-string input via dayjs fallback', () => {
    const value = (dayjs as any).parseZone(new Date('2024-01-01T00:00:00Z'));

    expect(dayjs.isDayjs(value)).toBeTruthy();
    expect(value.isValid()).toBeTruthy();
  });

  test('parses iso date with Z suffix', () => {
    const value = (dayjs as any).parseZone('2024-01-01T00:00:00Z');

    expect(dayjs.isDayjs(value)).toBeTruthy();
    expect(value.isValid()).toBeTruthy();
    expect(value.toISOString()).toContain('2024-01-01T00:00:00.000Z');
  });

  test('parses date with timezone offset', () => {
    const value = (dayjs as any).parseZone('2024-01-01T10:20:30+03:00');

    expect(dayjs.isDayjs(value)).toBeTruthy();
    expect(value.isValid()).toBeTruthy();
  });

  test('returns current date object for unmatched string format', () => {
    const value = (dayjs as any).parseZone('invalid-date-string');

    expect(dayjs.isDayjs(value)).toBeTruthy();
    expect(value.isValid()).toBeTruthy();
  });
});
