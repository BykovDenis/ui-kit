import React from 'react';

import TIcon from '../../types/ticon';

const CalendarIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="24px"
    height="24px"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    className={props.className}
  >
    <path d="M7.5 2C8.329 2 9 2.671 9 3.5V4H15V3.5C15 2.671 15.671 2 16.5 2C17.329 2 18 2.671 18 3.5V4H20C20.552 4 21 4.335 21 4.75V20.25C21 20.664 20.552 21 20 21H4C3.448 21 3 20.664 3 20.25V4.75C3 4.335 3.448 4 4 4H6V3.5C6 2.671 6.671 2 7.5 2ZM6 9V18H18V9H6ZM11 15H9C8.448 15 8 14.552 8 14V12C8 11.448 8.448 11 9 11H11C11.552 11 12 11.448 12 12V14C12 14.552 11.552 15 11 15Z" fill={props.color || 'var(--main-font-color)'} />
  </svg>
);
export default CalendarIcon;
