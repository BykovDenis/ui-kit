import React from 'react';

import TIcon from '../../types/ticon';

const MoonIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.9687 14.18C12.2187 12.873 10.2537 10.2 10.0247 7.16297C9.93871 6.02297 10.0777 4.92597 10.4017 3.91197C10.5207 3.53597 10.1717 3.18897 9.78971 3.28497C5.72671 4.31197 2.75171 8.09397 3.01671 12.554C3.27171 16.839 6.66971 20.446 10.9347 20.938C15.0577 21.414 18.7197 19.09 20.2447 15.609C20.4047 15.244 20.1067 14.849 19.7137 14.908C18.2377 15.129 16.6427 14.977 14.9687 14.18Z"
      fill={props.color || 'var(--main-font-color)'}
    />
  </svg>
);
export default MoonIcon;
