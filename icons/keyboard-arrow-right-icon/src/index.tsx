import React from 'react';

import TIcon from '../../types/ticon';

const KeyboardArrowRightIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    className={props.className}
  >
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill={props?.color || '#333333'} />
  </svg>
);
export default KeyboardArrowRightIcon;
