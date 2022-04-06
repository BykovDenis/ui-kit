import React from 'react';
import ThemeContext from '../../styles/src/themes';
import ButtonStyled from '../src/button.styled';

const Button1 = (props: any) => {
  const componentThemed = (theme: any) => <button {...props}>123</button>;

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default Button1;
