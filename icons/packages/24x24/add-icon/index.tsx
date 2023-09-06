import React from 'react';
import TIcon from "../../types/ticon";

const AddIcon: React.FunctionComponent<TIcon> = (props: TIcon) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M17.8981 10.036L17.9068 8.04202L10.0014 8.00735L10.0361 0.10197L8.04207 0.093224L8.0074 7.9986L0.102022 7.96393L0.0932765 9.95795L7.99865 9.99262L7.96398 17.898L9.958 17.9067L9.99268 10.0014L17.8981 10.036Z"
      fill={props?.color || 'var(--main-font-color)'}
    />
  </svg>
);

export default AddIcon;
