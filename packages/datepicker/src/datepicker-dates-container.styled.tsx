import styled from 'styled-components';

import IDatepicker from '../types/idatepicker';

const DatepickerDatesContainer =
  styled('div') <
  IDatepicker >
  `
  top: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 1px, rgb(0 0 0 / 10%) 0px 4px 11px;
  margin-bottom: 5px;
  margin-top: 5px;
  position: absolute;
  width: 250px;
  height: 305px;
  z-index: 10001;
  box-sizing: border-box;
  border: 1px solid #666666; 
`;

export default DatepickerDatesContainer;
