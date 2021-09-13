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
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline';
import { classNames } from '../..';
var SidebarLayoutType;
(function (SidebarLayoutType) {
    SidebarLayoutType["simple"] = "simple";
})(SidebarLayoutType || (SidebarLayoutType = {}));
var SidebarLayoutComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'min-h-1/4 flex overflow-hidden bg-gray-100' : _b, _c = _a.header, header = _c === void 0 ? undefined : _c, _d = _a.sidebarNavigation, sidebarNavigation = _d === void 0 ? undefined : _d, _e = _a.title, title = _e === void 0 ? undefined : _e, _f = _a.type, type = _f === void 0 ? SidebarLayoutType.simple : _f, children = _a.children;
    var _g = useState(false), sidebarOpen = _g[0], setSidebarOpen = _g[1];
    return (_jsxs("div", __assign({ className: classNames(className) }, { children: [_jsx(Transition.Root, __assign({ show: sidebarOpen, as: Fragment }, { children: _jsxs(Dialog, __assign({ as: "div", className: "fixed inset-0 flex z-40 md:hidden", onClose: setSidebarOpen }, { children: [_jsx(Transition.Child, __assign({ as: Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: _jsx(Dialog.Overlay, { className: "fixed inset-0 bg-gray-600 bg-opacity-75" }, void 0) }), void 0), _jsx(Transition.Child, __assign({ as: Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full" }, { children: _jsxs("div", __assign({ className: "relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white" }, { children: [_jsx(Transition.Child, __assign({ as: Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: _jsx("div", __assign({ className: "absolute top-0 right-0 -mr-12 pt-2" }, { children: _jsxs("button", __assign({ type: "button", className: "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", onClick: function () { return setSidebarOpen(false); } }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Close sidebar" }), void 0), _jsx(XIcon, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0)] }), void 0) }), void 0) }), void 0), sidebarNavigation] }), void 0) }), void 0), _jsx("div", { className: "flex-shrink-0 w-14", "aria-hidden": "true" }, void 0)] }), void 0) }), void 0), _jsx("div", __assign({ className: "hidden md:flex md:flex-shrink-0" }, { children: _jsx("div", __assign({ className: "flex flex-col w-64" }, { children: sidebarNavigation }), void 0) }), void 0), _jsxs("div", __assign({ className: "flex flex-col w-0 flex-1 overflow-hidden" }, { children: [_jsxs("div", __assign({ className: "relative z-10 flex-shrink-0 flex h-16 bg-white shadow" }, { children: [_jsxs("button", __assign({ type: "button", className: "px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden", onClick: function () { return setSidebarOpen(true); } }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Open sidebar" }), void 0), _jsx(MenuAlt2Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0), header] }), void 0), _jsx("main", __assign({ className: "flex-1 relative overflow-y-auto focus:outline-none" }, { children: _jsxs("div", __assign({ className: "py-6" }, { children: [_jsx("div", __assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8" }, { children: _jsx("h1", __assign({ className: "text-2xl font-semibold text-gray-900" }, { children: title }), void 0) }), void 0), _jsx("div", __assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8" }, { children: children !== null && children !== void 0 ? children : (_jsx("div", __assign({ className: "py-4" }, { children: _jsx("div", { className: "border-4 border-dashed border-gray-200 rounded-lg h-96" }, void 0) }), void 0)) }), void 0)] }), void 0) }), void 0)] }), void 0)] }), void 0));
};
export var SidebarLayout = Object.assign(SidebarLayoutComponent, {
    type: SidebarLayoutType,
});
export default SidebarLayout;
