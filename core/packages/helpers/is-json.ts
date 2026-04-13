function isJson(textValue: string): boolean {
  try {
    JSON.parse(textValue);
  } catch (e) {
    return false;
  }
  return true;
}

export default isJson;