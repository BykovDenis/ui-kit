function parseValue(value: number | string, regExp, mask): number | string {
  let valueParsed = value?.toString();
  if (regExp) {
    valueParsed = valueParsed?.replaceAll(regExp, '');
  }
  if (mask) {
    valueParsed = valueParsed?.replaceAll(mask, '');
  }
  return typeof value === 'number' ? Number(valueParsed) : valueParsed;
}

export default parseValue;
