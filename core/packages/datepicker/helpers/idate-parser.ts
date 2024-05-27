import { Dayjs } from 'dayjs';
import TPatritionDate from '../types/tpatrition-date';

interface IDateParser {
  changeDay: (day: number) => void;
  changeMonth: (month: number) => void;
  changeYear: (month: number) => void;
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
  checkIsValidDate: () => boolean;
  locale?: string;
  changeParsedDate: (date: string) => void;
  setToday: () => boolean;
  getTodayPartitionedDate: () => TPatritionDate;
}

export default IDateParser;
