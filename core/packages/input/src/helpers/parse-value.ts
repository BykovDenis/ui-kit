function parseValue(type?: string, value?: number | string | null, regExp?: RegExp | string, mask?: RegExp | string): number | string {
  let valueParsed = value?.toString();
  if (regExp) {
    valueParsed = valueParsed?.replaceAll(regExp, '');
  }
  if (mask) {
    valueParsed = valueParsed?.replaceAll(mask, '');
  }
  return typeof type === 'number' ? Number(valueParsed) : (valueParsed as string);
}

export default parseValue;
