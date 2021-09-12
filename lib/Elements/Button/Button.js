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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { classNames } from '../../helpers/methods';
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["small"] = "px-2.5 py-1.5 text-xs";
    ButtonSize["medium"] = "px-3 py-2 text-sm leading-4";
    ButtonSize["large"] = "px-4 py-2 text-sm";
    ButtonSize["xl"] = "px-4 py-2 text-base";
    ButtonSize["xxl"] = "px-6 py-3 text-base";
})(ButtonSize || (ButtonSize = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType["primary"] = "border border-transparent shadow-sm text-white bg-primary-600 hover:bg-primary-700";
    ButtonType["secondary"] = "border border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200";
    ButtonType["outline"] = "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50";
    ButtonType["transparent"] = "text-gray-700";
})(ButtonType || (ButtonType = {}));
var ButtonShape;
(function (ButtonShape) {
    ButtonShape["default"] = "rounded rounded-md";
    ButtonShape["round"] = "rounded-full";
    ButtonShape["circular"] = "rounded-full p-2";
})(ButtonShape || (ButtonShape = {}));
var focus = 'focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500';
var defaultFocus = ' focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500';
var InlineButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.title, title = _c === void 0 ? 'start your 14-day free trial' : _c, _d = _a.href, href = _d === void 0 ? null : _d, _e = _a.to, to = _e === void 0 ? null : _e, children = _a.children;
    var button = null;
    if (href) {
        button = (_jsx("a", __assign({ href: href, className: classNames(className, 'font-medium text-primary-600 hover:text-primary-500') }, { children: children !== null && children !== void 0 ? children : title }), void 0));
    }
    else if (to) {
        button = (_jsx(Link, __assign({ to: to, className: classNames(className, 'font-medium text-primary-600 hover:text-primary-500') }, { children: children !== null && children !== void 0 ? children : title }), void 0));
    }
    return button;
};
var ButtonComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'flex justify-center font-medium' : _b, title = _a.title, _c = _a.size, size = _c === void 0 ? ButtonSize.large : _c, _d = _a.shape, shape = _d === void 0 ? ButtonShape.default : _d, _e = _a.buttonType, buttonType = _e === void 0 ? ButtonType.primary : _e, children = _a.children, _f = _a.onClick, onClick = _f === void 0 ? function () {
        console.log('item clicked');
    } : _f, _g = _a.onMouseEnter, onMouseEnter = _g === void 0 ? function () {
        console.log('mouse entered item');
    } : _g, _h = _a.onMouseLeave, onMouseLeave = _h === void 0 ? function () {
        console.log('mouse leaved item');
    } : _h, props = __rest(_a, ["className", "title", "size", "shape", "buttonType", "children", "onClick", "onMouseEnter", "onMouseLeave"]);
    var names = buttonType === ButtonType.transparent
        ? [buttonType, focus, className]
        : __spreadArray(__spreadArray([], (shape !== ButtonShape.circular
            ? [size, shape, buttonType]
            : [shape, buttonType]), true), [
            defaultFocus,
            className,
        ], false);
    return (_jsx("button", __assign({ className: classNames.apply(void 0, names), onClick: function () {
            onClick();
        }, onMouseEnter: function () {
            onMouseEnter();
        }, onMouseLeave: function () {
            onMouseLeave();
        } }, props, { children: title !== null && title !== void 0 ? title : children }), void 0));
};
export var Button = Object.assign(ButtonComponent, {
    size: ButtonSize,
    buttonType: ButtonType,
    shape: ButtonShape,
    focus: focus,
    Inline: InlineButton,
});
export default Button;
