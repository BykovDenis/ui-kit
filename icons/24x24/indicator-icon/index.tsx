import React from 'react';

import TIcon from '../../types/ticon';

const IndicatorIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    className={props.className}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="Brightness1Icon"
  >
    <circle cx="12" cy="12" r="10" fill={props?.color || 'var(--main-font-color)'}></circle>
  </svg>
);
export default IndicatorIcon;
