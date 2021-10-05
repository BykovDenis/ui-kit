import * as React from 'react';
interface Props {
    type?: 'submit' | 'reset' | 'button';
    children: any;
    onClick: () => void;
}
declare const Button: React.FunctionComponent<Props>;
export default Button;
