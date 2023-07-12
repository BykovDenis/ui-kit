import './days-of-week.css';

import React from 'react';

import Locale from '../../enums/locale';
import List from '../../list/src';
import daysOfWeekEn from '../dictionaries/days-of-week-en';
import daysOfWeekRu from '../dictionaries/days-of-week-ru';
import IDayOfWeek from '../types/iday-of-week';
import DayOfWeek from './day-of-week.styled';

const DaysOfWeek: React.FunctionComponent<IDayOfWeek> = (props: IDayOfWeek) => {
  const daysOfWeekElements: Array<string> = props.locale === Locale.Ru ? daysOfWeekRu : daysOfWeekEn;
  return (
    <List className="list" fontFamily={props.fontFamily}>
      {daysOfWeekElements.map((element: string, index: number) => {
        const color: string = index < 5 ? props.primaryColor : props.secondaryColor;

        return (
          <DayOfWeek color={color} fontSize={props.fontSize - 2} fontFamily={props.fontFamily} key={element}>
            {element}
          </DayOfWeek>
        );
      })}
    </List>
  );
};

export default DaysOfWeek;
