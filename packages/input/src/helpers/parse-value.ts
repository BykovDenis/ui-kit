function parseValue(type: string, value: number | string, regExp, mask): number | string {
  let valueParsed = value?.toString();
  if (regExp) {
    valueParsed = valueParsed?.replaceAll(regExp, '');
  }
  if (mask) {
    valueParsed = valueParsed?.replaceAll(mask, '');
  }
  return typeof type === 'number' ? Number(valueParsed) : valueParsed;
}

export default parseValue;
