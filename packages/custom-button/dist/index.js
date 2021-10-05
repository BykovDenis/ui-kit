Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var Button = function (props) { return (React.createElement("div", null,
    React.createElement("button", { type: props.type, className: "button", onClick: props.onClick }, props.children))); };
Button.defaultProps = {
    type: 'button',
};

exports.default = Button;
//# sourceMappingURL=index.js.map
