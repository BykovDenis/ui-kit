import { TEXT_ALIGN_LEFT, TEXT_ALIGN_RIGHT } from '../../../constants';
import calculationPaddingByTextAlign from './calculation-padding-by-text-align';

describe('input calculationPaddingByTextAlign', () => {
  test('returns left padding for left align', () => {
    expect(calculationPaddingByTextAlign(TEXT_ALIGN_LEFT)).toBe('0 0 0 17px');
  });

  test('returns right padding for clearable input', () => {
    expect(calculationPaddingByTextAlign(TEXT_ALIGN_RIGHT, false)).toBe('0 22px 0 0');
  });

  test('returns right padding for not clearable input', () => {
    expect(calculationPaddingByTextAlign(TEXT_ALIGN_RIGHT, true)).toBe('0 8px 0 0');
  });

  test('returns default padding for unknown align', () => {
    expect(calculationPaddingByTextAlign('center')).toBe('0 22px 0 0');
  });
});
