import React, { useEffect, useState } from 'react';

import ITheme from '../../styles/types/itheme';
import FormSwitcher from './form-switcher';
import InputSwitcher from './input-switcher';
import LabelSwitcher from './label-switcher';
import TSwitcher from '../types/tswitcher';

const Switcher: React.FunctionComponent<TSwitcher> = (props: TSwitcher) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [disabled, setDisabled] = useState<boolean>(props?.disabled !== undefined ? props.disabled : false);

  useEffect(() => {
    if (props?.disabled !== undefined) {
      setDisabled(props.disabled);
    }
  }, [props.disabled]);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);
  const { element1, element2, activeElement } = props;
  const isActiveFirstElement = element1 === activeElement;
  const isActiveSecondElement = element2 === activeElement;

  const checkboxChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    const { dataset, checked } = element;
    const datasetName = dataset.name;
    if (checked) {
      props.onSwitcherChange(datasetName);
    }
  };

  const componentThemed = (theme: ITheme) => {
    const color: string = theme?.palette?.baseButtonFontColor;
    const backgroundColor: string = disabled ? theme.inactiveBackgroundColor : theme?.palette?.primary?.main;
    const inactiveBackgroundColor: string = theme?.mainBackgroundColor;
    const inactiveColor: string = theme?.palette.baseFontColor;

    return (
      <FormSwitcher
        method="get"
        backgroundColor={disabled ? theme.inactiveBackgroundColor : props?.backgroundColor ?? theme.mainBackgroundColor}
        borderColor={theme.mainOutlinedColor}
      >
        <InputSwitcher
          name="custom-switcher"
          data-name={props.element1}
          id={`custom-switcher-element1-${props.element1}`}
          type="radio"
          checked={isActiveFirstElement}
          onChange={checkboxChangeHandler}
          disabled={disabled}
          position="left"
          color={color}
          backgroundColor={backgroundColor}
          inactiveBackgroundColor={inactiveBackgroundColor}
          inactiveColor={inactiveColor}
        />
        <LabelSwitcher
          htmlFor={`custom-switcher-element1-${props.element1}`}
          fontSize={props?.fontSize ?? theme.baseFontSize}
          fontFamily={theme.fontFamily}
          color={props?.color || theme.palette.baseFontColor}
          height={props?.height}
        >
          {props.element1}
        </LabelSwitcher>
        <InputSwitcher
          name="custom-switcher"
          data-name={props.element2}
          id={`custom-switcher-element2-${props.element2}`}
          type="radio"
          checked={isActiveSecondElement}
          onChange={checkboxChangeHandler}
          disabled={disabled}
          position="right"
          color={color}
          backgroundColor={backgroundColor}
          inactiveBackgroundColor={inactiveBackgroundColor}
          inactiveColor={inactiveColor}
        />
        <LabelSwitcher
          htmlFor={`custom-switcher-element2-${props.element2}`}
          fontFamily={theme.fontFamily}
          color={props?.color || theme.palette.baseFontColor}
          fontSize={props?.fontSize ?? theme.baseFontSize}
          height={props?.height}
        >
          {props.element2}
        </LabelSwitcher>
      </FormSwitcher>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(Switcher);
