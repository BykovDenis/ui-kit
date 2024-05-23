import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

import parseZone from '../helpers/dayjs-parse-zone';
import IDateParser from './idate-parser';
import DatepickerMask from '../enums/datepicker-mask';
import checkFormatDate from './check-format-date';

dayjs.extend(parseZone);
dayjs.extend(utc);
dayjs.extend(customParseFormat);

class DateParser implements IDateParser {
  private dateParsed: Dayjs;
  private dateParamsSeparate: Array<number>;
  private isValid: boolean;
  private mask: string;
  private firstDayOnMonth: Dayjs;
  constructor(date?: string, mask?: DatepickerMask) {
    this.mask = mask === DatepickerMask.YYYYMMDD ? 'YYYY-MM-DD' : 'DD.MM.YYYY';
    this.changeParsedDate(date);
  }
  changeParsedDate(date: string) {
    if (!date) {
      this.dateParsed = dayjs();
      this.isValid = true;
    } else {
      let datePartition: Array<string> = date?.split('-');
      let day: number = parseInt(datePartition[2], 10);
      let month: number = parseInt(datePartition[1], 10);
      let year: number = parseInt(datePartition[0], 10);
      if (this.mask === 'DD.MM.YYYY') {
        datePartition = date?.split('.');
        day = parseInt(datePartition[0], 10);
        month = parseInt(datePartition[1], 10);
        year = parseInt(datePartition[2], 10);
      }
      const dateStringForparsing: string = `${year < 1000 ? `0${year}` : year}-${month < 10 ? `0${month}` : month}-${
        day < 10 ? `0${day}` : day
      }`;
      const isValid: boolean = dayjs(dateStringForparsing, 'YYYY-MM-DD', true).isValid();
      this.dateParsed = dayjs(dateStringForparsing, 'YYYY-MM-DD', true);
      this.isValid = isValid && checkFormatDate(day, month, year);
    }
    const month: number = this.dateParsed.get('month') + 1;
    this.firstDayOnMonth = dayjs(`${this.dateParsed.get('year')}-${month < 10 ? `0${month}` : month}-01`, 'YYYY-MM-DD');
  }
  getParsedDate() {
    return this.dateParsed.format(this.mask);
  }
  getNumberCurrentDateOfMonth() {
    return this.dateParsed.get('date');
  }
  getCountDaysInMonth() {
    return this.dateParsed.daysInMonth();
  }
  getNumberDayInWeek() {
    return this.firstDayOnMonth.day();
  }
  changeDay(day: number) {
    const month: number = this.dateParsed.get('month') + 1;
    this.dateParsed = dayjs(
      `${this.dateParsed.get('year')}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day ?? 7}`,
      'YYYY-MM-DD'
    );
  }
  changeMonth(month: number) {
    if (month === null) {
      this.dateParsed = null;
    } else {
      this.dateParsed = this.dateParsed.month(month + 1);
    }
  }
  changeYear(year: number) {
    if (year === null) {
      this.dateParsed = null;
    } else {
      this.dateParsed = this.dateParsed.year(year);
    }
  }
  getDate() {
    return this.dateParsed;
  }
  formatToString(): string {
    return this.dateParsed.isValid() ? this.dateParsed.format(this.mask) : null;
  }
  getNumberDay() {
    return this.dateParsed.date();
  }
  getNumberMonth() {
    return this.dateParsed.month();
  }
  getNumberYear() {
    return this.dateParsed.year();
  }
  checkIsValidateDate() {
    return this.dateParsed.isValid();
  }
  getSplittedParamsByDate() {
    return this.dateParamsSeparate;
  }
  getTimestamp() {
    return this.dateParsed.unix();
  }
  changeToTheNextMonth() {
    this.dateParsed = this.dateParsed.add(1, 'month');
    const month: number = this.dateParsed.get('month') + 1;
    this.firstDayOnMonth = dayjs(`${this.dateParsed.get('year')}-${month < 10 ? `0${month}` : month}-01`, 'YYYY-MM-DD');
  }
  changeToThePreviousMonth() {
    this.dateParsed = this.dateParsed.subtract(1, 'month');
    const month: number = this.dateParsed.get('month') + 1;
    this.firstDayOnMonth = dayjs(`${this.dateParsed.get('year')}-${month < 10 ? `0${month}` : month}-01`, 'YYYY-MM-DD');
  }
  changeToTheNextYear() {
    this.dateParsed = this.dateParsed.add(1, 'year');
    const month: number = this.dateParsed.get('month') + 1;
    this.firstDayOnMonth = dayjs(`${this.dateParsed.get('year')}-${month < 10 ? `0${month}` : month}-01`, 'YYYY-MM-DD');
  }
  changeToThePreviousYear() {
    this.dateParsed = this.dateParsed.subtract(1, 'year');
    const month: number = this.dateParsed.get('month') + 1;
    this.firstDayOnMonth = dayjs(`${this.dateParsed.get('year')}-${month < 10 ? `0${month}` : month}-01`, 'YYYY-MM-DD');
  }
  checkIsNotExistErrorDate() {
    return this.isValid;
  }
  setToday() {
    try {
      const date: Dayjs = dayjs();
      this.changeParsedDate(date?.format(this.mask));
      return true;
    } catch (error: any) {
      console.log(`Set today is error ${error?.toString()}`);
      return false;
    }
  }
  getTodayPartitionedDate() {
    const date: Dayjs = dayjs();
    return { year: date.year(), month: date.month(), day: date.date() };
  }
}

export default DateParser;
