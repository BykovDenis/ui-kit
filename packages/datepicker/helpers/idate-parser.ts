interface IDateParser {
  changeDay: (day: number) => void;
  changeMonth: (month: number) => void;
  changeYear: (month: number) => void;
  checkIsValidateDate: () => boolean;
  formatToString: () => string;
  getCountDaysInMonth: () => number;
  getDate: () => Date;
  getNumberCurrentDateOfMonth: () => number;
  getNumberDay: () => number;
  getNumberDayInWeek: () => number;
  getNumberMonth: () => number;
  getNumberYear: () => number;
  getParsedDate: () => string;
  getSplittedParamsByDate?: (date: string) => Array<number>;
  getTimestamp: () => number;
  checkIsErrorDate: () => boolean;
  locale?: string;
}

export default IDateParser;
