import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ITheme from '../../styles/types/itheme';
import FormSwitcher from './form-switcher';
import InputSwitcher from './input-switcher';
import LabelSwitcher from './label-switcher';
import TSwitcher from '../types/tswitcher';
import ColorTheme from '../../enums/color-theme';
import { useTheme } from '@dbykov-ui-kit/styles';

const Switcher: React.FunctionComponent<TSwitcher> = (props: TSwitcher) => {
  const theme = useTheme();
  // plain derived values: the useState copies froze the initial prop and
  // needed sync effects (or silently ignored prop updates) to stay current
  const disabled: boolean = props?.disabled !== undefined ? props.disabled : false;
  const colorTheme: string = props?.colorTheme || ColorTheme.Normal;
  const error: boolean = props?.error !== undefined ? props.error : false;
  const [id1] = useState<string>(`${props.id}-${uuidv4()}`);
  const [id2] = useState<string>(`${props.id}-${uuidv4()}`);

  const { element1, element2, activeElement } = props;
  const isActiveFirstElement = element1 === activeElement;
  const isActiveSecondElement = element2 === activeElement;

  const checkboxChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.stopPropagation();
    const element = evt.target;
    const id: string | undefined = element?.dataset?.id;
    if (props.id === id) {
      const { dataset, checked } = element;
      const datasetName = dataset.name;
      if (checked && datasetName !== undefined) {
        props.onSwitcherChange?.(datasetName, props.name, evt);
      }
    }
  };

  const componentThemed = (theme: ITheme) => {
    const color: string = theme?.palette?.baseButtonFontColor;
    const backgroundColor: string = props.disabled
      ? theme.inactiveBackgroundColor
      : (colorTheme === ColorTheme.Normal && !error) || !colorTheme
      ? theme?.palette?.primary?.main
      : theme?.palette?.secondary?.main;
    const inactiveBackgroundColor: string = theme?.mainBackgroundColor;
    const inactiveColor: string = theme?.palette.baseFontColor;

    return (
      <FormSwitcher
        backgroundColor={disabled ? theme.inactiveBackgroundColor : props?.backgroundColor ?? theme.mainBackgroundColor}
        borderColor={theme.mainOutlinedColor}
        width={props?.width}
        height={props?.height}
      >
        <InputSwitcher
          name={`custom-switcher-${props.id}`}
          data-name={props.element1}
          data-id={props.id}
          id={id1}
          type="radio"
          checked={isActiveFirstElement}
          onChange={checkboxChangeHandler}
          disabled={disabled || props.readOnly}
          position="left"
          color={color}
          backgroundColor={backgroundColor}
          inactiveBackgroundColor={inactiveBackgroundColor}
          inactiveColor={inactiveColor}
          height={props?.height}
        />
        <LabelSwitcher
          htmlFor={id1}
          fontSize={props?.fontSize ?? theme.baseFontSize}
          fontFamily={theme.fontFamily}
          color={props?.color || theme.palette.baseFontColor}
          height={props?.height}
          data-label="element1"
        >
          {props.element1}
        </LabelSwitcher>
        <InputSwitcher
          name={`custom-switcher-${props.id}`}
          data-name={props.element2}
          data-id={props.id}
          id={id2}
          type="radio"
          checked={isActiveSecondElement}
          onChange={checkboxChangeHandler}
          disabled={disabled || props.readOnly}
          position="right"
          color={color}
          backgroundColor={backgroundColor}
          inactiveBackgroundColor={inactiveBackgroundColor}
          inactiveColor={inactiveColor}
          height={props?.height}
        />
        <LabelSwitcher
          htmlFor={id2}
          fontFamily={theme.fontFamily}
          color={props?.color || theme.palette.baseFontColor}
          fontSize={props?.fontSize ?? theme.baseFontSize}
          height={props?.height}
          data-label="element2"
        >
          {props.element2}
        </LabelSwitcher>
      </FormSwitcher>
    );
  };


  return componentThemed(theme);
};

export default Switcher;
