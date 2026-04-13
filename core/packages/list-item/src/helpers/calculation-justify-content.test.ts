import { TEXT_ALIGN_CENTER, TEXT_ALIGN_LEFT, TEXT_ALIGN_RIGHT } from '../../../constants';
import calculationJustifyContent from './calculation-justify-content';

describe('calculationJustifyContent', () => {
  test('returns flex-start for left align', () => {
    expect(calculationJustifyContent(TEXT_ALIGN_LEFT)).toBe('flex-start');
  });

  test('returns flex-end for right align', () => {
    expect(calculationJustifyContent(TEXT_ALIGN_RIGHT)).toBe('flex-end');
  });

  test('returns center for unknown align', () => {
    expect(calculationJustifyContent('unknown')).toBe(TEXT_ALIGN_CENTER);
  });
});
