import React from 'react';

interface IIcon {
  className?: string;
  color?: string;
}

const EditIcon: React.FunctionComponent<IIcon> = (props: IIcon) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M15.8887 2.29265L2.45369 15.7276C2.26616 15.9152 2.1608 16.1695 2.1608 16.4348V20.6778C2.1608 21.23 2.60852 21.6778 3.1608 21.6778H7.4038C7.66902 21.6778 7.92337 21.5724 8.11091 21.3849L21.5459 7.94986C21.9364 7.55934 21.9364 6.92617 21.5459 6.53565L17.3029 2.29265C16.9124 1.90212 16.2792 1.90212 15.8887 2.29265ZM16.595 4.41306L19.424 7.24206L17.3102 9.3559L14.4812 6.5269L16.595 4.41306ZM13.0669 7.94111L4.16 16.8481V19.6771H6.989L15.8959 10.7701L13.0669 7.94111Z"
      fill={props.color}
    />
  </svg>
);

EditIcon.defaultProps = {
  color: 'var(--main-font-color)',
};

export default EditIcon;
