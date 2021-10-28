Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = function (props) {
    var onButtonClick = function () {
        (props === null || props === void 0 ? void 0 : props.onClick) && (props === null || props === void 0 ? void 0 : props.onClick());
    };
    return (React__default['default'].createElement(React.Fragment, null,
        React__default['default'].createElement("button", { type: props.type, className: "button", onClick: onButtonClick }, props.children)));
};
Button.defaultProps = {
    type: 'button',
};

exports.default = Button;
//# sourceMappingURL=index.js.map
