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
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { classNames } from '../helpers/methods';
// MODEL
var user = {
    name: 'Sergei Meza',
    email: 'contact@sergeimeza.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
var navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
];
var userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
];
export var LightNavGrayBackground = function () {
    return (_jsxs("div", __assign({ className: "min-h-1/4 bg-gray-100" }, { children: [_jsx(Disclosure, __assign({ as: "nav", className: "bg-white border-b border-gray-200" }, { children: function (_a) {
                    var open = _a.open;
                    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, { children: _jsxs("div", __assign({ className: "flex justify-between h-16" }, { children: [_jsxs("div", __assign({ className: "flex" }, { children: [_jsxs("div", __assign({ className: "flex-shrink-0 flex items-center" }, { children: [_jsx("img", { className: "block lg:hidden h-8 w-auto", src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg", alt: "Workflow" }, void 0), _jsx("img", { className: "hidden lg:block h-8 w-auto", src: "https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg", alt: "Workflow" }, void 0)] }), void 0), _jsx("div", __assign({ className: "hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8" }, { children: navigation.map(function (item) { return (_jsx("a", __assign({ href: item.href, className: classNames(item.current
                                                            ? 'border-indigo-500 text-gray-900'
                                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'), "aria-current": item.current ? 'page' : undefined }, { children: item.name }), item.name)); }) }), void 0)] }), void 0), _jsxs("div", __assign({ className: "hidden sm:ml-6 sm:flex sm:items-center" }, { children: [_jsxs("button", __assign({ type: "button", className: "bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "View notifications" }), void 0), _jsx(BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0), _jsxs(Menu, __assign({ as: "div", className: "ml-3 relative" }, { children: [_jsx("div", { children: _jsxs(Menu.Button, __assign({ className: "max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Open user menu" }), void 0), _jsx("img", { className: "w-8 h-8 rounded-full", src: user.imageUrl, alt: "" }, void 0)] }), void 0) }, void 0), _jsx(Transition, __assign({ as: Fragment, enter: "transition ease-out duration-200", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" }, { children: _jsx(Menu.Items, __assign({ className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, { children: userNavigation.map(function (item) { return (_jsx(Menu.Item, { children: function (_a) {
                                                                        var active = _a.active;
                                                                        return (_jsx("a", __assign({ href: item.href, className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, { children: item.name }), void 0));
                                                                    } }, item.name)); }) }), void 0) }), void 0)] }), void 0)] }), void 0), _jsx("div", __assign({ className: "-mr-2 flex items-center sm:hidden" }, { children: _jsxs(Disclosure.Button, __assign({ className: "bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Open main menu" }), void 0), open ? (_jsx(XIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0)) : (_jsx(MenuIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0))] }), void 0) }), void 0)] }), void 0) }), void 0), _jsxs(Disclosure.Panel, __assign({ className: "sm:hidden" }, { children: [_jsx("div", __assign({ className: "pt-2 pb-3 space-y-1" }, { children: navigation.map(function (item) { return (_jsx("a", __assign({ href: item.href, className: classNames(item.current
                                                ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800', 'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'), "aria-current": item.current ? 'page' : undefined }, { children: item.name }), item.name)); }) }), void 0), _jsxs("div", __assign({ className: "pt-4 pb-3 border-t border-gray-200" }, { children: [_jsxs("div", __assign({ className: "flex items-center px-4" }, { children: [_jsx("div", __assign({ className: "flex-shrink-0" }, { children: _jsx("img", { className: "h-10 w-10 rounded-full", src: user.imageUrl, alt: "" }, void 0) }), void 0), _jsxs("div", __assign({ className: "ml-3" }, { children: [_jsx("div", __assign({ className: "text-base font-medium text-gray-800" }, { children: user.name }), void 0), _jsx("div", __assign({ className: "text-sm font-medium text-gray-500" }, { children: user.email }), void 0)] }), void 0), _jsxs("button", __assign({ type: "button", className: "ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "View notifications" }), void 0), _jsx(BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0)] }), void 0), _jsx("div", __assign({ className: "mt-3 space-y-1" }, { children: userNavigation.map(function (item) { return (_jsx("a", __assign({ href: item.href, className: "block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100" }, { children: item.name }), item.name)); }) }), void 0)] }), void 0)] }), void 0)] }, void 0));
                } }), void 0), _jsxs("div", __assign({ className: "py-10" }, { children: [_jsx("header", { children: _jsx("div", __assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, { children: _jsx("h1", __assign({ className: "text-3xl font-bold leading-tight text-gray-900" }, { children: "Dashboard" }), void 0) }), void 0) }, void 0), _jsx("main", { children: _jsx("div", __assign({ className: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, { children: _jsx("div", __assign({ className: "px-4 py-8 sm:px-0" }, { children: _jsx("div", { className: "border-4 border-dashed border-gray-200 rounded-lg h-96" }, void 0) }), void 0) }), void 0) }, void 0)] }), void 0)] }), void 0));
};
