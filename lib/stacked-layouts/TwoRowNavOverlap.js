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
import { Popover, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
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
export var TwoRowNavOverlap = function () {
    return (_jsxs("div", __assign({ className: "min-h-1/4 bg-gray-100" }, { children: [_jsx(Popover, __assign({ as: "header", className: "pb-24 bg-indigo-600" }, { children: function (_a) {
                    var open = _a.open;
                    return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: "max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8" }, { children: [_jsxs("div", __assign({ className: "relative py-5 flex items-center justify-center lg:justify-between" }, { children: [_jsx("div", __assign({ className: "absolute left-0 flex-shrink-0 lg:static" }, { children: _jsxs("a", __assign({ href: "#" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Workflow" }), void 0), _jsx("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg", alt: "Workflow" }, void 0)] }), void 0) }), void 0), _jsxs("div", __assign({ className: "hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5" }, { children: [_jsxs("button", __assign({ type: "button", className: "flex-shrink-0 p-1 text-indigo-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "View notifications" }), void 0), _jsx(BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0), _jsxs(Menu, __assign({ as: "div", className: "ml-4 relative flex-shrink-0" }, { children: [_jsx("div", { children: _jsxs(Menu.Button, __assign({ className: "bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Open user menu" }), void 0), _jsx("img", { className: "h-8 w-8 rounded-full", src: user.imageUrl, alt: "" }, void 0)] }), void 0) }, void 0), _jsx(Transition, __assign({ as: Fragment, enter: "transition ease-out duration-200", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" }, { children: _jsx(Menu.Items, __assign({ className: "origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" }, { children: userNavigation.map(function (item) { return (_jsx(Menu.Item, { children: function (_a) {
                                                                            var active = _a.active;
                                                                            return (_jsx("a", __assign({ href: item.href, className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, { children: item.name }), void 0));
                                                                        } }, item.name)); }) }), void 0) }), void 0)] }), void 0)] }), void 0), _jsx("div", __assign({ className: "flex-1 min-w-0 px-12 lg:hidden" }, { children: _jsxs("div", __assign({ className: "max-w-xs w-full mx-auto" }, { children: [_jsx("label", __assign({ htmlFor: "desktop-search", className: "sr-only" }, { children: "Search" }), void 0), _jsxs("div", __assign({ className: "relative text-white focus-within:text-gray-600" }, { children: [_jsx("div", __assign({ className: "pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center" }, { children: _jsx(SearchIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0) }), void 0), _jsx("input", { id: "desktop-search", className: "block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm", placeholder: "Search", type: "search", name: "search" }, void 0)] }), void 0)] }), void 0) }), void 0), _jsx("div", __assign({ className: "absolute right-0 flex-shrink-0 lg:hidden" }, { children: _jsxs(Popover.Button, __assign({ className: "bg-transparent p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Open main menu" }), void 0), open ? (_jsx(XIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0)) : (_jsx(MenuIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0))] }), void 0) }), void 0)] }), void 0), _jsx("div", __assign({ className: "hidden lg:block border-t border-white border-opacity-20 py-5" }, { children: _jsxs("div", __assign({ className: "grid grid-cols-3 gap-8 items-center" }, { children: [_jsx("div", __assign({ className: "col-span-2" }, { children: _jsx("nav", __assign({ className: "flex space-x-4" }, { children: navigation.map(function (item) { return (_jsx("a", __assign({ href: item.href, className: classNames(item.current ? 'text-white' : 'text-indigo-100', 'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'), "aria-current": item.current ? 'page' : undefined }, { children: item.name }), item.name)); }) }), void 0) }), void 0), _jsx("div", { children: _jsxs("div", __assign({ className: "max-w-md w-full mx-auto" }, { children: [_jsx("label", __assign({ htmlFor: "mobile-search", className: "sr-only" }, { children: "Search" }), void 0), _jsxs("div", __assign({ className: "relative text-white focus-within:text-gray-600" }, { children: [_jsx("div", __assign({ className: "pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center" }, { children: _jsx(SearchIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0) }), void 0), _jsx("input", { id: "mobile-search", className: "block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm", placeholder: "Search", type: "search", name: "search" }, void 0)] }), void 0)] }), void 0) }, void 0)] }), void 0) }), void 0)] }), void 0), _jsx(Transition.Root, __assign({ as: Fragment }, { children: _jsxs("div", __assign({ className: "lg:hidden" }, { children: [_jsx(Transition.Child, __assign({ as: Fragment, enter: "duration-150 ease-out", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "duration-150 ease-in", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: _jsx(Popover.Overlay, { className: "z-20 fixed inset-0 bg-black bg-opacity-25" }, void 0) }), void 0), _jsx(Transition.Child, __assign({ as: Fragment, enter: "duration-150 ease-out", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "duration-150 ease-in", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" }, { children: _jsx(Popover.Panel, __assign({ focus: true, className: "z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top" }, { children: _jsxs("div", __assign({ className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200" }, { children: [_jsxs("div", __assign({ className: "pt-3 pb-2" }, { children: [_jsxs("div", __assign({ className: "flex items-center justify-between px-4" }, { children: [_jsx("div", { children: _jsx("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg", alt: "Workflow" }, void 0) }, void 0), _jsx("div", __assign({ className: "-mr-2" }, { children: _jsxs(Popover.Button, __assign({ className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Close menu" }), void 0), _jsx(XIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0) }), void 0)] }), void 0), _jsxs("div", __assign({ className: "mt-3 px-2 space-y-1" }, { children: [_jsx("a", __assign({ href: "#", className: "block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800" }, { children: "Home" }), void 0), _jsx("a", __assign({ href: "#", className: "block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800" }, { children: "Profile" }), void 0), _jsx("a", __assign({ href: "#", className: "block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800" }, { children: "Resources" }), void 0), _jsx("a", __assign({ href: "#", className: "block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800" }, { children: "Company Directory" }), void 0), _jsx("a", __assign({ href: "#", className: "block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800" }, { children: "Openings" }), void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "pt-4 pb-2" }, { children: [_jsxs("div", __assign({ className: "flex items-center px-5" }, { children: [_jsx("div", __assign({ className: "flex-shrink-0" }, { children: _jsx("img", { className: "h-10 w-10 rounded-full", src: user.imageUrl, alt: "" }, void 0) }), void 0), _jsxs("div", __assign({ className: "ml-3 min-w-0 flex-1" }, { children: [_jsx("div", __assign({ className: "text-base font-medium text-gray-800 truncate" }, { children: user.name }), void 0), _jsx("div", __assign({ className: "text-sm font-medium text-gray-500 truncate" }, { children: user.email }), void 0)] }), void 0), _jsxs("button", __assign({ type: "button", className: "ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "View notifications" }), void 0), _jsx(BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0)] }), void 0), _jsx("div", __assign({ className: "mt-3 px-2 space-y-1" }, { children: userNavigation.map(function (item) { return (_jsx("a", __assign({ href: item.href, className: "block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800" }, { children: item.name }), item.name)); }) }), void 0)] }), void 0)] }), void 0) }), void 0) }), void 0)] }), void 0) }), void 0)] }, void 0));
                } }), void 0), _jsx("main", __assign({ className: "-mt-24 pb-8" }, { children: _jsxs("div", __assign({ className: "max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8" }, { children: [_jsx("h1", __assign({ className: "sr-only" }, { children: "Page title" }), void 0), _jsxs("div", __assign({ className: "grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8" }, { children: [_jsx("div", __assign({ className: "grid grid-cols-1 gap-4 lg:col-span-2" }, { children: _jsxs("section", __assign({ "aria-labelledby": "section-1-title" }, { children: [_jsx("h2", __assign({ className: "sr-only", id: "section-1-title" }, { children: "Section title" }), void 0), _jsx("div", __assign({ className: "rounded-lg bg-white h-96 overflow-hidden shadow" }, { children: _jsx("div", { className: "p-6" }, void 0) }), void 0)] }), void 0) }), void 0), _jsx("div", __assign({ className: "grid grid-cols-1 gap-4" }, { children: _jsxs("section", __assign({ "aria-labelledby": "section-2-title" }, { children: [_jsx("h2", __assign({ className: "sr-only", id: "section-2-title" }, { children: "Section title" }), void 0), _jsx("div", __assign({ className: "rounded-lg bg-white h-96 overflow-hidden shadow" }, { children: _jsx("div", { className: "p-6" }, void 0) }), void 0)] }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0), _jsx("footer", { children: _jsx("div", __assign({ className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl" }, { children: _jsxs("div", __assign({ className: "border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left" }, { children: [_jsx("span", __assign({ className: "block sm:inline" }, { children: "\u00A9 2021 Sergei Meza." }), void 0), ' ', _jsx("span", __assign({ className: "block sm:inline" }, { children: "All rights reserved." }), void 0)] }), void 0) }), void 0) }, void 0)] }), void 0));
};