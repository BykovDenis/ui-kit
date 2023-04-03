function parseInputDate(date: string): string {
  if (date?.length < 2) {
    return date;
  } else if (date.length == 2) {
    return `${date}.`;
  } else if (date.length < 5) {
    return `${date?.substring(0, 2)}.${date?.substring(2)}${date.length === 4 ? '.' : ''}`;
  }
  return `${date?.substring(0, 2)}.${date?.substring(2, 4)}.${date?.substring(4)}`;
}

export default parseInputDate;
