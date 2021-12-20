import React from 'react';

import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import CheckboxStyled from './checkbox';
import FormControl from './form-control';
import ICheckbox from './icheckbox';
import Label from './label';

const Checkbox: React.FunctionComponent<ICheckbox> = (props: any) => {
  const Component = ({ theme }: { theme: ITheme }) => (
    <FormControl>
      <CheckboxStyled
        {...props}
        name={props.name}
        id={props.id}
        disabled={props?.disabled}
        color={theme?.palette?.baseFontColor}
        backgroundColor={theme?.palette?.secondary?.main}
        checked={props.checked}
        onClick={props.onClick}
      />
      {props?.label && (
        <Label
          htmlFor={props.id}
          color={theme?.palette?.baseFontColor}
          fontSize={props.fontSize ?? theme?.baseFontSize}
          fontFamily={theme?.fontFamily}
        >
          {props?.label}
        </Label>
      )}
    </FormControl>
  );

  return props.ReactThemeContext ? (
    <props.ReactThemeContext.Consumer>
      {(theme: ITheme) => <Component theme={theme} />}
    </props.ReactThemeContext.Consumer>
  ) : (
    <ThemeContext.Consumer>{(theme: ITheme) => <Component theme={theme} />}</ThemeContext.Consumer>
  );
};

export default Checkbox;
