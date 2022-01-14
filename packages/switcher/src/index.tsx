import React from 'react';

import ThemeContext from '../../styles/src/themes';
import FormSwitcher from './form-switcher';
import InputSwitcher from './input-switcher';
import LabelSwitcher from './label-switcher';

interface ISwitcher {
  ReactThemeContext?: any;
  activeElement?: string;
  backgroundColor?: string;
  classes?: any;
  color?: string;
  disabled?: boolean;
  element1: string;
  element2: string;
  onSwitcherChange?: (datasetName: string) => void;
}

const Switcher: React.FunctionComponent<ISwitcher> = (props: ISwitcher) => {
  const { element1, element2, activeElement, disabled } = props;
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

  const SwitcherComponent = (props: ISwitcher) => (
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
      />
      <LabelSwitcher htmlFor={`custom-switcher-element2-${props.element2}`}>{props.element2}</LabelSwitcher>
    </FormSwitcher>
  );

  return props.ReactThemeContext ? (
    <props.ReactThemeContext.Consumer>
      {(theme: any) => (
        <SwitcherComponent
          {...props}
          color={theme?.palette?.baseButtonFontColor}
          backgroundColor={theme?.palette?.primary?.main}
        />
      )}
    </props.ReactThemeContext.Consumer>
  ) : (
    <ThemeContext.Consumer>
      {(theme: any) => (
        <SwitcherComponent
          {...props}
          color={theme?.palette?.baseButtonFontColor}
          backgroundColor={theme?.palette?.primary?.main}
        />
      )}
    </ThemeContext.Consumer>
  );
};

Switcher.defaultProps = {
  disabled: false,
};

export default React.memo(Switcher);
