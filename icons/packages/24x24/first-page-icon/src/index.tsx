import React from 'react';

import TIcon from '../../../types/ticon';

const FirstPageIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
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
    <path
      d="M6 7.41L10.59 12L6 16.59L7.41 18L13.41 12L7.41 6L6 7.41ZM16.41 6H18.41V18H16.41V6Z"
      fill={props?.color || '#333333'}
    />
  </svg>
);
export default FirstPageIcon;
