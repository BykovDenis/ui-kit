import chroma from 'chroma-js';
import * as React from 'react';
import Select from 'react-select';

interface IOption {
  label?: string;
  name?: string;
  value?: string;
}

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

const ReactSelectInputCustom: React.FunctionComponent<Props> = (props: Props) => {
  const [customInputValue, setCustomInputValue] = React.useState(null);
  let activeElement: any = {};
  let isSimplefilter: boolean = true;
  const options = props.elements.map((element) => {
    if (typeof element === 'object') {
      isSimplefilter = false;
      const arrElementMapped = Object.entries(element).map((subElement) => ({
        label: subElement[1],
        value: subElement[0],
      }));
      if (arrElementMapped && arrElementMapped.length > 0) {
        const elementMapped: any = arrElementMapped[0];
        return { label: elementMapped.label, value: elementMapped.value, name: props.name };
      }
    }
    return { label: element, value: element, name: props.name };
  });

  if (props?.activeElement?.length && typeof props.activeElement === 'object' && props?.activeElement?.length > 0) {
    isSimplefilter = false;
  }
  if (isSimplefilter) {
    if (props.isMulti) {
      activeElement = [{ label: props.activeElement, value: props.activeElement, name: props.name }];
    } else {
      activeElement = { label: props.activeElement, value: props.activeElement, name: props.name };
    }
  } else if (typeof props.activeElement === 'object') {
    activeElement = options.filter((option: IOption) =>
      props.activeElement.find((activeElement: string) => activeElement === option.value)
    );
  } else {
    const arrActiveElement: any = options.filter((option: IOption) => option.value === props.activeElement);
    if (arrActiveElement && arrActiveElement.length > 0) {
      activeElement = arrActiveElement[0];
    }
  }

  const dataColor: any = props.fontColor;
  const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });

  const calculateColor = (isDisabled: boolean, isSelected: boolean, color: string) =>
    isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : dataColor;
  const colourStyles = {
    control: (styles: any) => ({ ...styles, minHeight: '35px', backgroundColor: 'white' }),
    option: (
      styles: any,
      {
        isDisabled,
        isFocused,
        isSelected,
      }: { isDisabled: boolean, isFocused: boolean, isSelected: boolean }
    ) => {
      const color: any = chroma(dataColor);
      return {
        ...styles,
        backgroundColor: isDisabled ? null : isSelected ? dataColor : isFocused ? color.alpha(0.1).css() : null,
        color: calculateColor(isDisabled, isSelected, color),
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    input: (styles: any) => ({ ...styles, height: '20px', ...dot() }),
    placeholder: (styles: any) => ({ ...styles, ...dot() }),
    singleValue: (styles: any,) => ({
      ...styles,
      ...dot(
        (props.activeElement && props.activeElement.length && props.activeElement.length > 0) || props.activeElement
          ? dataColor
          : 'red'
      ),
    }),
  };

  const selectChangeHandler = (data: any) => {
    let dataValues;
    if (data) {
      if (data.length) {
        if (data.length > 0) {
          dataValues = {
            name: props.name,
            value: data && data.length && data.map((dataElement: any) => dataElement.value),
          };
        } else {
          dataValues = {
            name: props.name,
            value: [],
          };
        }
      } else {
        dataValues = { name: props.name, value: data.value };
      }
    } else {
      dataValues = props.isMulti ? { name: props.name, value: [] } : { name: props.name, value: null };
    }
    // @ts-ignore
    props.inputDataChangeHandler(dataValues);
  };

  const onInputChange = (element: any) => {
    // @ts-ignore
    setCustomInputValue({ label: `${element} (new)`, name: props.name, value: element });
  };

  // @ts-ignore
  const optionsParsed = customInputValue?.value > '' ? [...options, customInputValue] : options;

  return (
    <React.Fragment>
      <Select
        id={props.id}
        className={props.className}
        dafaultValue={activeElement}
        value={activeElement}
        options={optionsParsed}
        onChange={selectChangeHandler}
        onInputChange={onInputChange}
        styles={colourStyles}
        isDisabled={props.disabled}
        isClearable={props.isClearable}
        isMulti={props.isMulti}
        closeMenuOnSelect={props.closeMenuOnSelect}
      />
    </React.Fragment>
  );
};

ReactSelectInputCustom.defaultProps = {
  activeElement: '',
  closeMenuOnSelect: true,
  disabled: false,
  elements: [],
  error: false,
  inputDataChangeHandler: () => {},
  name: '',
  readOnly: false,
  fontColor: '#666666',
  isMulti: false,
  isClearable: true,
};

export default ReactSelectInputCustom;
