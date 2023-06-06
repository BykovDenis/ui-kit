import React, {useEffect, useState} from 'react';

import FormSwitcher from './form-switcher';
import InputSwitcher from './input-switcher';
import LabelSwitcher from './label-switcher';
import ISwitcher from '../types/iswitcher';
import getCssVariables from '../../styles/src/get-css-variables';

const Switcher: React.FunctionComponent<ISwitcher> = (props: ISwitcher) => {
  const [disabled, setDisabled] = useState<boolean>(props?.disabled !== undefined ? props.disabled : false);
  const cssVariables: any = getCssVariables();
  const { element1, element2, activeElement } = props;
  const isActiveFirstElement = element1 === activeElement;
  const isActiveSecondElement = element2 === activeElement;

  useEffect(() => {
    setDisabled(props.disabled);
  }, [props.disabled])

  const checkboxChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt.target;
    const { dataset, checked } = element;
    const datasetName = dataset.name;
    if (checked) {
      props.onSwitcherChange(datasetName);
    }
  };

  const color: string = cssVariables.baseButtonFontColor;
  const backgroundColor: string = cssVariables.primaryMainColor;
  const inactiveBackgroundColor: string = cssVariables.backgroundColor;
  const inactiveColor: string = cssVariables.baseFontColor;

  return (
    <FormSwitcher method="get">
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
      <LabelSwitcher htmlFor={`custom-switcher-element1-${props.element1}`}>{props.element1}</LabelSwitcher>
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
      <LabelSwitcher htmlFor={`custom-switcher-element2-${props.element2}`}>{props.element2}</LabelSwitcher>
    </FormSwitcher>
  );
};

export default React.memo(Switcher);
