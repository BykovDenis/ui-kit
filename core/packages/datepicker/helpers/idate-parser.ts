import { Dayjs } from 'dayjs';
import TPatritionDate from '../types/tpatrition-date';

interface IDateParser {
  changeDay: (day: number) => void;
  changeMonth: (month: number | null) => void;
  changeYear: (month: number | null) => void;
  formatToString: () => string | null;
  getCountDaysInMonth: () => number;
  getDate: () => Dayjs;
  getNumberCurrentDateOfMonth: () => number;
  getNumberDay: () => number;
  getNumberDayInWeek: () => number;
  getNumberMonth: () => number;
  getNumberYear: () => number;
  getParsedDate: () => string;
  getSplittedParamsByDate?: () => Array<number> | undefined;
  getTimestamp: () => number;
  checkIsValidDate: () => boolean;
  locale?: string;
  changeParsedDate: (date?: string) => void;
  setToday: () => boolean;
  getTodayPartitionedDate: () => TPatritionDate;
}

export default IDateParser;
