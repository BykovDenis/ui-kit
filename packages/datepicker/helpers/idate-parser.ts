interface IDateParser {
  changeDay: (day: string) => void;
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
  locale?: string;
}

export default IDateParser;
