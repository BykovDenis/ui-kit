import React from 'react';
import TIcon from '../../types/ticon';

const CrossIcon: React.FunctionComponent<TIcon> = (props: TIcon) => {
  return (
    <svg version="1.1" width="14" height="14" viewBox="5 5 14 14">
      <path
        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        fill={props.color}
      />
    </svg>
  );
};

CrossIcon.defaultProps = {
  color: 'var(--main-font-color)',
};

export default CrossIcon;
