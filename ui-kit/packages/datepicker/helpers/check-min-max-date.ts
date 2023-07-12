import DateParser from './date-parser';

function checkMinMaxDate(
  dateValue: DateParser,
  minDate: DateParser | null,
  maxDate: DateParser | null
): {
  isError: boolean,
  isErrorMinDate: boolean,
  isErrorMaxDate: boolean,
} {
  const errors: {
    isError: boolean,
    isErrorMinDate: boolean,
    isErrorMaxDate: boolean,
  } = {
    isError: false,
    isErrorMinDate: false,
    isErrorMaxDate: false,
  };
  const dateParsedToTimestamp: number = dateValue.getTimestamp();
  if (minDate && dateParsedToTimestamp < minDate.getTimestamp()) {
    errors.isErrorMinDate = true;
    errors.isError = true;
  }
  if (maxDate && dateParsedToTimestamp > maxDate.getTimestamp()) {
    errors.isErrorMaxDate = true;
    errors.isError = true;
  }
  return errors;
}

export default checkMinMaxDate;
