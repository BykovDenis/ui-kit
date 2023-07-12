import styled from 'styled-components';

import Idatepicker from '../types/idatepicker';

interface IDatepickerContainer {
  width: number;
  height: number;
  backgroundImage?: string;
}

const DatepickerContainer =
  styled('div') <
  IDatepickerContainer >
  `
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  min-width: 250px;
  width: ${(props: IDatepickerContainer) => (props?.width ? `${props?.width}px` : `100%`)};
  height: ${(props: IDatepickerContainer) => (props?.height ? `${props?.height + 5}px` : 'calc(100% + 5px)')};
  line-height: 1;
`;

export default DatepickerContainer;
