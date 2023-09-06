import React from 'react';

import TIcon from '../../types/ticon';
const InfoIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg width="24" height="24" viewBox="2 2 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM20 12C20 7.589 16.411 4 12 4C7.589 4 4 7.589 4 12C4 16.411 7.589 20 12 20C16.411 20 20 16.411 20 12ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
      fill={props.color || 'var(--main-font-color)'}
    />
  </svg>
);
export default InfoIcon;
