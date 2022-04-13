import IDatepickerSource from '../types/idatepicker';
import IDayOfWeekSource from '../types/iday-of-week';

declare namespace Datepicker {
  export interface IDatepicker extends IDatepickerSource {};
  export interface IDayOfWeek extends IDayOfWeekSource {};
}
