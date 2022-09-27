import {add, format, getDate, getDay, getDaysInMonth, isValid, sub, getUnixTime, toDate, getMonth, getYear} from 'date-fns';

import IDateParser from './idate-parser';

class DateParser implements IDateParser{
  private dateParsed: Date;
  private dateParamsSeparate: Array<number>;
  isValid: boolean;
  private firstDayOnMonth: Date
  constructor(date?: string) {
    this.changeParsedDate(date);
    // this.dateParamsSeparate = dateElements?.map((element: string) => {
    //   return element !== null && element !== undefined && element !== '' ? parseInt(element, 10) : 0
    // }) ?? null;
    // const year: number = this.dateParamsSeparate[2];
    // const month: number = this.dateParamsSeparate[1] - 1 <= 12 ? this.dateParamsSeparate[1] - 1 : null;
    // const days: number = this.dateParamsSeparate[0];
		// if (month === null) {
		// 	this.dateParsed = new Date(year, month, days);
		// 	this.isValid = false;
		// }
		// this.isValid = true;
    // if (this.dateParamsSeparate?.length >= 2) {
    //   this.dateParsed = new Date(year, month, days);
    // } else {
    //   const date: Date = new Date();
    //   this.dateParsed = date;
    //   this.dateParamsSeparate = [ date.getDate(), date.getMonth() + 1, date.getFullYear()  ];
    // }
    this.firstDayOnMonth = new Date(getYear(this.dateParsed), getMonth(this.dateParsed), 1);
  }
  changeParsedDate(date: string) {
    if (!date) {
      this.dateParsed = toDate(new Date());
      this.isValid = true;
    } else {
      const datePartition: Array<string> = date?.split('.')
      const dateParsed: string = datePartition?.reverse()?.join('-');
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
  formatToString() {
    return isValid(this.dateParsed) ? format(this.dateParsed, 'dd.MM.yyyy') : null;
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
