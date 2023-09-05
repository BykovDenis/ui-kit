import styled from 'styled-components';

import Idatepicker from '../types/idatepicker';
import getMeasureValue from "../../helpers/get-measure-value";

interface IDatepickerContainer {
  minWidth?: number | string;
  width: number | string;
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
  min-width: ${(props: IDatepickerContainer) => (getMeasureValue(props?.minWidth ?? props.width, `250px`))};
  width: ${(props: IDatepickerContainer) => (getMeasureValue(props.width, '100%'))};
  height: ${(props: IDatepickerContainer) => (props?.height ? `${props?.height + 5}px` : 'calc(100% + 5px)')};
  line-height: 1;
`;

export default DatepickerContainer;
