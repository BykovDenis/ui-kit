import React from 'react';

import TIcon from '../../types/ticon';

const ArrowBackIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
      fill={props?.color || 'var(--main-font-color)'}
    />
  </svg>
);

export default ArrowBackIcon;
