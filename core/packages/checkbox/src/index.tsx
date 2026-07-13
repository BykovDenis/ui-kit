import React from 'react';

import Label from '@dbykov-ui-kit/label';
import ITheme from '../../styles/types/itheme';
import CheckboxStyled from './checkbox.styled';
import FormControl from './form-control.styled';
import CheckboxProps from '../types/icheckbox';
import { useTheme } from '@dbykov-ui-kit/styles';

const Checkbox: React.FunctionComponent<CheckboxProps> = (props: CheckboxProps) => {
  const theme = useTheme();
  // plain derived value: the useState copy froze the initial prop and
  // needed a sync effect to stay current
  const error: boolean = props?.error !== undefined ? props.error : false;

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = props.disabled
      ? theme?.inactiveBackgroundColor
      : error
      ? theme?.palette?.secondary?.main
      : theme?.palette?.primary?.main;
    const borderColor: string = props.disabled
      ? theme?.inactiveBackgroundColor
      : props.borderColor || theme?.mainOutlinedColor;
    return (
      <FormControl isExistLabel={props?.label != null && (props.label as string) > ''}>
        <CheckboxStyled
          {...props}
          name={props.name}
          id={props.id}
          disabled={props?.disabled || props?.readOnly}
          color={theme?.palette?.baseFontColor}
          backgroundColor={backgroundColor}
          checked={props.checked}
          onChange={props.onChange}
          indeterminate={props.indeterminate}
          isIconDisabled={props.isIconDisabled}
          borderColor={borderColor}
          disabledColor={theme?.palette?.baseFontColor}
        />
        <Label
          htmlFor={props.id}
          color={theme?.palette?.baseFontColor}
          tabIndex={props?.tabIndex}
          fontSize={props.fontSize ?? theme?.baseFontSize}
          focusColor={theme?.palette?.primary?.main}
          fontFamily={theme?.fontFamily}
          className={props?.className}
          width="initial"
        >
          {props?.label}
        </Label>
      </FormControl>
    );
  };


  return componentThemed(theme);
};

export default Checkbox;
