import React from 'react';

import TIcon from '../../../types/ticon';

const ChevronDownIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
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
    <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill={props?.color || '#333333'} />
  </svg>
);

export default ChevronDownIcon;
