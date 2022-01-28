import React from 'react';
import NumberFormat from 'react-number-format';

import INumberFormatCustom from '../types/inumber-format-custom';

interface IValues {
  floatValue: number;
  formattedValue: string;
  value: string;
}

const NumberFormatCustom: React.FunctionComponent<INumberFormatCustom> = (props: INumberFormatCustom) => {
  const { inputRef, onChange, ...other } = props;

  const onChangeValue = (values: IValues) => {
    onChange({
      target: {
        name: props.name,
        value: values.value,
      },
    });
  };

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={onChangeValue}
      thousandSeparator=" "
      isNumericString={true}
    />
  );
};

export default NumberFormatCustom;
