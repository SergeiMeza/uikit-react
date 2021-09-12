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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';
var samplePages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
];
var BreadcrumbType;
(function (BreadcrumbType) {
    BreadcrumbType["containedBar"] = "containedBar";
    BreadcrumbType["fullWidthBar"] = "fullWidthBar";
    BreadcrumbType["simpleWithChevrons"] = "simpleWithChevrons";
    BreadcrumbType["simpleWithSlashes"] = "simpleWithSlashes";
})(BreadcrumbType || (BreadcrumbType = {}));
var BreadcrumbComponent = function (_a) {
    var _b = _a.type, type = _b === void 0 ? BreadcrumbType.fullWidthBar : _b, _c = _a.pages, pages = _c === void 0 ? samplePages : _c, _d = _a.homeName, homeName = _d === void 0 ? 'Home' : _d, _e = _a.homeRef, homeRef = _e === void 0 ? '#' : _e, 
    // homeIcon = null,
    _f = _a.homeIcon, 
    // homeIcon = null,
    homeIcon = _f === void 0 ? _jsx(HomeIcon, { className: "flex-shrink-0 h-5 w-5", "aria-hidden": "true" }, void 0) : _f;
    var containedBar = (_jsx("nav", __assign({ className: "flex", "aria-label": "Breadcrumb" }, { children: _jsxs("ol", __assign({ role: "list", className: "bg-white rounded-md shadow px-6 flex space-x-4" }, { children: [_jsx("li", __assign({ className: "flex" }, { children: _jsx("div", __assign({ className: "flex items-center" }, { children: _jsx("a", __assign({ href: homeRef, className: "text-gray-400 hover:text-gray-500" }, { children: homeIcon ? (_jsxs(_Fragment, { children: [homeIcon, _jsx("span", __assign({ className: "sr-only" }, { children: homeName }), void 0)] }, void 0)) : (_jsx(_Fragment, { children: _jsx("span", __assign({ className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" }, { children: homeName }), void 0) }, void 0)) }), void 0) }), void 0) }), void 0), pages.map(function (page) { return (_jsx("li", __assign({ className: "flex" }, { children: _jsxs("div", __assign({ className: "flex items-center" }, { children: [_jsx("svg", __assign({ className: "flex-shrink-0 w-6 h-full text-gray-200", viewBox: "0 0 24 44", preserveAspectRatio: "none", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" }, { children: _jsx("path", { d: "M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" }, void 0) }), void 0), _jsx("a", __assign({ href: page.href, className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700", "aria-current": page.current ? 'page' : undefined }, { children: page.name }), void 0)] }), void 0) }), page.name)); })] }), void 0) }), void 0));
    var fullWidthBar = (_jsx("nav", __assign({ className: "bg-white border-b border-gray-200 flex", "aria-label": "Breadcrumb" }, { children: _jsxs("ol", __assign({ role: "list", className: "max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8" }, { children: [_jsx("li", __assign({ className: "flex" }, { children: _jsx("div", __assign({ className: "flex items-center" }, { children: _jsx("a", __assign({ href: homeRef, className: "text-gray-400 hover:text-gray-500" }, { children: homeIcon ? (_jsxs(_Fragment, { children: [homeIcon, _jsx("span", __assign({ className: "sr-only" }, { children: homeName }), void 0)] }, void 0)) : (_jsx(_Fragment, { children: _jsx("span", __assign({ className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" }, { children: homeName }), void 0) }, void 0)) }), void 0) }), void 0) }), void 0), pages.map(function (page) { return (_jsx("li", __assign({ className: "flex" }, { children: _jsxs("div", __assign({ className: "flex items-center" }, { children: [_jsx("svg", __assign({ className: "flex-shrink-0 w-6 h-full text-gray-200", viewBox: "0 0 24 44", preserveAspectRatio: "none", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" }, { children: _jsx("path", { d: "M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" }, void 0) }), void 0), _jsx("a", __assign({ href: page.href, className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700", "aria-current": page.current ? 'page' : undefined }, { children: page.name }), void 0)] }), void 0) }), page.name)); })] }), void 0) }), void 0));
    var simpleWithChevrons = (_jsx("nav", __assign({ className: "flex", "aria-label": "Breadcrumb" }, { children: _jsxs("ol", __assign({ role: "list", className: "flex items-center space-x-4" }, { children: [_jsx("li", { children: _jsx("div", { children: _jsx("a", __assign({ href: homeRef, className: "text-gray-400 hover:text-gray-500" }, { children: homeIcon ? (_jsxs(_Fragment, { children: [homeIcon, _jsx("span", __assign({ className: "sr-only" }, { children: homeName }), void 0)] }, void 0)) : (_jsx(_Fragment, { children: _jsx("span", __assign({ className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" }, { children: homeName }), void 0) }, void 0)) }), void 0) }, void 0) }, void 0), pages.map(function (page) { return (_jsx("li", { children: _jsxs("div", __assign({ className: "flex items-center" }, { children: [_jsx(ChevronRightIcon, { className: "flex-shrink-0 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0), _jsx("a", __assign({ href: page.href, className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700", "aria-current": page.current ? 'page' : undefined }, { children: page.name }), void 0)] }), void 0) }, page.name)); })] }), void 0) }), void 0));
    var simpleWithSlashes = (_jsx("nav", __assign({ className: "flex", "aria-label": "Breadcrumb" }, { children: _jsxs("ol", __assign({ role: "list", className: "flex items-center space-x-4" }, { children: [_jsx("li", { children: _jsx("div", { children: _jsx("a", __assign({ href: homeRef, className: "text-gray-400 hover:text-gray-500" }, { children: homeIcon ? (_jsxs(_Fragment, { children: [homeIcon, _jsx("span", __assign({ className: "sr-only" }, { children: homeName }), void 0)] }, void 0)) : (_jsx(_Fragment, { children: _jsx("span", __assign({ className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" }, { children: homeName }), void 0) }, void 0)) }), void 0) }, void 0) }, void 0), pages.map(function (page) { return (_jsx("li", { children: _jsxs("div", __assign({ className: "flex items-center" }, { children: [_jsx("svg", __assign({ className: "flex-shrink-0 h-5 w-5 text-gray-300", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true" }, { children: _jsx("path", { d: "M5.555 17.776l8-16 .894.448-8 16-.894-.448z" }, void 0) }), void 0), _jsx("a", __assign({ href: page.href, className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700", "aria-current": page.current ? 'page' : undefined }, { children: page.name }), void 0)] }), void 0) }, page.name)); })] }), void 0) }), void 0));
    switch (type) {
        case BreadcrumbType.containedBar:
            return containedBar;
        case BreadcrumbType.fullWidthBar:
            return fullWidthBar;
        case BreadcrumbType.simpleWithChevrons:
            return simpleWithChevrons;
        case BreadcrumbType.simpleWithSlashes:
            return simpleWithSlashes;
        default:
            return fullWidthBar;
    }
};
export var Breadcrumb = Object.assign(BreadcrumbComponent, {
    type: BreadcrumbType,
});
export default Breadcrumb;
