function checkFormatDate(day: number, month: number, year: number): boolean {
  if (
    day <= 0 ||
    month > 12 ||
    month < 1 ||
    year < 1900 ||
    (month === 2 && year % 4 === 0 && year % 100 === 0 && year % 400 === 0 && day > 29) ||
    (month === 2 && year % 4 !== 0 && day > 28) ||
    (month % 2 === 0 && day > 30 && month < 7) ||
    (month % 2 !== 0 && day > 31 && month < 7) ||
    (month % 2 !== 0 && day > 30 && month > 7) ||
    (month % 2 === 0 && day > 31 && month > 7)
  ) {
    return false;
  }
  return true;
}

export default checkFormatDate;
