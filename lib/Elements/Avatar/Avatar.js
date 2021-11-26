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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../helpers/methods';
var AvatarShape;
(function (AvatarShape) {
    AvatarShape["default"] = "rounded-md";
    AvatarShape["rounded"] = "rounded-full";
})(AvatarShape || (AvatarShape = {}));
var AvatarSize;
(function (AvatarSize) {
    AvatarSize["small"] = "h-6 w-6";
    AvatarSize["medium"] = "h-8 w-8";
    AvatarSize["large"] = "h-10 w-10";
    AvatarSize["xl"] = "h-12 w-12";
    AvatarSize["xxl"] = "h-14 w-14";
    AvatarSize["xxxl"] = "h-16 w-16";
})(AvatarSize || (AvatarSize = {}));
var NotificationBadgeSize;
(function (NotificationBadgeSize) {
    NotificationBadgeSize["small"] = "h-1.5 w-1.5";
    NotificationBadgeSize["medium"] = "h-2 w-2";
    NotificationBadgeSize["large"] = "h-2.5 w-2.5";
    NotificationBadgeSize["xl"] = "h-3 w-3";
    NotificationBadgeSize["xxl"] = "h-3.5 w-3.5";
    NotificationBadgeSize["xxxl"] = "h-4 w-4";
})(NotificationBadgeSize || (NotificationBadgeSize = {}));
var NotificationBadgeColor;
(function (NotificationBadgeColor) {
    NotificationBadgeColor["gray"] = "bg-gray-300";
    NotificationBadgeColor["red"] = "bg-red-300";
    NotificationBadgeColor["yellow"] = "bg-yellow-300";
    NotificationBadgeColor["green"] = "bg-green-300";
    NotificationBadgeColor["blue"] = "bg-blue-300";
    NotificationBadgeColor["indigo"] = "bg-indigo-300";
    NotificationBadgeColor["purple"] = "bg-purple-300";
    NotificationBadgeColor["pink"] = "bg-pink-300";
    NotificationBadgeColor["primary"] = "bg-primary-300";
})(NotificationBadgeColor || (NotificationBadgeColor = {}));
var NotificationBadgePosition;
(function (NotificationBadgePosition) {
    NotificationBadgePosition["top"] = "top-0 right-0";
    NotificationBadgePosition["bottom"] = "bottom-0 right-0";
})(NotificationBadgePosition || (NotificationBadgePosition = {}));
var AvatarComponent = function (_a) {
    var _b = _a.size, size = _b === void 0 ? AvatarSize.medium : _b, _c = _a.shape, shape = _c === void 0 ? AvatarShape.rounded : _c, _d = _a.notificationBadge, notificationBadge = _d === void 0 ? false : _d, _e = _a.notificationBadgeSize, notificationBadgeSize = _e === void 0 ? NotificationBadgeSize.medium : _e, _f = _a.notificationBadgeColor, notificationBadgeColor = _f === void 0 ? NotificationBadgeColor.primary : _f, _g = _a.notificationBadgePosition, notificationBadgePosition = _g === void 0 ? NotificationBadgePosition.top : _g, src = _a.src, _h = _a.onClick, onClick = _h === void 0 ? function () { } : _h, _j = _a.onMouseEnter, onMouseEnter = _j === void 0 ? function () { } : _j, _k = _a.onMouseLeave, onMouseLeave = _k === void 0 ? function () { } : _k;
    var topTransform = 'transform -translate-y-1/2 translate-x-1/2';
    var bottomTransform = 'transform translate-y-1/2 translate-x-1/2';
    return (_jsxs("span", __assign({ className: "inline-block relative", onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, { children: [src ? (_jsx("img", { className: classNames(size, shape, 'content-center object-cover'), src: src, alt: "" }, void 0)) : (_jsx("span", __assign({ className: classNames(size, shape, 'inline-block overflow-hidden bg-gray-100') }, { children: _jsx("svg", __assign({ className: "h-full w-full text-gray-300", fill: "currentColor", viewBox: "0 0 24 24" }, { children: _jsx("path", { d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" }, void 0) }), void 0) }), void 0)), notificationBadge && (_jsx("span", { className: classNames.apply(void 0, __spreadArray(__spreadArray([notificationBadgeSize,
                    notificationBadgeColor,
                    notificationBadgePosition], (shape === AvatarShape.rounded
                    ? []
                    : notificationBadgePosition === NotificationBadgePosition.top
                        ? [topTransform]
                        : [bottomTransform]), false), ['absolute block rounded-full ring-2 ring-white'], false)) }, void 0))] }), void 0));
};
export var Avatar = Object.assign(AvatarComponent, {
    size: AvatarSize,
    shape: AvatarShape,
    badgeSize: NotificationBadgeSize,
    badgeColor: NotificationBadgeColor,
    badgePosition: NotificationBadgePosition,
});
export default Avatar;
