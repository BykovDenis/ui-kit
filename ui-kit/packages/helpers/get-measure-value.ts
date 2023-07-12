import isNotEmptyNumber from './is-not-empty-number';
import isNotEmptyString from './is-not-empty-string';

function getMeasureValue(value: number | string, defaultValue: string = 'initial'): string {
  return typeof value === 'string'
    ? isNotEmptyString(value)
      ? value
      : defaultValue
    : isNotEmptyNumber(value)
    ? `${value}px`
    : defaultValue;
}

export default getMeasureValue;
