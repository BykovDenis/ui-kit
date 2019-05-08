"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _reactSelect = _interopRequireDefault(require("react-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ReactSelectCustom(props) {
  var activeElement = {};
  var isSimplefilter = true;
  var options = props.elements.map(function (element) {
    if (_typeof(element) === 'object') {
      isSimplefilter = false;
      var arrElementMapped = Object.entries(element).map(function (subElement) {
        return {
          label: subElement[1],
          value: subElement[0]
        };
      });

      if (arrElementMapped && arrElementMapped.length > 0) {
        var elementMapped = arrElementMapped[0];
        return {
          label: elementMapped.label,
          value: elementMapped.value,
          name: props.name
        };
      }
    }

    return {
      label: element,
      value: element,
      name: props.name
    };
  });

  if (isSimplefilter) {
    activeElement = {
      label: props.activeElement,
      value: props.activeElement
    };
  } else {
    var arrActiveElement = options.filter(function (option) {
      return option.value === props.activeElement;
    });

    if (arrActiveElement && arrActiveElement.length > 0) {
      activeElement = arrActiveElement[0];
    }
  }

  var dataColor = '#569627';

  var dot = function dot() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ccc';
    return {
      alignItems: 'center',
      display: 'flex',
      ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10
      }
    };
  };

  var calculateColor = function calculateColor(isDisabled, isSelected, color) {
    return isDisabled ? '#ccc' : isSelected ? _chromaJs["default"].contrast(color, 'white') > 2 ? 'white' : 'black' : dataColor;
  };

  var colourStyles = {
    control: function control(styles) {
      return _objectSpread({}, styles, {
        height: '35px',
        minHeight: '35px',
        backgroundColor: 'white'
      });
    },
    option: function option(styles, _ref) {
      var data = _ref.data,
          isDisabled = _ref.isDisabled,
          isFocused = _ref.isFocused,
          isSelected = _ref.isSelected;
      var color = (0, _chromaJs["default"])(dataColor);
      return _objectSpread({}, styles, {
        backgroundColor: isDisabled ? null : isSelected ? dataColor : isFocused ? color.alpha(0.1).css() : null,
        color: calculateColor(isDisabled, isSelected, color),
        cursor: isDisabled ? 'not-allowed' : 'default'
      });
    },
    input: function input(styles) {
      return _objectSpread({}, styles, {
        fontSize: '12px',
        height: '20px'
      }, dot());
    },
    placeholder: function placeholder(styles) {
      return _objectSpread({}, styles, dot());
    },
    singleValue: function singleValue(styles, _ref2) {
      var data = _ref2.data;
      return _objectSpread({}, styles, dot(props.activeElement ? dataColor : 'red'));
    }
  };
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_reactSelect["default"], {
    className: props.className,
    value: activeElement,
    options: options,
    onChange: props.inputDataChangeHandler,
    styles: colourStyles,
    isDisabled: props.disabled
  }));
}

ReactSelectCustom.defaultProps = {
  activeElement: '',
  disabled: false,
  elements: [],
  error: false,
  inputDataChangeHandler: function inputDataChangeHandler() {},
  name: '',
  readOnly: false
};
ReactSelectCustom.propTypes = {
  error: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  disabled: _propTypes["default"].bool,
  elements: _propTypes["default"].array,
  inputDataChangeHandler: _propTypes["default"].func,
  label: _propTypes["default"].object,
  name: _propTypes["default"].string,
  readOnly: _propTypes["default"].bool
};
var _default = ReactSelectCustom;
exports["default"] = _default;