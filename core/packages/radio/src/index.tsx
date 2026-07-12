import React from 'react';

import Label from '@dbykov-ui-kit/label';
import ITheme from '../../styles/types/itheme';
import FormControl from './form-control.styled';
import RadioStyled from './radio.styled';
import RadioProps from '../types/radio-props';
import { useTheme } from '@dbykov-ui-kit/styles';

const Radio: React.FunctionComponent<RadioProps> = (props: RadioProps) => {
  const theme = useTheme();
  // plain derived value: the useState copy froze the initial prop and
  // needed a sync effect to stay current
  const error: boolean = props?.error !== undefined ? props.error : false;

  const componentThemed = (theme: ITheme) => {
    const backgroundColor: string = props.disabled
      ? theme?.inactiveBackgroundColor
      : error
      ? theme?.palette?.secondary?.main
      : theme?.palette?.primary?.main;
    const borderColor: string = props.disabled
      ? theme?.inactiveBackgroundColor
      : props?.borderColor || theme?.mainOutlinedColor;
    return (
      <FormControl isExistLabel={props?.label != null && (props.label as string) > ''}>
        <RadioStyled
          {...props}
          name={props.name}
          id={props.id}
          disabled={props?.disabled || props.readOnly}
          color={theme?.mainBackgroundColor}
          disabledColor={theme?.palette?.baseFontColor}
          backgroundColor={backgroundColor}
          checked={props.checked}
          onChange={props.onChange}
          isIconDisabled={props?.isIconDisabled}
          borderColor={borderColor}
        />
        <Label
          htmlFor={props.id}
          color={theme?.palette?.baseFontColor}
          fontSize={props.fontSize ?? theme?.baseFontSize}
          fontFamily={theme?.fontFamily}
          tabIndex={props?.tabIndex}
          focusColor={theme?.palette?.primary?.main}
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

export default Radio;
