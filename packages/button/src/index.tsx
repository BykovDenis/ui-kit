import React, { Fragment } from 'react';

import styles from './index.module.scss';

interface IButton {
  children: any;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FunctionComponent<IButton> = (props: IButton) => {
  const onButtonClick = () => {
    props?.onClick && props?.onClick();
  };
  return (
    <Fragment>
      <button type={props.type} className={styles.button} onClick={onButtonClick} disabled={props?.disabled}>
        {props.children}
      </button>
    </Fragment>
  );
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
