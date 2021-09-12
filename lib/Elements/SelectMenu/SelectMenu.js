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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline';
import { Fragment, useEffect, useState, } from 'react';
import { classNames } from '../../helpers/methods';
var sampleOptions = [
    { name: 'USA', value: 'usa' },
    { name: 'Canada', value: 'canada' },
    { name: 'EU', value: 'eu' },
];
var SelectMenuType;
(function (SelectMenuType) {
    SelectMenuType["native"] = "native";
    SelectMenuType["custom"] = "custom";
})(SelectMenuType || (SelectMenuType = {}));
var SelectMenuComponent = function (_a) {
    var _b = _a.type, type = _b === void 0 ? SelectMenuType.native : _b, _c = _a.name, name = _c === void 0 ? 'location' : _c, _d = _a.label, label = _d === void 0 ? 'Location' : _d, _e = _a.options, options = _e === void 0 ? sampleOptions : _e, _f = _a.selectedItem, selectedItem = _f === void 0 ? options[0] : _f, _g = _a.onItemSelected, onItemSelected = _g === void 0 ? function (item) { return console.log('item selected', item.name); } : _g, props = __rest(_a, ["type", "name", "label", "options", "selectedItem", "onItemSelected"]);
    var _h = useState(selectedItem), selected = _h[0], setSelected = _h[1];
    useEffect(function () {
        if (selected) {
            onItemSelected(selected);
        }
    }, [selected, onItemSelected]);
    function handleNativeChange(element) {
        var selectedElement = options.find(function (item) { return item.value === element.target.value; });
        onItemSelected(selectedElement);
    }
    var nativeSelectMenu = (_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: name, className: "block text-sm font-medium text-gray-700" }, { children: label }), void 0), _jsx("select", __assign({ id: name, name: name, className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md", defaultValue: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value, onChange: handleNativeChange }, props, { children: options.map(function (item) { return (_jsx("option", __assign({ value: item.value }, { children: item.name }), item.name)); }) }), void 0)] }, void 0));
    var customSelectMenu = (_jsx(Listbox, __assign({ value: selected, onChange: setSelected }, { children: function (_a) {
            var open = _a.open;
            return (_jsxs(_Fragment, { children: [_jsx(Listbox.Label, __assign({ className: "block text-sm font-medium text-gray-700" }, { children: label }), void 0), _jsxs("div", __assign({ className: "mt-1 relative" }, { children: [_jsxs(Listbox.Button, __assign({ className: "bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, { children: [_jsx("span", __assign({ className: "block truncate" }, { children: selected.name }), void 0), _jsx("span", __assign({ className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, { children: _jsx(SelectorIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0) }), void 0)] }), void 0), _jsx(Transition, __assign({ show: open, as: Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: _jsx(Listbox.Options, __assign({ className: "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" }, { children: options.map(function (options) { return (_jsx(Listbox.Option, __assign({ className: function (_a) {
                                            var active = _a.active;
                                            return classNames(active ? 'text-white bg-primary-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9');
                                        }, value: options }, { children: function (_a) {
                                            var selected = _a.selected, active = _a.active;
                                            return (_jsxs(_Fragment, { children: [_jsx("span", __assign({ className: classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate') }, { children: options.name }), void 0), selected ? (_jsx("span", __assign({ className: classNames(active ? 'text-white' : 'text-primary-600', 'absolute inset-y-0 right-0 flex items-center pr-4') }, { children: _jsx(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0) }), void 0)) : null] }, void 0));
                                        } }), "" + options.name)); }) }), void 0) }), void 0)] }), void 0)] }, void 0));
        } }), void 0));
    return type === SelectMenuType.native ? nativeSelectMenu : customSelectMenu;
};
export var SelectMenu = Object.assign(SelectMenuComponent, {
    type: SelectMenuType,
});
export default SelectMenu;
