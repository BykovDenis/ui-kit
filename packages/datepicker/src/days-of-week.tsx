import './days-of-week.css';

import React from 'react';

import List from '../../list/src';
import IDayOfWeek from '../types/iday-of-week';
import DayOfWeek from './day-of-week.styled';

const DaysOfWeek: React.FunctionComponent<IDayOfWeek> = (props: IDayOfWeek) => {
  const daysOfWeekElements: Array<string> = ['Пон', 'Вт', 'Срд', 'Чтв', 'Птн', 'Суб', 'Вск'];
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
