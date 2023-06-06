import React, { useEffect, useState } from 'react';

import Label from '../../label/src';
import ICheckbox from '../types/icheckbox';
import CheckboxStyled from './checkbox.styled';
import FormControl from './form-control.styled';
import getCssVariables from '../../styles/src/get-css-variables'

const Checkbox: React.FunctionComponent<ICheckbox> = (props: ICheckbox) => {
  const [ cssVariables, setCssVariables ] = useState<{[key: string]: string}>({})

  useEffect(() => {
    setCssVariables(getCssVariables());
  }, []);

  return (<FormControl isExistLabel={props?.label > '' && props?.label !== null}>
      <CheckboxStyled
        {...props}
        name={props.name}
        id={props.id}
        disabled={props?.disabled}
        checked={props.checked}
        onChange={props.onChange}
        indeterminate={props.indeterminate}
        isIconDisabled={props.isIconDisabled}
      />
      <Label
        htmlFor={props.id}
        tabIndex={props?.tabIndex}
        focusColor={cssVariables.primaryMainColor}
        className={props?.className}
        width="initial"
      >
        {props?.label}
      </Label>
    </FormControl>
  );
};

export default React.memo(Checkbox);
