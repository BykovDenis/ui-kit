import './days-of-week.css';

import React from 'react';

import Locale from '../../enums/locale';
import List from '../../list/src';
import daysOfWeekEn from '../dictionaries/days-of-week-en';
import daysOfWeekRu from '../dictionaries/days-of-week-ru';
import IDayOfWeek from '../types/iday-of-week';
import DayOfWeek from './day-of-week.styled';
import UiKitComponent from '../../enums/ui-kit-component';

const DaysOfWeek: React.FunctionComponent<IDayOfWeek> = (props: IDayOfWeek) => {
  const daysOfWeekElements: Array<string> = props.locale === Locale.Ru ? daysOfWeekRu : daysOfWeekEn;
  return (
    <List data-ui-kit-component={UiKitComponent.Datepicker} className="list" fontFamily={props.fontFamily} width={230}>
      {daysOfWeekElements.map((element: string, index: number) => {
        const color: string = index < 5 ? props.primaryColor : props.secondaryColor;

        return (
          <DayOfWeek
            data-ui-kit-component={UiKitComponent.Datepicker}
            color={color}
            fontSize={props.fontSize - 2}
            fontFamily={props.fontFamily}
            key={element}
          >
            {element}
          </DayOfWeek>
        );
      })}
    </List>
  );
};

export default DaysOfWeek;
