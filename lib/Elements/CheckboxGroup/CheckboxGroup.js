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
var sampleData = [
    {
        name: 'comments',
        title: 'Comments',
        description: 'Get notified when someones posts a comment on a posting.',
        checked: false,
    },
    {
        name: 'candidates',
        title: 'Candidates',
        description: 'Get notified when a candidate applies for a job.',
        checked: false,
    },
    {
        name: 'offers',
        title: 'Offers',
        description: 'Get notified when a candidate accepts or rejects an offer.',
        checked: false,
    },
];
var CheckboxGroupComponent = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Notifications' : _b, _c = _a.hiddenLabel, hiddenLabel = _c === void 0 ? false : _c, _d = _a.items, items = _d === void 0 ? sampleData : _d, _e = _a.onItemsChange, onItemsChange = _e === void 0 ? function (data) {
        console.log(data);
    } : _e;
    var _f = useState(items.slice()), checkItems = _f[0], setCheckItems = _f[1];
    function handleItemChange(element) {
        var _checkItems = checkItems.slice();
        var itemIndex = _checkItems.findIndex(function (item) { return item.name === element.target.name; });
        _checkItems[itemIndex].checked = element.target.checked;
        setCheckItems(_checkItems);
        onItemsChange(_checkItems);
    }
    return (_jsxs("fieldset", __assign({ className: "space-y-5" }, { children: [hiddenLabel ? (_jsx("legend", __assign({ className: "sr-only" }, { children: label }), void 0)) : (_jsx("legend", __assign({ className: "text-base font-medium text-gray-900" }, { children: label }), void 0)), checkItems.map(function (item) { return (_jsxs("div", __assign({ className: "relative flex items-start" }, { children: [_jsx("div", __assign({ className: "flex items-center h-5" }, { children: _jsx("input", { id: item.name, "aria-describedby": item.name + "-description", name: item.name, type: "checkbox", className: "focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded", defaultChecked: item.checked, onChange: handleItemChange }, void 0) }), void 0), _jsxs("div", __assign({ className: "ml-3 text-sm" }, { children: [_jsx("label", __assign({ htmlFor: "comments", className: "font-medium text-gray-700" }, { children: item.title }), void 0), _jsx("p", __assign({ id: item.name + "-description", className: "text-gray-500" }, { children: item.description }), void 0)] }), void 0)] }), item.name)); })] }), void 0));
};
export var CheckboxGroup = Object.assign(CheckboxGroupComponent, {});
export default CheckboxGroup;
