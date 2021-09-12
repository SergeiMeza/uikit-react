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
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, DotsVerticalIcon, PencilAltIcon, } from '@heroicons/react/solid';
import { classNames } from '../../helpers/methods';
var DropdownType;
(function (DropdownType) {
    DropdownType["custom"] = "custom";
    DropdownType["button"] = "button";
    DropdownType["minimal"] = "minimal";
})(DropdownType || (DropdownType = {}));
var MenuItem = function (_a) {
    var _b = _a.href, href = _b === void 0 ? '#' : _b, _c = _a.title, title = _c === void 0 ? 'Edit' : _c, children = _a.children;
    return (_jsx(Menu.Item, { children: function (_a) {
            var active = _a.active;
            return (_jsx("a", __assign({ href: href, className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm') }, { children: children !== null && children !== void 0 ? children : title }), void 0));
        } }, void 0));
};
var MenuSection = function (_a) {
    var children = _a.children;
    return _jsx("div", __assign({ className: "py-1" }, { children: children }), void 0);
};
var DotsVerticalButton = (_jsxs(Menu.Button, __assign({ className: "bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500" }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Open options" }), void 0), _jsx(DotsVerticalIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0)] }), void 0));
var DropdownComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.type, type = _c === void 0 ? DropdownType.button : _c, _d = _a.title, title = _d === void 0 ? 'Options' : _d, menuButton = _a.menuButton, children = _a.children;
    var textButton = (_jsxs(Menu.Button, __assign({ className: "inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500" }, { children: [title, _jsx(ChevronDownIcon, { className: "-mr-1 ml-2 h-5 w-5", "aria-hidden": "true" }, void 0)] }), void 0));
    return (_jsxs(Menu, __assign({ as: "div", className: "relative inline-block text-left" }, { children: [_jsx("div", { children: type === DropdownType.button
                    ? textButton
                    : type === DropdownType.minimal
                        ? DotsVerticalButton
                        : type === DropdownType.custom
                            ? menuButton
                            : DotsVerticalButton }, void 0), _jsx(Transition, __assign({ as: Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" }, { children: _jsx(Menu.Items, __assign({ className: "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" }, { children: children !== null && children !== void 0 ? children : (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: "px-4 py-3" }, { children: [_jsx("p", __assign({ className: "text-sm" }, { children: "Signed in as" }), void 0), _jsx("p", __assign({ className: "text-sm font-medium text-gray-900 truncate" }, { children: "tom@example.com" }), void 0)] }), void 0), _jsxs(MenuSection, { children: [_jsxs(MenuItem, { children: [_jsx(PencilAltIcon, { className: "mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500", "aria-hidden": "true" }, void 0), "Edit"] }, void 0), _jsx(MenuItem, { title: "Support" }, void 0)] }, void 0), _jsx(MenuSection, { children: _jsx(MenuItem, { title: "Licence" }, void 0) }, void 0), _jsx(MenuSection, { children: _jsx("form", __assign({ method: "POST", action: "#" }, { children: _jsx(Menu.Item, { children: function (_a) {
                                            var active = _a.active;
                                            return (_jsx("button", __assign({ type: "submit", className: classNames(active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700', 'block w-full text-left px-4 py-2 text-sm') }, { children: "Sign out" }), void 0));
                                        } }, void 0) }), void 0) }, void 0)] }, void 0)) }), void 0) }), void 0)] }), void 0));
};
export var Dropdown = Object.assign(DropdownComponent, {
    DotsVerticalButton: DotsVerticalButton,
    type: DropdownType,
    MenuSection: MenuSection,
    MenuItem: MenuItem,
});
export default Dropdown;
