function isNotEmptyNumber(value?: number | null): value is number {
  return value !== null && value !== undefined;
}

export default isNotEmptyNumber;
