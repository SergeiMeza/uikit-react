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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../helpers/methods';
var BadgeSize;
(function (BadgeSize) {
    BadgeSize["small"] = "inline-flex items-center px-1.5 py-0.5 text-xs font-medium";
    BadgeSize["large"] = "inline-flex items-center px-2 py-0.5 text-sm font-medium";
})(BadgeSize || (BadgeSize = {}));
var BadgeShape;
(function (BadgeShape) {
    BadgeShape["rounded"] = "rounded-full";
    BadgeShape["default"] = "rounded";
})(BadgeShape || (BadgeShape = {}));
var BadgeColor;
(function (BadgeColor) {
    BadgeColor["gray"] = "bg-gray-100 text-gray-800";
    BadgeColor["red"] = "bg-red-100 text-red-800";
    BadgeColor["yellow"] = "bg-yellow-100 text-yellow-800";
    BadgeColor["green"] = "bg-green-100 text-green-800";
    BadgeColor["blue"] = "bg-blue-100 text-blue-800";
    BadgeColor["indigo"] = "bg-indigo-100 text-indigo-800";
    BadgeColor["purple"] = "bg-purple-100 text-purple-800";
    BadgeColor["pink"] = "bg-pink-100 text-pink-800";
    BadgeColor["primary"] = "bg-primary-100 text-primary-800";
})(BadgeColor || (BadgeColor = {}));
var DotColor;
(function (DotColor) {
    DotColor["gray"] = "text-gray-400";
    DotColor["red"] = "text-red-400";
    DotColor["yellow"] = "text-yellow-400";
    DotColor["green"] = "text-green-400";
    DotColor["blue"] = "text-blue-400";
    DotColor["indigo"] = "text-indigo-400";
    DotColor["purple"] = "text-purple-400";
    DotColor["pink"] = "text-pink-400";
    DotColor["primary"] = "text-primary-400";
})(DotColor || (DotColor = {}));
var RemoveButtonColor;
(function (RemoveButtonColor) {
    RemoveButtonColor["gray"] = "text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500";
    RemoveButtonColor["red"] = "text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500";
    RemoveButtonColor["yellow"] = "text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500";
    RemoveButtonColor["green"] = "text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500";
    RemoveButtonColor["blue"] = "text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-500";
    RemoveButtonColor["indigo"] = "text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500";
    RemoveButtonColor["purple"] = "text-purple-400 hover:bg-purple-200 hover:text-purple-500 focus:bg-purple-500";
    RemoveButtonColor["pink"] = "text-pink-400 hover:bg-pink-200 hover:text-pink-500 focus:bg-pink-500";
    RemoveButtonColor["primary"] = "text-primary-400 hover:bg-primary-200 hover:text-primary-500 focus:bg-primary-500";
})(RemoveButtonColor || (RemoveButtonColor = {}));
var BadgeRemoveButtonComponent = function (_a) {
    var _b = _a.color, color = _b === void 0 ? RemoveButtonColor.green : _b, _c = _a.onClick, onClick = _c === void 0 ? function () {
        console.log('item was clicked');
    } : _c;
    return (_jsxs("button", __assign({ type: "button", className: classNames(color, 'flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none focus:text-white'), onClick: function (e) {
            e.preventDefault();
            onClick();
        } }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Remove small option" }), void 0), _jsx("svg", __assign({ className: "h-2 w-2", stroke: "currentColor", fill: "none", viewBox: "0 0 8 8" }, { children: _jsx("path", { strokeLinecap: "round", strokeWidth: "1.5", d: "M1 1l6 6m0-6L1 7" }, void 0) }), void 0)] }), void 0));
};
var BadgeRemoveButton = Object.assign(BadgeRemoveButtonComponent, {
    color: RemoveButtonColor,
});
var BadgeComponent = function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'Badge' : _b, _c = _a.size, size = _c === void 0 ? BadgeSize.large : _c, _d = _a.shape, shape = _d === void 0 ? BadgeShape.rounded : _d, _e = _a.color, color = _e === void 0 ? BadgeColor.primary : _e, _f = _a.dot, dot = _f === void 0 ? false : _f, _g = _a.dotColor, dotColor = _g === void 0 ? DotColor.primary : _g, _h = _a.removeButton, removeButton = _h === void 0 ? false : _h, _j = _a.removeButtonColor, removeButtonColor = _j === void 0 ? RemoveButtonColor.primary : _j, _k = _a.onRemoveButtonClick, onRemoveButtonClick = _k === void 0 ? function () {
        console.log('remove item');
    } : _k, children = _a.children;
    return (_jsxs("span", __assign({ className: classNames(size, shape, color) }, { children: [dot && (_jsx("svg", __assign({ className: classNames('-ml-0.5 mr-1.5 h-2 w-2', dotColor), fill: "currentColor", viewBox: "0 0 8 8" }, { children: _jsx("circle", { cx: 4, cy: 4, r: 3 }, void 0) }), void 0)), children !== null && children !== void 0 ? children : title, removeButton && (_jsx(BadgeRemoveButton, { color: removeButtonColor, onClick: onRemoveButtonClick }, void 0))] }), void 0));
};
export var Badge = Object.assign(BadgeComponent, {
    size: BadgeSize,
    shape: BadgeShape,
    color: BadgeColor,
    dotColot: DotColor,
    RemoveButton: BadgeRemoveButton,
});
export default Badge;
