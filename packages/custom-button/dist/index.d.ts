import React from 'react';
interface IButton {
    type?: 'submit' | 'reset' | 'button';
    children: any;
    onClick?: () => void;
}
declare const Button: React.FunctionComponent<IButton>;
export default Button;
