function pixelsMeasureToNumber(value: number | string): number {
  return typeof value === 'string' ? parseFloat(value?.replace('px', '')) : value;
}

export default pixelsMeasureToNumber;
