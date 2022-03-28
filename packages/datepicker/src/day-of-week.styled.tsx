import styled from 'styled-components';
import IDatepicker from '../types/idatepicker';


const DayOfWeek =
  styled('li') <
  IDatepicker >
  `
    color: ${(props: IDatepicker) => props.color};
    font-family: ${(props: IDatepicker) => props.fontFamily};
    font-size: ${(props: IDatepicker) => props.fontSize}px;
`;

export default DayOfWeek;
