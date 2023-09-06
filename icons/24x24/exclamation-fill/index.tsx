import React from 'react';

interface IIcon {
  className?: string;
  color?: string;
}

const ExclamationFillIcon: React.FunctionComponent<IIcon> = (props: IIcon) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      
      
      d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM12 6C12.5128 6 12.9355 6.38604 12.9933 6.88338L13 7V12C13 12.5523 12.5523 13 12 13C11.4872 13 11.0645 12.614 11.0067 12.1166L11 12V7C11 6.44772 11.4477 6 12 6ZM13 15V17H11V15H13Z"
      fill={props.color}
    />
  </svg>
);

ExclamationFillIcon.defaultProps = {
  color: '#ffffff',
};

export default ExclamationFillIcon;
