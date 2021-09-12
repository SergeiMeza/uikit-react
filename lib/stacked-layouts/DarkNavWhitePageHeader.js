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
export var DarkNavWhitePageHeader = function () {
    return (_jsxs("div", __assign({ className: "min-h-1/4 bg-gray-100" }, { children: [_jsx(Disclosure, __assign({ as: "nav", className: "bg-gray-800" }, { children: function (_a) {
                    var open = _a.open;
                    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, { children: _jsxs("div", __assign({ className: "flex items-center justify-between h-16" }, { children: [_jsxs("div", __assign({ className: "flex items-center" }, { children: [_jsx("div", __assign({ className: "flex-shrink-0" }, { children: _jsx("img", { className: "h-8 w-8", src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg", alt: "Workflow" }, void 0) }), void 0), _jsx("div", __assign({ className: "hidden md:block" }, { children: _jsx("div", __assign({ className: "ml-10 flex items-baseline space-x-4" }, { children: navigation.map(function (item) { return (_jsx("a", __assign({ href: item.href, className: classNames(item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium'), "aria-current": item.current ? 'page' : undefined }, { children: item.name }), item.name)); }) }), void 0) }), void 0)] }), void 0), _jsx("div", __assign({ className: "hidden md:block" }, { children: _jsxs("div", __assign({ className: "ml-4 flex items-center md:ml-6" }, { children: [_jsxs("button", __assign({ type: "button", className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "View notifications" }), void 0), _jsx(BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0), _jsxs(Menu, __assign({ as: "div", className: "ml-3 relative" }, { children: [_jsx("div", { children: _jsxs(Menu.Button, __assign({ className: "max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Open user menu" }), void 0), _jsx("img", { className: "h-8 w-8 rounded-full", src: user.imageUrl, alt: "" }, void 0)] }), void 0) }, void 0), _jsx(Transition, __assign({ as: Fragment, enter: "transition ease-out duration-200", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" }, { children: _jsx(Menu.Items, __assign({ className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, { children: userNavigation.map(function (item) { return (_jsx(Menu.Item, { children: function (_a) {
                                                                            var active = _a.active;
                                                                            return (_jsx("a", __assign({ href: item.href, className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, { children: item.name }), void 0));
                                                                        } }, item.name)); }) }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0), _jsx("div", __assign({ className: "-mr-2 flex md:hidden" }, { children: _jsxs(Disclosure.Button, __assign({ className: "bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Open main menu" }), void 0), open ? (_jsx(XIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0)) : (_jsx(MenuIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0))] }), void 0) }), void 0)] }), void 0) }), void 0), _jsxs(Disclosure.Panel, __assign({ className: "md:hidden" }, { children: [_jsx("div", __assign({ className: "pt-2 pb-3 space-y-1" }, { children: navigation.map(function (item) { return (_jsx("a", __assign({ href: item.href, className: classNames(item.current
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium'), "aria-current": item.current ? 'page' : undefined }, { children: item.name }), item.name)); }) }), void 0), _jsxs("div", __assign({ className: "pt-4 pb-3 border-t border-gray-700" }, { children: [_jsxs("div", __assign({ className: "flex items-center px-5" }, { children: [_jsx("div", __assign({ className: "flex-shrink-0" }, { children: _jsx("img", { className: "h-10 w-10 rounded-full", src: user.imageUrl, alt: "" }, void 0) }), void 0), _jsxs("div", __assign({ className: "ml-3" }, { children: [_jsx("div", __assign({ className: "text-base leading-none text-white" }, { children: user.name }), void 0), _jsx("div", __assign({ className: "text-sm leading-none text-gray-400" }, { children: user.email }), void 0)] }), void 0), _jsxs("button", __assign({ type: "button", className: "ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "View notifications" }), void 0), _jsx(BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0)] }), void 0), _jsx("div", __assign({ className: "mt-3 px-2 space-y-1" }, { children: userNavigation.map(function (item) { return (_jsx("a", __assign({ href: item.href, className: "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700" }, { children: item.name }), item.name)); }) }), void 0)] }), void 0)] }), void 0)] }, void 0));
                } }), void 0), _jsx("header", __assign({ className: "bg-white shadow" }, { children: _jsx("div", __assign({ className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8" }, { children: _jsx("h1", __assign({ className: "text-3xl font-bold text-gray-900" }, { children: "Dashboard" }), void 0) }), void 0) }), void 0), _jsx("main", { children: _jsx("div", __assign({ className: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, { children: _jsx("div", __assign({ className: "px-4 py-8 sm:px-0" }, { children: _jsx("div", { className: "border-4 border-dashed border-gray-200 rounded-lg h-96" }, void 0) }), void 0) }), void 0) }, void 0)] }), void 0));
};
