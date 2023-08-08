import React from 'react';
import TMultiSelect from '../types/tmulti-select';
import MultiSelectString from './multi-select-string';
import MultiSelectObjects from './multi-select-objects';

const MultiSelect: React.FunctionComponent<TMultiSelect> = (props: TMultiSelect) => {
  if (props?.elementNames?.length > 0) {
    if (typeof props?.elementNames[0] === 'string') {
      return <MultiSelectString {...props} />;
    }
    return <MultiSelectObjects {...props} />;
  }
  return null;
};

export default React.memo(MultiSelect);
