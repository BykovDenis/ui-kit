import {add, format, getDate, getDay, getDaysInMonth, isValid, sub, getUnixTime, toDate, getMonth, getYear} from 'date-fns';

import IDateParser from './idate-parser';
import DatepickerMask from "../enums/datepicker-mask";

class DateParser implements IDateParser{
  private dateParsed: Date;
  private dateParamsSeparate: Array<number>;
  isValid: boolean;
  private mask: DatepickerMask;
  private firstDayOnMonth: Date;
  constructor(date?: string, mask?: DatepickerMask) {
    this.changeParsedDate(date);
    this.mask = mask;
    this.firstDayOnMonth = new Date(getYear(this.dateParsed), getMonth(this.dateParsed), 1);
  }
  changeParsedDate(date: string) {
    if (!date) {
      this.dateParsed = toDate(new Date());
      this.isValid = true;
    } else {
      let dateParsed: string = date;
      let datePartition: Array<string> = date?.split('-');
      if (this.mask === DatepickerMask.DDMMYYYY) {
        datePartition = date?.split('.');
        dateParsed = datePartition?.reverse()?.join('-');
      }
      this.dateParsed = toDate(new Date(dateParsed));
      this.isValid = parseInt(datePartition?.[1], 10) <= 12 && isValid(this.dateParsed);
    }
    this.firstDayOnMonth = new Date(getYear(this.dateParsed), getMonth(this.dateParsed), 1);
  }
  getParsedDate() {
    return this.dateParsed.toString();
  }
  getNumberCurrentDateOfMonth() {
    return getDate(this.dateParsed);
  }
  getCountDaysInMonth() {
    return getDaysInMonth(this.dateParsed);
  }
  getNumberDayInWeek() {
    return getDay(this.firstDayOnMonth);
  }
  changeDay(day: number) {
    this.dateParsed = new Date(getYear(this.dateParsed), getMonth(this.dateParsed) - 1, day ?? 7);
  }
  changeMonth(month: number) {
    if (month === null) {
      this.dateParsed = null;
    } else {
      this.dateParsed = new Date(getYear(this.dateParsed), month, getDate(this.dateParsed));
    }
  }
  changeYear(year: number) {
    if (year === null) {
      this.dateParsed = null;
    } else {
      this.dateParsed = new Date(year, getMonth(this.dateParsed), getDate(this.dateParsed));
    }
  }
  getDate(){
    return this.dateParsed;
  }
  formatToString(): string {
    return isValid(this.dateParsed) ? format(this.dateParsed, this.mask?.toString()) : null;
  }
  getNumberDay() {
    return getDate(this.dateParsed);
  }
  getNumberMonth() {
    return getMonth(this.dateParsed);
  }
  getNumberYear() {
    return  getYear(this.dateParsed);
  }
  checkIsValidateDate() {
    return isValid(this.dateParsed);
  }
  getSplittedParamsByDate() {
    return this.dateParamsSeparate;
  }
  getTimestamp() {
    return getUnixTime(this.dateParsed);
  }
  changeToTheNextMonth() {
    this.dateParsed = add(this.dateParsed, { months: 1 })
  }
  changeToThePreviousMonth() {
    this.dateParsed = sub(this.dateParsed, { months: 1 })
  }
  changeToTheNextYear() {
    this.dateParsed = add(this.dateParsed, { months: 12 })
  }
  changeToThePreviousYear() {
    this.dateParsed = sub(this.dateParsed, { months: 12 })
  }
	checkIsNotExistErrorDate() {
		 return this.isValid;
	}
}

export default DateParser;
