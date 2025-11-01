import TMultiSelect from '../types/tmulti-select';
import TMultiSelectOption from '../types/tmulti-select-option';
import MultiSelectVariant from '../enums/multi-select-variant';
import type {FunctionComponent} from 'react';

declare const MultiSelect: FunctionComponent<TMultiSelect>;
export default MultiSelect;
export {TMultiSelectOption, MultiSelectVariant};
