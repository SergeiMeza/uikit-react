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
import { useState } from 'react';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon, } from '@heroicons/react/outline';
import { classNames } from '../../../helpers/methods';
/* This example requires Tailwind CSS v2.0+ */
var sampleNavigation = [
    { name: 'Dashboard', to: '/', icon: HomeIcon, current: true, count: '5' },
    { name: 'Team', to: '/', icon: UsersIcon, current: false },
    {
        name: 'Projects',
        to: '/',
        icon: FolderIcon,
        current: false,
        count: '19',
    },
    {
        name: 'Calendar',
        to: '/',
        icon: CalendarIcon,
        current: false,
        count: '20+',
    },
    { name: 'Documents', to: '/', icon: InboxIcon, current: false },
    { name: 'Reports', to: '/', icon: ChartBarIcon, current: false },
];
var sampleSecondaryNavigation = [
    { name: 'Website redesign', to: '/', current: false },
    { name: 'GraphQL API', to: '/', current: false },
    { name: 'Customer migration guides', to: '/', current: false },
    { name: 'Profit sharing program', to: '/', current: false },
];
var VerticalNavigationComponent = function (_a) {
    var _b = _a.items, items = _b === void 0 ? sampleNavigation : _b, _c = _a.secondaryNavigationTitle, secondaryNavigationTitle = _c === void 0 ? 'Projects' : _c, _d = _a.secondaryItems, secondaryItems = _d === void 0 ? sampleSecondaryNavigation : _d, _e = _a.showIcons, showIcons = _e === void 0 ? true : _e, _f = _a.onItemSelected, onItemSelected = _f === void 0 ? function (item) { return console.log('item selected:', item.name); } : _f;
    var _g = useState(items.slice()), navItems = _g[0], setNavItems = _g[1];
    function handleItemChange(value) {
        var _navItems = navItems.slice();
        _navItems = _navItems.map(function (e) { return (__assign(__assign({}, e), { current: false })); });
        var index = _navItems.findIndex(function (i) { return i.name === value; });
        _navItems[index].current = true;
        setNavItems(_navItems);
        onItemSelected(_navItems[index]);
    }
    return (_jsxs("nav", __assign({ "aria-label": "Sidebar" }, { children: [_jsx("div", __assign({ className: "space-y-1" }, { children: navItems.map(function (item) { return (_jsxs("button", __assign({ className: classNames(item.current
                        ? 'bg-primary-100 text-primary-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md'), type: "button", "aria-current": item.current ? 'page' : undefined, onClick: function (e) {
                        e.preventDefault();
                        handleItemChange(item.name);
                    } }, { children: [showIcons && item.icon && (_jsx(item.icon, { className: classNames(item.current
                                ? 'text-primary-500'
                                : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6'), "aria-hidden": "true" }, void 0)), _jsx("span", __assign({ className: "truncate" }, { children: item.name }), void 0), item.count ? (_jsx("span", __assign({ className: classNames(item.current
                                ? 'bg-white'
                                : 'bg-gray-100 group-hover:bg-gray-200', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full') }, { children: item.count }), void 0)) : null] }), item.name)); }) }), void 0), secondaryItems.length > 0 && (_jsxs("div", __assign({ className: "mt-8" }, { children: [secondaryNavigationTitle && (_jsx("h3", __assign({ className: "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider", id: "projects-headline" }, { children: secondaryNavigationTitle }), void 0)), _jsx("div", __assign({ className: "mt-1 space-y-1", "aria-labelledby": "projects-headline" }, { children: secondaryItems.map(function (item) { return (_jsx("button", __assign({ type: "button", className: "w-full group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50", onClick: function (e) {
                                e.preventDefault();
                                onItemSelected(item);
                            } }, { children: _jsx("span", __assign({ className: "truncate" }, { children: item.name }), void 0) }), item.name)); }) }), void 0)] }), void 0))] }), void 0));
};
export var VerticalNavigation = Object.assign(VerticalNavigationComponent, {});
export default VerticalNavigation;
