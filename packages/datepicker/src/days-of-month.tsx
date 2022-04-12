import React from 'react';

import rgbToRgba from '../../helpers/rgb-to-rgba';
import DateCustom from '../helpers/date-parser';
import DateParser from '../helpers/date-parser';
import IDateParser from '../helpers/idate-parser';
import DayEmptyOfMonth from './day-empty-of-month.styled';
import DayOfMonth from './day-of-month.styled';
import DaysOfMonthStyled from './days-of-month.styled';

interface IDaysOfMonth {
  backgroundColor: string;
  color: string;
  countDaysIsMonth: number;
  currentDayNumber: number;
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
      {daysElements?.map((element: number, index: number, array: Array<number>) => {
        const currentNumberDayOfWeek: number = index + 1;
        const dayValue: number = currentNumberDayOfWeek - numberDayInWeek + 1;
        const dayValueParsed: string = dayValue?.toString();
        if (numberDayInWeek >= currentNumberDayOfWeek || index >= array.length - 1 || index >= array.length) {
          return <DayEmptyOfMonth />;
        }

        const dateParsed: IDateParser = new DateParser(
          `${dayValueParsed}.${props.currentMonthNumber}.${props.currentYearNumber}`
        );
        const isDisabled: boolean =
          dateParsed?.getDate() < minDateParsed.getDate() || dateParsed?.getDate() > maxDateParsed.getDate();
        return (
          <DayOfMonth
            fontFamily={props.fontFamily}
            hoverBackgroundColor={rgbToRgba(props.color, 0.85)}
            activeBackgroundColor={rgbToRgba(props.color, 0.5)}
            activeColor={props.backgroundColor}
            backgroundColor={dayValue === props.currentDayNumber ? props.color : props.backgroundColor}
            color={dayValue === props.currentDayNumber ? props.backgroundColor : props.color}
            fontSize={props.fontSize}
            borderColor={dayValue === props.currentDayNumber ? props.color : props.backgroundColor}
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
