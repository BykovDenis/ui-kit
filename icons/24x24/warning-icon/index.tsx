import React from 'react';

import TIcon from '../../types/ticon';

const WarningIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg className={props.className} width="24px" height="24px" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WarningIcon">
    <path fill={props.color || 'var(--main-font-color)'} d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
  </svg>
);

export default WarningIcon;
