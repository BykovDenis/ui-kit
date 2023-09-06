import React from 'react';

import TIcon from '../../types/ticon';

const LastPageIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
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
    <path
      d="M18.41 16.59L13.82 12L18.41 7.41L17 6L11 12L17 18L18.41 16.59ZM6 6H8V18H6V6Z"
      fill={props?.color || '#333333'}
    />
  </svg>
);
export default LastPageIcon;
