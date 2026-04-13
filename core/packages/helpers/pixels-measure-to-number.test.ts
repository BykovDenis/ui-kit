import pixelsMeasureToNumber from './pixels-measure-to-number';

describe('pixelsMeasureToNumber', () => {
  it('parses px string to number', () => {
    expect(pixelsMeasureToNumber('12px')).toBe(12);
  });

  it('returns number as is', () => {
    expect(pixelsMeasureToNumber(8)).toBe(8);
  });
});
