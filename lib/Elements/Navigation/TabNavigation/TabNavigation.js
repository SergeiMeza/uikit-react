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
// import {
//   CreditCardIcon,
//   OfficeBuildingIcon,
//   UserIcon,
//   UsersIcon,
// } from '@heroicons/react/solid'
import { classNames } from '../../../helpers/methods';
// const sampleTabs: NavigationItem[] = [
//   { name: 'My Account', to: '/', icon: UserIcon, current: false },
//   { name: 'Company', to: '/', icon: OfficeBuildingIcon, current: false },
//   { name: 'Team Members', to: '/', icon: UsersIcon, current: true },
//   { name: 'Billing', to: '/', icon: CreditCardIcon, current: false },
// ]
var sampleTabs2 = [
    { name: 'Applied', to: '/', count: '52', current: false },
    { name: 'Phone Screening', to: '/', count: '6', current: false },
    { name: 'Interview', to: '/', count: '4', current: true },
    { name: 'Offer', to: '/', current: false },
    { name: 'Disqualified', to: '/', current: false },
];
var TabNavigationType;
(function (TabNavigationType) {
    TabNavigationType["default"] = "default";
    TabNavigationType["pills"] = "pills";
})(TabNavigationType || (TabNavigationType = {}));
var TabNavigationComponent = function (_a) {
    var _b;
    var _c = _a.tabs, tabs = _c === void 0 ? sampleTabs2 : _c, _d = _a.type, type = _d === void 0 ? TabNavigationType.default : _d, _e = _a.showIcons, showIcons = _e === void 0 ? false : _e, _f = _a.onTabSelected, onTabSelected = _f === void 0 ? function (tab) {
        console.log('tab selected:', tab.name);
    } : _f;
    var _g = useState(tabs.slice()), tabItems = _g[0], setTabItems = _g[1];
    function handleChange(e) {
        handleItemChange(e.target.value);
    }
    function handleItemChange(value) {
        var _tabItems = tabItems.slice();
        _tabItems = _tabItems.map(function (e) { return (__assign(__assign({}, e), { current: false })); });
        var index = _tabItems.findIndex(function (i) { return i.name === value; });
        _tabItems[index].current = true;
        setTabItems(_tabItems);
        onTabSelected(_tabItems[index]);
    }
    return (_jsxs("div", { children: [_jsxs("div", __assign({ className: "sm:hidden" }, { children: [_jsx("label", __assign({ htmlFor: "tabs", className: "sr-only" }, { children: "Select a tab" }), void 0), _jsx("select", __assign({ id: "tabs", name: "tabs", className: "block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md", defaultValue: (_b = tabs.find(function (tab) { return tab.current; })) === null || _b === void 0 ? void 0 : _b.name, onChange: handleChange }, { children: tabItems.map(function (tab) { return (_jsx("option", { children: tab.name }, tab.name)); }) }), void 0)] }), void 0), _jsx("div", __assign({ className: "hidden sm:block" }, { children: _jsx("div", __assign({ className: classNames(type === TabNavigationType.default
                        ? 'border-b border-gray-200'
                        : '') }, { children: _jsx("nav", __assign({ className: classNames(type === TabNavigationType.default
                            ? '-mb-px flex space-x-8'
                            : 'flex space-x-4'), "aria-label": "Tabs" }, { children: tabItems.map(function (tab) { return (_jsxs("button", __assign({ type: "button", className: type === TabNavigationType.default
                                ? classNames(tab.current
                                    ? 'border-primary-500 text-primary-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'group inline-flex items-center', 'py-4 px-1 border-b-2 font-medium text-sm')
                                : classNames(tab.current
                                    ? 'bg-primary-100 text-primary-700'
                                    : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md'), "aria-current": tab.current ? 'page' : undefined, onClick: function (e) {
                                e.preventDefault();
                                handleItemChange(tab.name);
                            } }, { children: [showIcons && tab.icon && (_jsx(tab.icon, { className: classNames(tab.current
                                        ? 'text-primary-500'
                                        : 'text-gray-400 group-hover:text-gray-500', '-ml-0.5 mr-2 h-5 w-5'), "aria-hidden": "true" }, void 0)), _jsx("span", { children: tab.name }, void 0), tab.count ? (_jsx("span", __assign({ className: classNames(tab.current
                                        ? 'bg-primary-100 text-primary-600'
                                        : 'bg-gray-100 text-gray-900', 'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block') }, { children: tab.count }), void 0)) : null] }), tab.name)); }) }), void 0) }), void 0) }), void 0)] }, void 0));
};
export var TabNavigation = Object.assign(TabNavigationComponent, {});
export default TabNavigation;
