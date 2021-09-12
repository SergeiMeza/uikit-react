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
import { Switch } from '@headlessui/react';
import { classNames } from '../../helpers/methods';
var ToggleComponent = function (_a) {
    var _b = _a.enabled, enabled = _b === void 0 ? false : _b, _c = _a.setEnabled, setEnabled = _c === void 0 ? function () { } : _c;
    return (_jsxs(Switch, __assign({ checked: enabled, onChange: setEnabled, className: classNames(enabled ? 'bg-primary-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500') }, { children: [_jsx("span", __assign({ className: "sr-only" }, { children: "Use setting" }), void 0), _jsx("span", { "aria-hidden": "true", className: classNames(enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200') }, void 0)] }), void 0));
};
export var Toggle = Object.assign(ToggleComponent, {});
export default Toggle;
