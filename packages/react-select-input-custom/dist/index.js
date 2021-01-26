Object.defineProperty(exports, '__esModule', { value: true });

var chroma = require('chroma-js');
var React = require('react');
var Select = require('react-select');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var chroma__default = /*#__PURE__*/_interopDefaultLegacy(chroma);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var ReactSelectInputCustom = function (props) {
    var _a, _b;
    var _c = React.useState(null), customInputValue = _c[0], setCustomInputValue = _c[1];
    var activeElement = {};
    var isSimplefilter = true;
    var options = props.elements.map(function (element) {
        if (typeof element === 'object') {
            isSimplefilter = false;
            var arrElementMapped = Object.entries(element).map(function (subElement) { return ({
                label: subElement[1],
                value: subElement[0],
            }); });
            if (arrElementMapped && arrElementMapped.length > 0) {
                var elementMapped = arrElementMapped[0];
                return { label: elementMapped.label, value: elementMapped.value, name: props.name };
            }
        }
        return { label: element, value: element, name: props.name };
    });
    if (((_a = props === null || props === void 0 ? void 0 : props.activeElement) === null || _a === void 0 ? void 0 : _a.length) && typeof props.activeElement === 'object' && ((_b = props === null || props === void 0 ? void 0 : props.activeElement) === null || _b === void 0 ? void 0 : _b.length) > 0) {
        isSimplefilter = false;
    }
    if (isSimplefilter) {
        if (props.isMulti) {
            activeElement = [{ label: props.activeElement, value: props.activeElement, name: props.name }];
        }
        else {
            activeElement = { label: props.activeElement, value: props.activeElement, name: props.name };
        }
    }
    else if (typeof props.activeElement === 'object') {
        activeElement = options.filter(function (option) {
            return props.activeElement.find(function (activeElement) { return activeElement === option.value; });
        });
    }
    else {
        var arrActiveElement = options.filter(function (option) { return option.value === props.activeElement; });
        if (arrActiveElement && arrActiveElement.length > 0) {
            activeElement = arrActiveElement[0];
        }
    }
    var dataColor = props.fontColor;
    var dot = function (color) {
        if (color === void 0) { color = '#ccc'; }
        return ({
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
    };
    var calculateColor = function (isDisabled, isSelected, color) {
        return isDisabled ? '#ccc' : isSelected ? (chroma__default['default'].contrast(color, 'white') > 2 ? 'white' : 'black') : dataColor;
    };
    var colourStyles = {
        control: function (styles) { return (__assign(__assign({}, styles), { minHeight: '35px', backgroundColor: 'white' })); },
        option: function (styles, _a) {
            var isDisabled = _a.isDisabled, isFocused = _a.isFocused, isSelected = _a.isSelected;
            var color = chroma__default['default'](dataColor);
            return __assign(__assign({}, styles), { backgroundColor: isDisabled ? null : isSelected ? dataColor : isFocused ? color.alpha(0.1).css() : null, color: calculateColor(isDisabled, isSelected, color), cursor: isDisabled ? 'not-allowed' : 'default' });
        },
        input: function (styles) { return (__assign(__assign(__assign({}, styles), { height: '20px' }), dot())); },
        placeholder: function (styles) { return (__assign(__assign({}, styles), dot())); },
        singleValue: function (styles) { return (__assign(__assign({}, styles), dot((props.activeElement && props.activeElement.length && props.activeElement.length > 0) || props.activeElement
            ? dataColor
            : 'red'))); },
    };
    var selectChangeHandler = function (data) {
        var dataValues;
        if (data) {
            if (data.length) {
                if (data.length > 0) {
                    dataValues = {
                        name: props.name,
                        value: data && data.length && data.map(function (dataElement) { return dataElement.value; }),
                    };
                }
                else {
                    dataValues = {
                        name: props.name,
                        value: [],
                    };
                }
            }
            else {
                dataValues = { name: props.name, value: data.value };
            }
        }
        else {
            dataValues = props.isMulti ? { name: props.name, value: [] } : { name: props.name, value: null };
        }
        // @ts-ignore
        props.inputDataChangeHandler(dataValues);
    };
    var onInputChange = function (element) {
        // @ts-ignore
        setCustomInputValue({ label: element + " (new)", name: props.name, value: element });
    };
    // @ts-ignore
    var optionsParsed = (customInputValue === null || customInputValue === void 0 ? void 0 : customInputValue.value) > '' ? __spreadArrays(options, [customInputValue]) : options;
    return (React.createElement(React.Fragment, null,
        React.createElement(Select__default['default'], { id: props.id, className: props.className, dafaultValue: activeElement, value: activeElement, options: optionsParsed, onChange: selectChangeHandler, onInputChange: onInputChange, styles: colourStyles, isDisabled: props.disabled, isClearable: props.isClearable, isMulti: props.isMulti, closeMenuOnSelect: props.closeMenuOnSelect })));
};
ReactSelectInputCustom.defaultProps = {
    activeElement: '',
    closeMenuOnSelect: true,
    disabled: false,
    elements: [],
    error: false,
    inputDataChangeHandler: function () { },
    name: '',
    readOnly: false,
    fontColor: '#666666',
    isMulti: false,
    isClearable: true,
};

exports.default = ReactSelectInputCustom;
//# sourceMappingURL=index.js.map
