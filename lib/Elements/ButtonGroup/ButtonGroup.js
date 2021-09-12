var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../helpers/methods';
import Button from '../Button/Button';
var ButtonGroupComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.onMouseEnter, onMouseEnter = _c === void 0 ? function () {
        console.log('mouse entered item');
    } : _c, _d = _a.onMouseLeave, onMouseLeave = _d === void 0 ? function () {
        console.log('mouse leaved item');
    } : _d;
    return (_jsx("span", __assign({ className: classNames('relative z-0 inline-flex shadow-sm rounded-md', className), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, { children: children !== null && children !== void 0 ? children : (_jsxs(_Fragment, { children: [_jsx(LeftButton, {}, void 0), _jsx(MiddleButton, {}, void 0), _jsx(RightButton, {}, void 0)] }, void 0)) }), void 0));
};
var LeftButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsx(Button, __assign({ className: classNames(className, 'relative px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10'), buttonType: Button.buttonType.transparent }, props, { children: children !== null && children !== void 0 ? children : 'Years' }), void 0));
};
var MiddleButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsx(Button, __assign({ className: classNames(className, '-ml-px relative px-2 py-2 border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10'), buttonType: Button.buttonType.transparent }, props, { children: children !== null && children !== void 0 ? children : 'Months' }), void 0));
};
var RightButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (_jsx(Button, __assign({ className: classNames(className, '-ml-px relative px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10'), buttonType: Button.buttonType.transparent }, props, { children: children !== null && children !== void 0 ? children : 'Days' }), void 0));
};
export var ButtonGroup = Object.assign(ButtonGroupComponent, {
    LeftButton: LeftButton,
    MiddleButton: MiddleButton,
    RightButton: RightButton,
});
export default ButtonGroup;
