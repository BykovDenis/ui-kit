import React from 'react';

import TIcon from '../../types/ticon';

const AnalyticalCalculationsIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" fill={props.color || 'var(--main-font-color)'} />
  </svg>
);

export default AnalyticalCalculationsIcon;
