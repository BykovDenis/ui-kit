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
      <button type={props.type} className="button" onClick={onButtonClick}>
        {props.children}
      </button>
    </Fragment>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
