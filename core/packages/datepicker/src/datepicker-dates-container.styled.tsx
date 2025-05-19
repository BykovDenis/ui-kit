import styled from 'styled-components';

import React from 'react';
import getMeasureValue from '../../helpers/get-measure-value';
import UiKitComponent from '../../enums/ui-kit-component';

const CALENDAR_WIDTH = 250;
const CALENDAR_HEIGHT = 305;

type TDatepickerDatesContainer = {
  ref?: any;
  onMouseUp: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyUp: (evt: React.KeyboardEvent<HTMLElement>) => void;
  backgroundColor?: string;
  outlineColor: string;
  datesContainerAlign?: 'left' | 'right' | 'center';
  top: number;
  left: number;
  width: number;
};

const DatepickerDatesContainer = styled.div.attrs({
  'data-days-on-month': true,
  'data-ui-kit-component': UiKitComponent.Datepicker,
})<TDatepickerDatesContainer>`
  position: absolute;
  margin-bottom: 5px;
  margin-top: -3px;
  top: ${(props: TDatepickerDatesContainer) => getMeasureValue(props?.top + 6, '100%')};
  background-color: ${(props: TDatepickerDatesContainer) => props.backgroundColor};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 10%) 0 0 0 1px, rgb(0 0 0 / 10%) 0 4px 11px;
  width: ${CALENDAR_WIDTH}px;
  height: ${CALENDAR_HEIGHT}px;
  z-index: 10001;
  box-sizing: border-box;
  border: 1px solid ${(props: TDatepickerDatesContainer) => props.outlineColor};
  ${(props: TDatepickerDatesContainer) =>
    props.datesContainerAlign === 'left'
      ? `left: ${props.left}px;`
      : props.datesContainerAlign === 'right'
      ? `left: ${props.left - (CALENDAR_WIDTH - props.width)}px;`
      : props.width >= CALENDAR_WIDTH
      ? `left: ${props.left + Math.abs(CALENDAR_WIDTH - props.width) / 2}px;`
      : `left: ${props.left - Math.abs(CALENDAR_WIDTH - props.width) / 2}px;}`}
}
`;

export default DatepickerDatesContainer;
