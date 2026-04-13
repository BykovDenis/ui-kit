import React from 'react';

import TIcon from '../../types/ticon';
const CopyIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg className={props.className} viewBox="0 0 24 24" data-testid="ContentCopyIcon">
    <path
      d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
      fill={props.color || 'var(--main-font-color)'}
    ></path>
  </svg>
);

export default CopyIcon;
