import { TEXT_ALIGN_LEFT, TEXT_ALIGN_RIGHT } from '../../../constants';
import calculationPaddingByTextAlign from './calculation-padding-by-text-align';

describe('select calculationPaddingByTextAlign', () => {
  test('returns left padding with indicator', () => {
    expect(calculationPaddingByTextAlign(TEXT_ALIGN_LEFT, false)).toBe('0 0 0 17px');
  });

  test('returns left padding without indicator', () => {
    expect(calculationPaddingByTextAlign(TEXT_ALIGN_LEFT, true)).toBe('0 0 0 5px');
  });

  test('returns right padding for clearable input', () => {
    expect(calculationPaddingByTextAlign(TEXT_ALIGN_RIGHT, false, false)).toBe('0 22px 0 0');
  });

  test('returns right padding for not clearable input', () => {
    expect(calculationPaddingByTextAlign(TEXT_ALIGN_RIGHT, false, true)).toBe('0 8px 0 0');
  });

  test('returns zero for unknown align', () => {
    expect(calculationPaddingByTextAlign('center', false)).toBe('0');
  });
});
