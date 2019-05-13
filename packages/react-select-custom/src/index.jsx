import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import chroma from 'chroma-js';
import Select from 'react-select';

function ReactSelectCustom(props) {

  let activeElement = {};
  let isSimplefilter = true;
  const options = props.elements.map(element => {
    if (typeof element === 'object') {
      isSimplefilter = false;
      const arrElementMapped = Object.entries(element).map(subElement => ({
        label: subElement[1],
        value: subElement[0],
      }));
      if (arrElementMapped && arrElementMapped.length > 0) {
        const elementMapped = arrElementMapped[0];
        return { label: elementMapped.label, value: elementMapped.value, name: props.name };
      }
    }
    return { label: element, value: element, name: props.name };
  });

  if (isSimplefilter) {
    activeElement = { label: props.activeElement, value: props.activeElement };
  } else {
    const arrActiveElement = options.filter(option => option.value === props.activeElement);
    if (arrActiveElement && arrActiveElement.length > 0) {
      activeElement = arrActiveElement[0];
    }
  }
  const dataColor = props.fontColor;
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

  const calculateColor = (isDisabled, isSelected, color) => isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : dataColor;
  const colourStyles = {
    control: styles => ({ ...styles, height: '35px', minHeight: '35px', backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(dataColor);
      return {
        ...styles,
        backgroundColor: isDisabled ? null : isSelected ? dataColor : isFocused ? color.alpha(0.1).css() : null,
        color: calculateColor(isDisabled, isSelected, color),
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    input: styles => ({ ...styles, height: '20px', ...dot() }),
    placeholder: styles => ({ ...styles, ...dot() }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(props.activeElement ? dataColor : 'red') }),
  };

  return (
    <Fragment>
      <Select
        className={props.className}
        value={activeElement}
        options={options}
        onChange={props.inputDataChangeHandler}
        styles={colourStyles}
        isDisabled={props.disabled}
      />
    </Fragment>
  );
}

ReactSelectCustom.defaultProps = {
  activeElement: '',
  disabled: false,
  elements: [],
  error: false,
  inputDataChangeHandler: () => {},
  name: '',
  readOnly: false,
  fontColor: '#666666',
};

ReactSelectCustom.propTypes = {
  error: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  elements: PropTypes.array,
  inputDataChangeHandler: PropTypes.func,
  label: PropTypes.object,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  fontColor: PropTypes.string,
};

export default ReactSelectCustom;
