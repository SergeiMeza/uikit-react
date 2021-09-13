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
import { PlusSmIcon } from '@heroicons/react/solid';
import { classNames } from '../../helpers/methods';
import Button from '../../Elements/Button/Button';
var DividerContentPosition;
(function (DividerContentPosition) {
    DividerContentPosition["start"] = "justify-start";
    DividerContentPosition["center"] = "justify-center";
    DividerContentPosition["end"] = "justify-end";
})(DividerContentPosition || (DividerContentPosition = {}));
var DividerTitleSize;
(function (DividerTitleSize) {
    DividerTitleSize["small"] = "text-sm text-gray-500";
    DividerTitleSize["medium"] = "text-base font-medium text-gray-700";
    DividerTitleSize["large"] = "text-lg font-medium text-gray-900";
})(DividerTitleSize || (DividerTitleSize = {}));
var DividerText = function (_a) {
    var children = _a.children;
    return _jsx("span", __assign({ className: "px-2 bg-white text-sm text-gray-500" }, { children: children }), void 0);
};
var DividerButton = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (_jsx(Button, __assign({ className: "inline-flex items-center py-1.5 shadow-sm", buttonType: Button.buttonType.outline, shape: Button.shape.round, size: Button.size.medium }, props, { children: children !== null && children !== void 0 ? children : (_jsxs(_Fragment, { children: [_jsx(PlusSmIcon, { className: "-ml-1.5 mr-1 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0), _jsx("span", { children: "Button text" }, void 0)] }, void 0)) }), void 0));
};
var DividerComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, title = _a.title, _c = _a.titleSize, titleSize = _c === void 0 ? DividerTitleSize.small : _c, _d = _a.contentPosition, contentPosition = _d === void 0 ? DividerContentPosition.center : _d, children = _a.children;
    return (_jsxs("div", __assign({ className: classNames(className, 'relative') }, { children: [_jsx("div", __assign({ className: "absolute inset-0 flex items-center", "aria-hidden": "true" }, { children: _jsx("div", { className: "w-full border-t border-gray-300" }, void 0) }), void 0), _jsx("div", __assign({ className: classNames(contentPosition, 'relative flex') }, { children: children !== null && children !== void 0 ? children : (_jsx("span", __assign({ className: classNames(titleSize, 'px-2 bg-white') }, { children: title }), void 0)) }), void 0)] }), void 0));
};
export var Divider = Object.assign(DividerComponent, {
    Text: DividerText,
    Button: DividerButton,
    titleSize: DividerTitleSize,
    contentPosition: DividerContentPosition,
});
export default Divider;
