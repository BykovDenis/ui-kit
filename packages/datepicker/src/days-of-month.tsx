import React from 'react';

import rgbToRgba from '../../helpers/rgb-to-rgba';
import DateParser from '../helpers/date-parser';
import IDateParser from '../helpers/idate-parser';
import DayEmptyOfMonth from './day-empty-of-month.styled';
import DayOfMonth from './day-of-month.styled';
import DaysOfMonthStyled from './days-of-month.styled';
import getUniqueIndex from '../../helpers/get-unique-index';

interface IDaysOfMonth {
  activeDayNumber: number;
  activeMonthNumber: number;
  activeYearNumber: number;
  backgroundColor: string;
  color: string;
  countDaysIsMonth: number;
  currentMonthNumber: number;
  currentYearNumber: number;
  fontFamily: string;
  fontSize: number;
  maxDate?: IDateParser;
  minDate?: IDateParser;
  numberDayInWeek: number;
  onDayChange: (day: number) => void;
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
        const currentNumberDayOfWeek: number = index + 1;
        const dayValue: number = currentNumberDayOfWeek - numberDayInWeek + (numberDayInWeek > 0 ? 1 : 0);
        const dayValueParsed: string = dayValue?.toString();
        if (numberDayInWeek > currentNumberDayOfWeek || dayValue > props.countDaysIsMonth) {
          return <DayEmptyOfMonth key={getUniqueIndex()} />;
        }

        const currentDateParsed: IDateParser = new DateParser(
          `${dayValueParsed}.${props.currentMonthNumber}.${props.currentYearNumber}`
        );

        const disabled: boolean =
          (props?.minDate !== null && currentDateParsed?.getDate() < props.minDate.getDate()) ||
          (props?.maxDate !== null && currentDateParsed?.getDate() > props.maxDate.getDate());

        const isSameDate: boolean =
          dayValue === props.activeDayNumber &&
          props.activeMonthNumber === props.currentMonthNumber &&
          props.activeYearNumber === props.currentYearNumber;

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

export default DaysOfMonth;
