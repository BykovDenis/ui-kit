import React from 'react';
import TMultiSelect from '../types/tmulti-select';
import MultiSelectString from './multi-select-string';
import MultiSelectObjects from './multi-select-objects';
import TMultiSelectObjects from "../types/tmulti-select-objects";

const MultiSelect: React.FunctionComponent<TMultiSelect | TMultiSelectObjects> = (props: TMultiSelect | TMultiSelectObjects) => {
  if (props?.elementNames?.length > 0) {
    if (typeof props?.elementNames[0] === 'string') {
      // the typeof check above is the real discriminant, but TS can't narrow
      // a TMultiSelect | TMultiSelectObjects union through it
      // @ts-ignore-next-line
      return <MultiSelectString {...props} />;
    }
    // @ts-ignore-next-line
    return <MultiSelectObjects {...props} />;
  }
  return null;
};

export default MultiSelect;
