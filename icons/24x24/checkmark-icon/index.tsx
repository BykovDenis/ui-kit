import React from 'react';

import TIcon from '../../types/ticon';
const CheckmarkIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M21.9999 11.9999C21.9999 6.47688 17.5229 1.99988 11.9999 1.99988C6.47689 1.99988 1.99989 6.47688 1.99989 11.9999C1.99989 17.5229 6.47689 21.9999 11.9999 21.9999C17.5229 21.9999 21.9999 17.5229 21.9999 11.9999ZM7.29289 11.289C7.68389 10.899 8.31689 10.899 8.70689 11.289L10.9999 13.582L16.2969 8.29198C16.6879 7.90198 17.3209 7.90298 17.7119 8.29298C18.1019 8.68398 18.1019 9.31698 17.7109 9.70698L10.9989 16.41L7.29289 12.704C6.90189 12.313 6.90189 11.68 7.29289 11.289Z"
      fill={props.color}
    />
  </svg>
);

CheckmarkIcon.defaultProps = {
  color: 'var(--main-font-color)',
};

export default CheckmarkIcon;
