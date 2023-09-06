import React from 'react';

import TIcon from '../../types/ticon';

const FlagIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" fill={props?.color || 'var(--main-font-color)'} />
  </svg>
);

export default FlagIcon;
