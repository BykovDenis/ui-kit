function isNotEmptyString(text?: string | null): text is string {
  return text !== undefined && text !== null && text > '';
}

export default isNotEmptyString;
