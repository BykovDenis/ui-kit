import DateParser from './date-parser';

function checkMinMaxDate(
  dateValue: DateParser,
  minDate: DateParser | null,
  maxDate: DateParser | null
): {
  isValid: boolean;
  isErrorMinDate: boolean;
  isErrorMaxDate: boolean;
} {
  const validation: {
    isValid: boolean;
    isErrorMinDate: boolean;
    isErrorMaxDate: boolean;
  } = {
    isValid: true,
    isErrorMinDate: false,
    isErrorMaxDate: false,
  };
  const dateParsedToTimestamp: number = dateValue.getTimestamp();
  if (minDate && dateParsedToTimestamp < minDate.getTimestamp()) {
    validation.isErrorMinDate = true;
    validation.isValid = false;
  }
  if (maxDate && dateParsedToTimestamp > maxDate.getTimestamp()) {
    validation.isErrorMaxDate = true;
    validation.isValid = false;
  }
  validation.isValid = validation.isValid && dateValue.checkIsValidDate();
  return validation;
}

export default checkMinMaxDate;
