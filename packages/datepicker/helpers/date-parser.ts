import {add, format, getDate, getDay, getDaysInMonth, isValid, sub, getUnixTime} from 'date-fns';

import IDateParser from './idate-parser';

class DateParser implements IDateParser{
  private dateParsed: Date;
  private dateParamsSeparate: Array<number>;
	private isValid: boolean;
  private readonly firstDayOnMonth: Date
  constructor(date?: string) {
    const dateElements: Array<string> = date?.split('.') ?? [];
    this.dateParamsSeparate = dateElements?.map((element: string) => {
      return element !== null && element !== undefined && element !== '' ? parseInt(element, 10) : 0
    }) ?? null;
    const year: number = this.dateParamsSeparate[2];
    const month: number = this.dateParamsSeparate[1] - 1 <= 12 ? this.dateParamsSeparate[1] - 1 : null;
    const days: number = this.dateParamsSeparate[0];
		if (month === null) {
			this.dateParsed = new Date(year, month, days);
			this.isValid = false;
		}
		this.isValid = true;
    if (this.dateParamsSeparate?.length >= 2) {
      this.dateParsed = new Date(year, month, days);
    } else {
      const date: Date = new Date();
      this.dateParsed = date;
      this.dateParamsSeparate = [ date.getDate(), date.getMonth() + 1, date.getFullYear()  ];
    }
    this.firstDayOnMonth= new Date(year, month, 1);
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
	checkIsErrorDate() {
		 return isValid;
	}
}

export default DateParser;
