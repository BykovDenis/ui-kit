"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Today = _interopRequireDefault(require("@material-ui/icons/Today"));

var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _materialUiPickers = require("material-ui-pickers");

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/ru");

var _moment2 = _interopRequireDefault(require("@date-io/moment"));

var _datetime = _interopRequireDefault(require("../../common/datetime"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

// moment.locale('ru');
var styles = function styles() {
  return {
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
        /* TODO IE 11
        top: '-7px',
        '&:hover': {
        top: '-7px',
        },
        */

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

function DatePickerCustom(props) {
  var localeMap = {
    en: 'en',
    ru: 'ru'
  };

  var datePickerChangeHandler = function datePickerChangeHandler(name, newDate) {
    var newDateValue = newDate ? _datetime["default"].fromDateUtc(newDate) : '';
    props.datePickerChangeHandler(name, newDateValue);
  };

  var datePickerInputChangeHandler = function datePickerInputChangeHandler(name, newDate) {
    props.datePickerInputChangeHandler(name, _datetime["default"].strFormatForDatePicker(newDate || '2019-01-01'));
  };

  var name = props.name,
      label = props.label,
      value = props.value,
      classes = props.classes,
      disabled = props.disabled;
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_FormControl["default"], {
    className: props.className,
    disabled: disabled
  }, _react["default"].createElement(_materialUiPickers.MuiPickersUtilsProvider, {
    utils: _moment2["default"],
    moment: _moment["default"],
    locale: localeMap[props.intl.locale]
  }, _react["default"].createElement(_materialUiPickers.DatePicker, {
    keyboard: true,
    keyboardIcon: _react["default"].createElement(_Today["default"], null),
    className: classes.container,
    mask: function mask(value) {
      return value ? [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/] : [];
    },
    format: "YYYY.MM.DD",
    placeholder: "YYYY.MM.DD",
    label: label,
    value: value,
    onChange: function onChange(newDate) {
      return datePickerChangeHandler(name, newDate);
    },
    disableOpenOnEnter: disabled,
    disablePast: disabled,
    disableFuture: disabled,
    animateYearScrolling: false,
    leftArrowIcon: _react["default"].createElement(_ChevronLeft["default"], null),
    rightArrowIcon: _react["default"].createElement(_ChevronRight["default"], null),
    maxDate: props.maxDate,
    minDate: props.minDate,
    minDateMessage: props.minDateMessage,
    maxDateMessage: props.maxDateMessage,
    error: props.error,
    invalidDateMessage: props.invalidDateMessage,
    invalidLabel: '',
    onInputChange: function onInputChange(e) {
      return datePickerInputChangeHandler(name, e.target.value);
    },
    InputProps: {
      readOnly: disabled,
      disabled: disabled
    }
  }))));
}

DatePickerCustom.defaultProps = {
  datePickerChangeHandler: function datePickerChangeHandler() {},
  datePickerInputChangeHandler: function datePickerInputChangeHandler() {},
  disabled: false,
  error: false,
  invalidDateMessage: '  ',
  label: {},
  maxDate: '2099-12-31',
  minDate: '1900-01-01',
  minDateMessage: '',
  maxDateMessage: ''
};
DatePickerCustom.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  datePickerChangeHandler: _propTypes["default"].func,
  datePickerInputChangeHandler: _propTypes["default"].func,
  error: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  intl: _propTypes["default"].object,
  label: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
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