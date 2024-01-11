import styled from 'styled-components';

import React from 'react';

type TDatepickerDatesContainer = {
  ref?: any;
  onMouseUp: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyUp: (evt: React.KeyboardEvent<HTMLElement>) => void;
  backgroundColor?: string;
  outlineColor: string;
  datesContainerAlign?: 'left' | 'right';
};

const DatepickerDatesContainer = styled.div.attrs({ 'data-days-on-month': true })<TDatepickerDatesContainer>`
  position: absolute;
  margin-bottom: 5px;
  margin-top: -3px;
  top: 100%;
  background-color: ${(props: TDatepickerDatesContainer) => props.backgroundColor};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 10%) 0 0 0 1px, rgb(0 0 0 / 10%) 0 4px 11px;
  width: 250px;
  height: 305px;
  z-index: 10001;
  box-sizing: border-box;
  border: 1px solid ${(props: TDatepickerDatesContainer) => props.outlineColor};
  ${(props: TDatepickerDatesContainer) => (props.datesContainerAlign === 'right' ? 'right: 0;' : 'left: 0;')}
`;

export default DatepickerDatesContainer;
