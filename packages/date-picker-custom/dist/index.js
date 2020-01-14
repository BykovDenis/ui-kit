"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _pickers = require("@material-ui/pickers");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _moment = _interopRequireDefault(require("moment"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _ru = _interopRequireDefault(require("date-fns/locale/ru"));

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _styles = require("@material-ui/core/styles");

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IconButton = (0, _styles.withStyles)(function () {
  return {
    root: {
      margin: 0,
      padding: '0 !important',
      width: '34px',
      height: '34px'
    }
  };
})(_IconButton["default"]);
var FormControl = (0, _styles.withStyles)({
  root: {
    flexDirection: 'row !important'
  }
})(_FormControl["default"]);

var styles = function styles() {
  return {
    datePickerContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    container: {
      '& input': {
        width: '145px'
      },
      '& label+div': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      '& button': {
        height: 'auto',
        width: 'auto',
        position: 'relative'
      },
      '& label': {
        paddingBottom: '5px'
      },
      '& p': {
        position: 'absolute',
        top: '100%'
      }
    }
  };
};

var fromDateUtc = function fromDateUtc(date) {
  return date ? _moment["default"].parseZone(date).utc(true) : '';
};

function DatePickerCustom(props) {
  var _cn;

  var localeMap = {
    en: _enUS["default"],
    ru: _ru["default"]
  };
  var datePickerRef = (0, _react.useRef)();
  var label = props.label,
      value = props.value,
      classes = props.classes,
      disabled = props.disabled;

  var datePickerChangeHandler = function datePickerChangeHandler(newDate) {
    var newDateValue = newDate ? fromDateUtc(newDate).format('DD.MM.YYYY') : null;
    props.datePickerChangeHandler(props.name, newDateValue);
  };

  var datePickerCleanHandler = function datePickerCleanHandler() {
    setTimeout(function () {
      datePickerRef.current.querySelector('input').value = null;
    }, 0);
    datePickerChangeHandler(null);
  };

  var containerStyles = (0, _classnames["default"])((_cn = {}, _defineProperty(_cn, classes.datePickerContainer, true), _defineProperty(_cn, props.className, true), _cn));
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(FormControl, {
    className: containerStyles,
    disabled: disabled
  }, _react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _dateFns["default"],
    locale: localeMap[props.locale]
  }, _react["default"].createElement(_pickers.KeyboardDatePicker, {
    clearable: props.clearable,
    animateYearScrolling: true,
    allowKeyboardControl: true,
    error: props.error,
    autoOk: true,
    ampm: false,
    className: classes.container,
    disableopenonenter: disabled.toString(),
    disablePast: disabled,
    disableFuture: disabled,
    format: "dd.MM.yyyy",
    placeholder: props.locale === 'en' ? 'DD.MM.YYYY' : 'ДД.ММ.ГГГГ',
    invalidDateMessage: props.invalidDateMessage,
    InputProps: {
      readOnly: disabled,
      disabled: disabled,
      ref: datePickerRef
    },
    label: label,
    value: value,
    maxDate: props.maxDate,
    minDate: props.minDate,
    minDateMessage: props.minDateMessage,
    maxDateMessage: props.maxDateMessage,
    onChange: function onChange(newDate) {
      return datePickerChangeHandler(newDate);
    },
    variant: "inline"
  })), _react["default"].createElement(IconButton, {
    color: "primary",
    onClick: datePickerCleanHandler,
    disabled: !value
  }, _react["default"].createElement(_Clear["default"], null))));
}

DatePickerCustom.defaultProps = {
  datePickerChangeHandler: function datePickerChangeHandler() {},
  datePickerInputChangeHandler: function datePickerInputChangeHandler() {},
  disabled: false,
  error: false,
  maxDate: '2099-12-31',
  minDate: '1900-01-01',
  minDateMessage: '',
  maxDateMessage: '',
  locale: 'ru',
  clearable: 'true'
};
DatePickerCustom.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  clearable: _propTypes["default"].string,
  datePickerChangeHandler: _propTypes["default"].func,
  datePickerInputChangeHandler: _propTypes["default"].func,
  error: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  intl: _propTypes["default"].object,
  label: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]).isRequired,
  invalidDateMessage: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  maxDate: _propTypes["default"].string,
  minDate: _propTypes["default"].string,
  minDateMessage: _propTypes["default"].string,
  maxDateMessage: _propTypes["default"].string,
  name: _propTypes["default"].string,
  value: _propTypes["default"].string
};

var _default = (0, _styles.withStyles)(styles)(DatePickerCustom);

exports["default"] = _default;