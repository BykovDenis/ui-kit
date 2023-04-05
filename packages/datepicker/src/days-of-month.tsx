import React from 'react';

import rgbToRgba from '../../helpers/rgb-to-rgba';
import DateParser from '../helpers/date-parser';
import IDateParser from '../helpers/idate-parser';
import DayEmptyOfMonth from './day-empty-of-month.styled';
import DayOfMonth from './day-of-month.styled';
import DaysOfMonthStyled from './days-of-month.styled';
import getUniqueIndex from '../../helpers/get-unique-index';
import DatepickerMask from '../enums/datepicker-mask';

interface IDaysOfMonth {
  activeDayNumber: number;
  activeMonthNumber: number;
  activeYearNumber: number;
  backgroundColor: string;
  color: string;
  countDaysIsMonth: number;
  actualMonthNumber: number;
  actualYearNumber: number;
  fontFamily: string;
  fontSize: number;
  maxDate?: IDateParser;
  minDate?: IDateParser;
  numberDayInWeek: number;
  onDayChange: (day: number) => void;
  mask: DatepickerMask;
}

const DaysOfMonth: React.FunctionComponent<IDaysOfMonth> = (props: IDaysOfMonth) => {
  const onDayChange = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const element = evt.currentTarget;
    props.onDayChange(parseInt(element.name, 10));
  };

  const numberDayInWeek: number = props.numberDayInWeek === 0 ? 7 : props.numberDayInWeek;

  const daysElements: Array<number> =
    props.countDaysIsMonth && props.numberDayInWeek !== null
      ? new Array(props?.countDaysIsMonth + numberDayInWeek)?.fill(null)
      : null;

  return (
    <DaysOfMonthStyled>
      {daysElements?.map((element: number, index: number) => {
        const actualNumberDayOfWeek: number = index + 1;
        const dayValue: number = actualNumberDayOfWeek - numberDayInWeek + (numberDayInWeek > 0 ? 1 : 0);
        const dayValueParsed: string = dayValue?.toString();
        if (numberDayInWeek > actualNumberDayOfWeek || dayValue > props.countDaysIsMonth) {
          return <DayEmptyOfMonth key={getUniqueIndex()} />;
        }

        const actualDateValue =
          props.mask === DatepickerMask.YYYYMMDD
            ? `${props.actualYearNumber}-${props.actualMonthNumber}-${dayValueParsed}`
            : `${dayValueParsed}.${props.actualMonthNumber}.${props.actualYearNumber}`;

        const actualDateParsed: IDateParser = new DateParser(actualDateValue, props.mask);

        const disabled: boolean =
          (props?.minDate !== null && actualDateParsed?.getDate() < props.minDate.getDate()) ||
          (props?.maxDate !== null && actualDateParsed?.getDate() > props.maxDate.getDate());

        const isSameDate: boolean =
          dayValue === props.activeDayNumber &&
          props.activeMonthNumber === props.actualMonthNumber &&
          props.activeYearNumber === props.actualYearNumber;

        return (
          <DayOfMonth
            fontFamily={props.fontFamily}
            hoverBackgroundColor={rgbToRgba(props.color, 0.85)}
            activeBackgroundColor={rgbToRgba(props.color, 0.5)}
            activeColor={props.backgroundColor}
            backgroundColor={isSameDate ? props.color : props.backgroundColor}
            color={isSameDate ? props.backgroundColor : props.color}
            fontSize={props.fontSize}
            borderColor={isSameDate ? props.color : props.backgroundColor}
            numberDayInWeek={props.numberDayInWeek}
            key={`day-number-${dayValue}-${index}-${dayValueParsed}`}
            onClick={onDayChange}
            name={dayValueParsed}
            disabled={disabled}
          >
            {dayValueParsed}
          </DayOfMonth>
        );
      })}
    </DaysOfMonthStyled>
  );
};

export default React.memo(DaysOfMonth);
