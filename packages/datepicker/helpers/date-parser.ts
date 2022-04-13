import {add, format, getDate, getDay, getDaysInMonth, isValid, sub} from 'date-fns';

import IDateParser from './idate-parser';

class DateParser implements IDateParser{
  private dateParsed: Date;
  private dateParamsSeparate: Array<number>;
  private readonly firstDayOnMonth: Date
  constructor(date?: string) {
    const dateElements: Array<string> = date?.split('.') ?? [];
    this.dateParamsSeparate = dateElements?.map((element: string) => parseInt(element, 10)) ?? null;
    if (this.dateParamsSeparate?.length >= 2) {
      this.dateParsed = new Date(this.dateParamsSeparate[2], this.dateParamsSeparate[1] - 1, this.dateParamsSeparate[0]);
    } else {
      const date: Date = new Date();
      this.dateParsed = date;
      this.dateParamsSeparate = [ date.getDate(), date.getMonth(), date.getFullYear()  ];
    }
    this.firstDayOnMonth= new Date(this.dateParamsSeparate[2], this.dateParamsSeparate[1] - 1 , 1);
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
    this.dateParamsSeparate[0] = day;
    this.dateParsed = new Date(this.dateParamsSeparate[2], this.dateParamsSeparate[1] -1, this.dateParamsSeparate[0] ?? 7);
  }
  changeMonth(month: number) {
    if (month === null) {
      this.dateParsed = null;
    } else {
      this.dateParamsSeparate[1] = month + 1;
      this.dateParsed = new Date(this.dateParamsSeparate[2], this.dateParamsSeparate[1] -1, this.dateParamsSeparate[0] ?? 7);
    }
  }
  changeYear(year: number) {
    if (year === null) {
      this.dateParsed = null;
    } else {
      this.dateParamsSeparate[2] = year;
      this.dateParsed = new Date(this.dateParamsSeparate[2], this.dateParamsSeparate[1] - 1, this.dateParamsSeparate[0] ?? 7);
    }
  }
  getDate(){
    return this.dateParsed;
  }
  formatToString() {
    return format(this.dateParsed, 'dd.MM.yyyy')
  }
  getNumberDay() {
    return this.dateParamsSeparate[0];
  }
  getNumberMonth() {
    return this.dateParamsSeparate[1] - 1;
  }
  getNumberYear() {
    return this.dateParamsSeparate[2];
  }
  checkIsValidateDate() {
    return isValid(this.dateParsed);
  }
  getSplittedParamsByDate() {
    return this.dateParamsSeparate;
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
}

export default DateParser;
