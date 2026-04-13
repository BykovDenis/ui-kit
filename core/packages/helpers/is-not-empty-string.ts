function isNotEmptyString(text?: string): boolean {
  return text !== undefined && text > '' && text !== null;
}

export default isNotEmptyString;
