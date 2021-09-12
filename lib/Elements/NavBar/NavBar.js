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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
var NavBarComponent = function (_a) {
    var _b = _a.icon, icon = _b === void 0 ? undefined : _b, _c = _a.tabNavigation, tabNavigation = _c === void 0 ? undefined : _c, _d = _a.quickAction, quickAction = _d === void 0 ? undefined : _d, _e = _a.actions, actions = _e === void 0 ? undefined : _e, _f = _a.disclosurePanel, disclosurePanel = _f === void 0 ? undefined : _f;
    return (_jsx(Disclosure, __assign({ as: "nav", className: "bg-white shadow" }, { children: function (_a) {
            var open = _a.open;
            return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, { children: _jsxs("div", __assign({ className: "flex justify-between h-16" }, { children: [_jsxs("div", __assign({ className: "flex" }, { children: [_jsx("div", __assign({ className: "-ml-2 mr-2 flex items-center md:hidden" }, { children: quickAction && (_jsxs(Disclosure.Button, __assign({ className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Open main menu" }), void 0), open ? (_jsx(XIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0)) : (_jsx(MenuIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0))] }), void 0)) }), void 0), _jsx("div", __assign({ className: "flex-shrink-0 flex items-center" }, { children: icon }), void 0), _jsx("div", __assign({ className: "hidden md:ml-6 md:flex md:space-x-8" }, { children: tabNavigation }), void 0)] }), void 0), _jsxs("div", __assign({ className: "flex items-center" }, { children: [_jsx("div", __assign({ className: "flex-shrink-0" }, { children: quickAction }), void 0), _jsx("div", __assign({ className: "hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center" }, { children: actions }), void 0), _jsx("div", __assign({ className: "flex items-center md:hidden" }, { children: !quickAction && (_jsxs(Disclosure.Button, __assign({ className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Open main menu" }), void 0), open ? (_jsx(XIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0)) : (_jsx(MenuIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0))] }), void 0)) }), void 0)] }), void 0)] }), void 0) }), void 0), _jsx(Disclosure.Panel, __assign({ className: "md:hidden" }, { children: disclosurePanel }), void 0)] }, void 0));
        } }), void 0));
};
export var NavBar = Object.assign(NavBarComponent, {});
export default NavBar;
