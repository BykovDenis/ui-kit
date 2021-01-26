import * as React from 'react';
interface Props {
    activeElement: any;
    id?: string;
    error?: boolean;
    className?: string;
    classes?: any;
    disabled?: boolean;
    elements: string[];
    inputDataChangeHandler?: (option: any) => void;
    label?: object;
    name: string;
    readOnly?: boolean;
    fontColor?: string;
    isMulti?: boolean;
    closeMenuOnSelect?: boolean;
    onInputChange?: (option: any) => void;
    isClearable?: boolean;
}
declare const ReactSelectInputCustom: React.FunctionComponent<Props>;
export default ReactSelectInputCustom;
