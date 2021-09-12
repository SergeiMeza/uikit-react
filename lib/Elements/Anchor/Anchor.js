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
import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { classNames } from '../..';
var AnchorComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.to, to = _c === void 0 ? undefined : _c, _d = _a.href, href = _d === void 0 ? undefined : _d, children = _a.children, props = __rest(_a, ["className", "to", "href", "children"]);
    var anchor = null;
    var baseClassName = 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500';
    if (to) {
        anchor = (_jsx(Link, __assign({ className: classNames(className, baseClassName), to: to }, props, { children: children }), void 0));
    }
    if (href) {
        anchor = (_jsx("a", __assign({ className: classNames(className, baseClassName), href: href }, props, { children: children }), void 0));
    }
    return anchor;
};
export var Anchor = Object.assign(AnchorComponent, {});
export default Anchor;
