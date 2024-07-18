import parseStringInsteadDate from './parse-string-instead-date';
import DatepickerMask from '../enums/datepicker-mask';

describe('Test function parseStringInsteadDate', () => {
  const maskDDMMYYYY: DatepickerMask = DatepickerMask.DDMMYYYY;
  const maskYYYYMMDD: DatepickerMask = DatepickerMask.YYYYMMDD;

  test('Test 1. dateValue is null', () => {
    const dateValue: string | null = null;
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual('');
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual('');
  });
  test('Test 2. dateValue is undefined', () => {
    const dateValue: string | undefined = undefined;
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual('');
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual('');
  });
  test('Test 3. dateValue is empty string', () => {
    const dateValue: string = '';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual('');
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual('');
  });
  test('Test 4. Mask is DDMMYYYY. dateValue is valid date', () => {
    const dateValue: string = '24.07.2024';
    const exprectedValue: string = '24.07.2024';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 5. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '24.07';
    const exprectedValue: string = '24.07';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 6. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '24.2024';
    const exprectedValue: string = '24..2024';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 7. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '24.024';
    const exprectedValue: string = '24.02.4';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 8. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '04.7.2024';
    const exprectedValue: string = '04.7.2024';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 8. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '047';
    const exprectedValue: string = '04.7';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 9. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '0407';
    const exprectedValue: string = '04.07';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 10. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '04072';
    const exprectedValue: string = '04.07.2';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 11. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '040720';
    const exprectedValue: string = '04.07.20';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 12. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '0407202';
    const exprectedValue: string = '04.07.202';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 13. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '04072024';
    const exprectedValue: string = '04.07.2024';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 14. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '04..2024';
    const exprectedValue: string = '04..2024';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 15. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '.07.2024';
    const exprectedValue: string = '.07.2024';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 16. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '007.2024';
    const exprectedValue: string = '00.7.2024';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 17. Mask is DDMMYYYY. dateValue is invalid date', () => {
    const dateValue: string = '01.021';
    const exprectedValue: string = '01.02.1';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 18. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '2024';
    const exprectedValue: string = '2024';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 19. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '20240';
    const exprectedValue: string = '2024-0';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 20. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '202406';
    const exprectedValue: string = '2024-06';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 21. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '20240619';
    const exprectedValue: string = '2024-06-19';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 22. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '2021-10';
    const exprectedValue: string = '2021-10';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 23. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '2021-101';
    const exprectedValue: string = '2021-10-1';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 24. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '2021--1';
    const exprectedValue: string = '2021--1';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 25. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '202110-1';
    const exprectedValue: string = '2021-10-1';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 26. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '202-10-23';
    const exprectedValue: string = '202-10-23';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 27. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '-10-23';
    const exprectedValue: string = '-10-23';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 28. Mask is YYYYMMDD. dateValue is invalid date', () => {
    const dateValue: string = '2020-';
    const exprectedValue: string = '2020-';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 29. Mask is DDMMYYYY. dateValue is valid date', () => {
    const dateValue: string = '16.';
    const exprectedValue: string = '16.';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 30. Mask is DDMMYYYY. dateValue is valid date', () => {
    const dateValue: string = '16.112023';
    const exprectedValue: string = '16.11.2023';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 31. Mask is DDMMYYYY. dateValue is valid date', () => {
    const dateValue: string = '161.12.2023';
    const exprectedValue: string = '11.12.2023';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 32. Mask is YYYYMMDD. dateValue is valid date', () => {
    const dateValue: string = '20241-01-12';
    const exprectedValue: string = '2021-01-12';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 33. Mask is YYYYMMDD. dateValue is valid date', () => {
    const dateValue: string = '20214-07-14';
    const exprectedValue: string = '2024-07-14';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 34. Mask is YYYYMMDD. dateValue is valid date', () => {
    const dateValue: string = '2024-071-14';
    const exprectedValue: string = '2024-01-14';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 35. Mask is YYYYMMDD. dateValue is valid date', () => {
    const dateValue: string = '2024-01-147';
    const exprectedValue: string = '2024-01-17';
    expect(parseStringInsteadDate(dateValue, maskYYYYMMDD)).toEqual(exprectedValue);
  });
  test('Test 36. Mask is DDMMYYYY. dateValue is valid date', () => {
    const dateValue: string = '16.121.2023';
    const exprectedValue: string = '16.11.2023';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
  test('Test 37. Mask is DDMMYYYY. dateValue is valid date', () => {
    const dateValue: string = '16.11.20232';
    const exprectedValue: string = '16.11.2022';
    expect(parseStringInsteadDate(dateValue, maskDDMMYYYY)).toEqual(exprectedValue);
  });
});
