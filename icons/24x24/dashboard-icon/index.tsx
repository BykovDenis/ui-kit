import React from 'react';

import TIcon from '../../types/ticon';

const DashboardIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
      fill={props.color || 'var(--main-font-color)'}
    />
  </svg>
);

export default DashboardIcon;
