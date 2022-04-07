import styled from 'styled-components';

import rgbToRgba from '../../helpers/rgb-to-rgba';

interface IDayOfMonth {
  key?: string;
  activeBackgroundColor: string;
  activeColor: string;
  backgroundColor: string;
  borderColor: string;
  color: string;
  countDaysIsMonth: number;
  fontFamily: string;
  fontSize: number;
  hoverBackgroundColor: string;
  isCurrentDay: boolean;
}

const DayOfMonth =
  styled('button') <
  IDayOfMonth >
  `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  margin: 5px;
  border: 1px solid ${(props: IDayOfMonth) => props.borderColor};  
  font-size: ${(props: IDayOfMonth) => props.fontSize}px;
  font-family: ${(props: IDayOfMonth) => props.fontFamily};
  border-radius: 50%;
  color: ${(props: IDayOfMonth) => props.color};
  background-color: ${(props: IDayOfMonth) => props.backgroundColor};
  opacity: 1;  
  &:hover {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.25);
    background-color: ${(props: IDayOfMonth) => props.hoverBackgroundColor};
    color: ${(props: IDayOfMonth) => props.activeColor};
  }
  &:active {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.25);
    background-color: ${(props: IDayOfMonth) => props.activeBackgroundColor};
    color: ${(props: IDayOfMonth) => props.activeColor};
  }
  &:disabled {
    opacity: 0.4;
  }  
`;

export default DayOfMonth;
