import { Dayjs } from 'dayjs';

interface IDateParser {
  changeDay: (day: number) => void;
  changeMonth: (month: number) => void;
  changeYear: (month: number) => void;
  checkIsValidateDate: () => boolean;
  formatToString: () => string;
  getCountDaysInMonth: () => number;
  getDate: () => Dayjs;
  getNumberCurrentDateOfMonth: () => number;
  getNumberDay: () => number;
  getNumberDayInWeek: () => number;
  getNumberMonth: () => number;
  getNumberYear: () => number;
  getParsedDate: () => string;
  getSplittedParamsByDate?: (date: string) => Array<number>;
  getTimestamp: () => number;
  checkIsNotExistErrorDate: () => boolean;
  locale?: string;
  changeParsedDate: (date: string) => void;
}

export default IDateParser;
