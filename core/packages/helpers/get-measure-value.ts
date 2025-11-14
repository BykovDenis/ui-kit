import isNotEmptyNumber from './is-not-empty-number';
import isNotEmptyString from './is-not-empty-string';

function getMeasureValue(value?: number | string | null, defaultValue: string = 'initial'): string {
  if (value === null || value === undefined) {
    return defaultValue;
  }

  if (typeof value === 'string') {
    return isNotEmptyString(value) ? value : defaultValue;
  }

  if (typeof value === 'number') {
    return isNotEmptyNumber(value) ? `${value}px` : defaultValue;
  }

  return defaultValue;
}

export default getMeasureValue;
