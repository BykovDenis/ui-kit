import DatepickerMask from '../enums/datepicker-mask';

function parseInputDate(date: string, mask: DatepickerMask = DatepickerMask.DDMMYYYY): string {
  if (date && date?.length > 0) {
    if (mask === DatepickerMask.YYYYMMDD) {
      if (date?.length < 4) {
        return date;
      } else if (date.length === 4) {
        return `${date}-`;
      } else if (date.length < 7) {
        return `${date?.substring(0, 4)}-${date?.substring(4, 6)}${date.length === 6 ? '-' : ''}`;
      }
      return `${date?.substring(0, 4)}-${date?.substring(4, 6)}-${date?.substring(6)}`;
    } else if (date?.length < 2) {
      return date;
    } else if (date.length === 2) {
      return `${date}.`;
    } else if (date.length < 5) {
      return `${date?.substring(0, 2)}.${date?.substring(2)}${date.length === 4 ? '.' : ''}`;
    }
    return `${date?.substring(0, 2)}.${date?.substring(2, 4)}.${date?.substring(4)}`;
  }
  return null;
}

export default parseInputDate;
