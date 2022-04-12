import React from 'react';

import rgbToRgba from '../../helpers/rgb-to-rgba';
import DateParser from '../helpers/date-parser';
import IDateParser from '../helpers/idate-parser';
import DayEmptyOfMonth from './day-empty-of-month.styled';
import DayOfMonth from './day-of-month.styled';
import DaysOfMonthStyled from './days-of-month.styled';

interface IDaysOfMonth {
  backgroundColor: string;
  color: string;
  countDaysIsMonth: number;
  activeDayNumber: number;
  activeMonthNumber: number;
  activeYearNumber: number;
  currentMonthNumber: number;
  currentYearNumber: number;
  fontFamily: string;
  fontSize: number;
  maxDate?: string;
  minDate?: string;
  numberDayInWeek: number;
  onDayChange: (day: number) => void;
}

const DaysOfMonth: React.FunctionComponent<IDaysOfMonth> = (props: IDaysOfMonth) => {
  const daysElements: Array<number> =
    props.countDaysIsMonth && props.numberDayInWeek !== null
      ? new Array(props?.countDaysIsMonth + props?.numberDayInWeek)?.fill(null)
      : null;

  const onDayChange = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const element = evt.currentTarget;
    props.onDayChange(parseInt(element.name, 10));
  };

  const numberDayInWeek: number = props.numberDayInWeek; // props.numberDayInWeek >= 6 ? 0 : props.numberDayInWeek;

  const minDateParsed: IDateParser = new DateParser(props?.minDate);
  const maxDateParsed: IDateParser = new DateParser(props?.maxDate);

  return (
    <DaysOfMonthStyled>
      {daysElements?.map((element: number, index: number) => {
        const currentNumberDayOfWeek: number = index + 1;
        const dayValue: number = currentNumberDayOfWeek - numberDayInWeek + (numberDayInWeek > 0 ? 1 : 0);
        const dayValueParsed: string = dayValue?.toString();
        if (numberDayInWeek > currentNumberDayOfWeek || dayValue > props.countDaysIsMonth) {
          return <DayEmptyOfMonth />;
        }

        const dateParsed: IDateParser = new DateParser(
          `${dayValueParsed}.${props.activeMonthNumber}.${props.activeYearNumber}`
        );
        const isDisabled: boolean =
          dateParsed?.getDate() < minDateParsed.getDate() || dateParsed?.getDate() > maxDateParsed.getDate();

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
            key={`day-number-${dayValue}-${index}`}
            onClick={onDayChange}
            name={dayValueParsed}
            disabled={isDisabled}
          >
            {dayValueParsed}
          </DayOfMonth>
        );
      })}
    </DaysOfMonthStyled>
  );
};

export default DaysOfMonth;
