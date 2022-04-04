import styled from 'styled-components';

import IDatepicker from '../types/idatepicker';

const DatepickerContainer =
  styled('div') <
  IDatepicker >
  `
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  min-width: 250px;
  width: ${(props: IDatepicker) => (props?.width ? `${props?.width}px` : `100%`)};
  height: ${(props: IDatepicker) => (props?.height ? `${props?.height + 5}px` : 'calc(100% + 5px)')};
  line-height: 1;
`;

export default DatepickerContainer;
