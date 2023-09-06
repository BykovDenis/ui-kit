import React from 'react';

import TIcon from '../../types/ticon';

const ChevronLeftIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M12.62 2.99006C12.13 2.50006 11.34 2.50006 10.85 2.99006L2.54 11.3001C2.15 11.6901 2.15 12.3201 2.54 12.7101L10.85 21.0201C11.34 21.5101 12.13 21.5101 12.62 21.0201C13.11 20.5301 13.11 19.7401 12.62 19.2501L5.38 12.0001L12.63 4.75006C13.11 4.27006 13.11 3.47006 12.62 2.99006Z"
      fill={props.color || 'var(--main-font-color)'}
    />
  </svg>
);

export default ChevronLeftIcon;
