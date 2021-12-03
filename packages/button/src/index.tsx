import './index.scss';

import React, { Fragment } from 'react';

interface IButton {
  children: any;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FunctionComponent<IButton> = (props: IButton) => {
  const onButtonClick = () => {
    props?.onClick && props?.onClick();
  };
  return (
    <Fragment>
      <div>
        <button type={props.type} className="button" onClick={onButtonClick}>
          {props.children}
        </button>
      </div>
      <br />
      <div>
        <button type={props.type} className="button" onClick={onButtonClick} disabled>
          {props.children}
        </button>
      </div>
    </Fragment>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
