import React from 'react';
import TIcon from '../../types/ticon';

const ChevronUpIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    className={props.className}
  >
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z" fill={props.color} />
  </svg>
);

ChevronUpIcon.defaultProps = {
  color: 'var(--main-font-color)',
};

export default ChevronUpIcon;
