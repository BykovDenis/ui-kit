"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Button Component', function () {
  it('renders without props', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    var button = wrapper.find('.button');
    expect(button.length).toBe(1);
  });
  it('renders without props', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null));
    var button = wrapper.find('.button');
    expect(button.length).toBe(1);
  });
  it('renders children when passed in', function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, _react["default"].createElement("p", {
      className: "child"
    }, "Some Child")));
    var child = wrapper.find('.child');
    expect(child.length).toBe(1);
  });
  it('handles onClick events', function () {
    var onClick = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onClick: onClick
    }));
    wrapper.find('button').simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
});