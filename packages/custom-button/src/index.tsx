import * as React from 'react';

interface Props {
  type?: 'submit' | 'reset' | 'button';
  children: any;
  onClick: () => void;
}

const Button: React.FunctionComponent<Props> = (props: Props) => (
  <div>
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  </div>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;
