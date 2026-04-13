import { styled } from 'styled-components';
import React from 'react';

type DayOfMonthProps =  {
  key?: string;
  activeBackgroundColor: string;
  activeColor: string;
  backgroundColor: string;
  color: string;
  primaryColor: string;
  fontFamily: string;
  fontSize: number;
  hoverBackgroundColor: string;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  numberDayInWeek: number;
  name: string;
  disabled: boolean;
  isToday: boolean;
  isSameDate: boolean;
}

const DayOfMonth =
  styled('button') <
    DayOfMonthProps >
  `
    ${(props: DayOfMonthProps) => `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 25px;
      height: 25px;
      margin: 5px;
      padding: 0;
      border: 1px solid ${props.isSameDate || props.isToday ? props.primaryColor : props.backgroundColor};  
      font-size: ${props.fontSize}px;
      font-family: ${props.fontFamily};
      border-radius: 50%;
      color: ${props.isSameDate ? props.backgroundColor : props.color};
      background-color: ${props.isSameDate ? props.primaryColor : props.backgroundColor};
      opacity: 1;  
      &:hover {
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.25);
        background-color: ${props.hoverBackgroundColor};
        color: ${props.color};
      }
      &:active {
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.25);
        background-color: ${props.activeBackgroundColor};
        color: ${props.color};
      }
      &:disabled {
        opacity: 0.4;
      } 
    `}
`;

export default DayOfMonth;
