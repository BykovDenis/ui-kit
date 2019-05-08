"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    container: {
      margin: 'auto',
      textAlign: 'center'
    },
    shapeError: {
      position: 'relative',
      margin: '20px auto',
      width: '60px',
      height: '60px',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '50%',
      filter: 'drop-shadow(0 2px 5px #000000)',
      '&:before': {
        position: 'absolute',
        content: '""',
        top: '50%',
        left: '50%',
        width: '70%',
        height: '3px',
        backgroundColor: '#ffffff',
        transformOrigin: 'center',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        filter: 'drop-shadow(2px 0 2px #000000)'
      },
      '&:after': {
        position: 'absolute',
        content: '""',
        top: '50%',
        left: '50%',
        width: '3px',
        height: '70%',
        backgroundColor: '#ffffff',
        transformOrigin: 'center',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        filter: 'drop-shadow(0 2px 2px #000000)'
      }
    }
  };
};

function ErrorComponent(props) {
  var classes = props.classes;
  return _react["default"].createElement("div", {
    className: classes.container
  }, "Error ", props.message, _react["default"].createElement("div", {
    className: classes.shapeError
  }));
}

ErrorComponent.propTypes = {
  message: _propTypes["default"].string,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number
};

var _default = (0, _styles.withStyles)(styles)(ErrorComponent);

exports["default"] = _default;