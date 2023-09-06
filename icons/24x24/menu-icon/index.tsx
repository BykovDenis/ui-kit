import React from 'react';

import TIcon from '../../types/ticon';
const MenuIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M19.5 7.5H4.5V5.5H19.5V7.5ZM19.5 11.5H4.5V9.5H19.5V11.5ZM4.5 15.5H19.5V13.5H4.5V15.5ZM19.5 19.5H4.5V17.5H19.5V19.5Z"
      fill={props.color || 'var(--main-font-color)'}
    />
  </svg>
);

export default MenuIcon;
