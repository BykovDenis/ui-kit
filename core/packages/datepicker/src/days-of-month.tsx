import React from 'react';
import CSS from 'csstype';

import DateParser from '../helpers/date-parser';
import IDateParser from '../helpers/idate-parser';
import DayEmptyOfMonth from './day-empty-of-month.styled';
import DayOfMonth from './day-of-month.styled';
import DaysOfMonthStyled from './days-of-month.styled';
import getUniqueIndex from '../../helpers/get-unique-index';
import DatepickerMask from '../enums/datepicker-mask';
import TPatritionDate from '../types/tpatrition-date';
import UiKitComponent from '../../enums/ui-kit-component';

interface IDaysOfMonth {
  id: string;
  activeDayNumber: number;
  activeMonthNumber: number;
  activeYearNumber: number;
  backgroundColor: string;
  color: string;
  countDaysIsMonth: number;
  actualMonthNumber: number;
  actualYearNumber: number;
  todayPartitioned: TPatritionDate;
  fontFamily: CSS.Property.FontFamily;
  fontSize: number;
  maxDate?: IDateParser;
  minDate?: IDateParser;
  numberDayInWeek: number;
  onDayChange: (day: number) => void;
  mask: DatepickerMask;
  primaryColor: string;
  hoverBackgroundColor: string;
  activeBackgroundColor: string;
}

const DaysOfMonth: React.FunctionComponent<IDaysOfMonth> = (props: IDaysOfMonth) => {
  const onDayChange = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    const element = evt.currentTarget;
    props.onDayChange(parseInt(element.name, 10));
  };

  const numberDayInWeek: number = props.numberDayInWeek === 0 ? 7 : props.numberDayInWeek;

  const daysElements: Array<number> =
    props.countDaysIsMonth && props.numberDayInWeek !== null && !isNaN(props.numberDayInWeek)
      ? new Array(props?.countDaysIsMonth + numberDayInWeek)?.fill(null)
      : null;

  return (
    <DaysOfMonthStyled id={props.id} data-ui-kit-component={UiKitComponent.Datepicker}>
      {daysElements?.map((element: number, index: number) => {
        const actualNumberDayOfWeek: number = index + 1;
        const dayValue: number = actualNumberDayOfWeek - numberDayInWeek + (numberDayInWeek > 0 ? 1 : 0);
        const dayValueParsed: string = dayValue?.toString();
        if (numberDayInWeek > actualNumberDayOfWeek || dayValue > props.countDaysIsMonth) {
          return <DayEmptyOfMonth key={getUniqueIndex()} data-ui-kit-component={UiKitComponent.Datepicker} />;
        }

        const actualDateValue =
          props.mask === DatepickerMask.DashedYYYYMMDD
            ? `${props.actualYearNumber}-${props.actualMonthNumber + 1}-${dayValueParsed}`
            : `${dayValueParsed}.${props.actualMonthNumber + 1}.${props.actualYearNumber}`;

        const actualDateParsed: IDateParser = new DateParser(actualDateValue, props.mask);

        const disabled: boolean =
          (props?.minDate !== null && actualDateParsed?.getDate() < props.minDate.getDate()) ||
          (props?.maxDate !== null && actualDateParsed?.getDate() > props.maxDate.getDate());

        const isSameDate: boolean =
          dayValue === props.activeDayNumber &&
          props.activeMonthNumber === props.actualMonthNumber &&
          props.activeYearNumber === props.actualYearNumber;

        const isToday: boolean =
          dayValue === props.todayPartitioned.day &&
          props.actualMonthNumber === props.todayPartitioned.month &&
          props.actualYearNumber === props.todayPartitioned.year;

        return (
          <DayOfMonth
            name={dayValueParsed}
            data-ui-kit-component={UiKitComponent.Datepicker}
            fontFamily={props.fontFamily}
            hoverBackgroundColor={props.hoverBackgroundColor}
            activeBackgroundColor={props.activeBackgroundColor}
            activeColor={props.backgroundColor}
            isToday={isToday}
            isSameDate={isSameDate}
            color={props.color}
            backgroundColor={props.backgroundColor}
            fontSize={props.fontSize}
            numberDayInWeek={props.numberDayInWeek}
            key={`day-number-${dayValue}-${index}-${dayValueParsed}`}
            onClick={onDayChange}
            disabled={disabled}
            primaryColor={props.primaryColor}
            type="button"
          >
            {dayValueParsed}
          </DayOfMonth>
        );
      })}
    </DaysOfMonthStyled>
  );
};

export default DaysOfMonth;
