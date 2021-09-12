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
import { classNames } from '../..';
var PageHeadingComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'bg-white px-8 py-8' : _b, _c = _a.title, title = _c === void 0 ? 'Back End Developer' : _c, _d = _a.meta, meta = _d === void 0 ? undefined : _d, _e = _a.back, back = _e === void 0 ? undefined : _e, _f = _a.breadcrumb, breadcrumb = _f === void 0 ? undefined : _f, _g = _a.actions, actions = _g === void 0 ? undefined : _g;
    return (_jsxs("div", __assign({ className: classNames(className) }, { children: [back, breadcrumb, _jsxs("div", __assign({ className: classNames(breadcrumb ? 'mt-2' : '', 'md:flex md:items-center md:justify-between md:space-x-5') }, { children: [typeof title === 'string' ? (_jsxs("div", __assign({ className: "flex-1 min-w-0" }, { children: [_jsx("h2", __assign({ className: "text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate" }, { children: title }), void 0), _jsx("div", __assign({ className: "mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6" }, { children: meta }), void 0)] }), void 0)) : (title), _jsx("div", __assign({ className: "mt-4 flex md:mt-0 md:ml-4" }, { children: actions }), void 0)] }), void 0)] }), void 0));
};
export var PageHeading = Object.assign(PageHeadingComponent, {});
export default PageHeading;
