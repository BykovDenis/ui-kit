function isNotEmptyString(text: string) {
  return text !== undefined && text > '' && text !== null;
}

export default isNotEmptyString;
