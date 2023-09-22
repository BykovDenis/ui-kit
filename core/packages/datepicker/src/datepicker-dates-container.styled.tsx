import styled from 'styled-components';

import Idatepicker from '../types/idatepicker';
import React from 'react';

interface IDatepickerDatesContainer {
  ref?: any;
  onMouseUp: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyUp: (evt: React.KeyboardEvent<HTMLElement>) => void;
  backgroundColor?: string;
}

const DatepickerDatesContainer =
  styled('div') <
  IDatepickerDatesContainer >
  `
  top: 100%;
  background-color: ${(props: IDatepickerDatesContainer) => props.backgroundColor};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 1px, rgb(0 0 0 / 10%) 0px 4px 11px;
  margin-bottom: 5px;
  margin-top: -3px;
  position: absolute;
  width: 250px;
  height: 305px;
  z-index: 10001;
  box-sizing: border-box;
  border: 1px solid #666666; 
`;

export default DatepickerDatesContainer;
