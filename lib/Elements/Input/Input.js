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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import EmptyState from '../EmptyState/EmptyState';
import { FilePreview } from '../FilePreview/FilePreview';
import { classNames } from '../../helpers/methods';
var InputType;
(function (InputType) {
    InputType["text"] = "text";
    InputType["email"] = "email";
    InputType["password"] = "password";
    InputType["search"] = "search";
    InputType["url"] = "url";
})(InputType || (InputType = {}));
var InputComponent = function (_a) {
    var _b = _a.inputType, inputType = _b === void 0 ? InputType.text : _b, _c = _a.name, name = _c === void 0 ? 'email' : _c, _d = _a.hiddenLabel, hiddenLabel = _d === void 0 ? false : _d, _e = _a.label, label = _e === void 0 ? 'Email' : _e, _f = _a.placeholder, placeholder = _f === void 0 ? 'you@example.com' : _f, _g = _a.description, description = _g === void 0 ? "We'll only use this for spam." : _g, _h = _a.prefix, prefix = _h === void 0 ? '' : _h, _j = _a.trimmed, trimmed = _j === void 0 ? false : _j, _k = _a.cornerHint, cornerHint = _k === void 0 ? 'required' : _k, _l = _a.error, error = _l === void 0 ? undefined : _l, _m = _a.onChange, onChange = _m === void 0 ? function (value) { return console.log(name + ": " + value); } : _m, _o = _a.onFocus, onFocus = _o === void 0 ? function () { return console.log('input focus'); } : _o, _p = _a.onBlur, onBlur = _p === void 0 ? function () { return console.log('input blur'); } : _p, _q = _a.register, register = _q === void 0 ? undefined : _q, props = __rest(_a, ["inputType", "name", "hiddenLabel", "label", "placeholder", "description", "prefix", "trimmed", "cornerHint", "error", "onChange", "onFocus", "onBlur", "register"]);
    var inputRef = useRef(null);
    var _r = useState(''), currentValue = _r[0], setCurrentValue = _r[1];
    function handleChange(element) {
        if (trimmed) {
            setCurrentValue(element.target.value.trim());
        }
        else {
            setCurrentValue(element.target.value.trimStart());
        }
    }
    function handleFocus() {
        console.log('input', name, 'focus');
    }
    function handleBlur() {
        console.log('input', name, 'blur', currentValue);
        onChange(currentValue.trim());
        inputRef.current.value = currentValue.trim();
    }
    var themeInputComponentWrapperClassNames = classNames(error ? 'mt-1 relative rounded-md shadow-sm' : 'mt-1');
    var themeInputWrapperClassNames = classNames(error ? '' : ' shadow-sm', 'flex rounded-md');
    var themeInputClassNames = classNames(error
        ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none pr-10 focus:ring-red-500 focus:border-red-500'
        : 'focus:ring-primary-500 focus:border-primary-500', prefix ? 'rounded-r-md' : 'rounded-md', ' block w-full sm:text-sm border-gray-300');
    var prefixInputClassNames = classNames(error
        ? 'border-red-300 bg-red-50 text-red-500'
        : 'border-gray-300 bg-gray-50 text-gray-500', 'inline-flex items-center px-3 rounded-l-md border border-r-0  text-sm');
    var inputItem = (_jsxs("div", { children: [_jsxs("div", __assign({ className: "flex justify-between" }, { children: [_jsx("label", __assign({ htmlFor: name, className: hiddenLabel ? 'sr-only' : 'block text-sm font-medium text-gray-700' }, { children: label }), void 0), typeof cornerHint === 'string' ? (_jsx("span", __assign({ className: "text-sm text-gray-500", id: "email-optional" }, { children: cornerHint }), void 0)) : (cornerHint)] }), void 0), _jsxs("div", __assign({ className: themeInputComponentWrapperClassNames }, { children: [_jsxs("div", __assign({ className: themeInputWrapperClassNames }, { children: [prefix && _jsx("span", __assign({ className: prefixInputClassNames }, { children: prefix }), void 0), _jsx("input", __assign({ ref: inputRef, type: String(inputType), name: name, id: name, className: themeInputClassNames, placeholder: placeholder, "aria-describedby": error ? name + "-error" : name + "-description", onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, autoComplete: error ? undefined : props.autoComplete }, props, register), void 0)] }), void 0), error && (_jsx("div", __assign({ className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" }, { children: _jsx(ExclamationCircleIcon, { className: "h-5 w-5 text-red-500", "aria-hidden": "true" }, void 0) }), void 0))] }), void 0), error
                ? error && (_jsx("p", __assign({ className: "mt-2 text-sm text-red-600", id: "email-error" }, { children: error }), void 0))
                : description && (_jsx("p", __assign({ className: "mt-2 text-sm text-gray-500", id: name + "-description" }, { children: description }), void 0))] }, void 0));
    return inputItem;
};
var SecureInput = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(InputComponent, __assign({ type: InputType.password, name: "password", label: "Password", placeholder: "", description: "", trimmed: true }, props), void 0));
};
var CheckboxInput = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Remember me' : _b, _c = _a.name, name = _c === void 0 ? 'rememberMe' : _c, description = _a.description, _d = _a.onChange, onChange = _d === void 0 ? function (checked) { return console.log(name, checked); } : _d, onFocus = _a.onFocus, onBlur = _a.onBlur, _e = _a.register, register = _e === void 0 ? undefined : _e;
    function handleItemChange(element) {
        onChange(element.target.checked);
    }
    return (_jsxs("div", __assign({ className: "flex items-center" }, { children: [_jsx("input", __assign({ id: name, "aria-describedby": name + "-description", name: name, type: "checkbox", className: "h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded", onChange: handleItemChange, onFocus: onFocus, onBlur: onBlur }, register), void 0), _jsx("label", __assign({ htmlFor: name, className: "ml-2 block text-sm text-gray-900" }, { children: label }), void 0), _jsx("p", __assign({ id: name + "-description", className: "text-gray-500" }, { children: description }), void 0)] }), void 0));
};
var TextAreaInput = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'about' : _b, _c = _a.label, label = _c === void 0 ? 'About' : _c, _d = _a.description, description = _d === void 0 ? 'Write a few sentences about yourself.' : _d, _e = _a.rows, rows = _e === void 0 ? 3 : _e, _f = _a.defaultValue, defaultValue = _f === void 0 ? '' : _f, _g = _a.register, register = _g === void 0 ? undefined : _g, props = __rest(_a, ["name", "label", "description", "rows", "defaultValue", "register"]);
    return (_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: name, className: "block text-sm font-medium text-gray-700" }, { children: label }), void 0), _jsx("div", __assign({ className: "mt-1" }, { children: _jsx("textarea", __assign({ id: name, name: name, rows: rows, className: "shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border border-gray-300 rounded-md", defaultValue: defaultValue }, props, register), void 0) }), void 0), _jsx("p", __assign({ className: "mt-2 text-sm text-gray-500" }, { children: description }), void 0)] }, void 0));
};
var RadioGroupInput = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Push Notifications' : _b, _c = _a.description, description = _c === void 0 ? 'These are delivered via SMS to your mobile phone.' : _c, _d = _a.hiddenLabel, hiddenLabel = _d === void 0 ? false : _d, _e = _a.items, items = _e === void 0 ? [
        { name: 'pushNotifications', value: 'pushEverything', label: 'Everything' },
        { name: 'pushNotifications', value: 'pushEmail', label: 'Same as email' },
        {
            name: 'pushNotifications',
            value: 'pushNothing',
            label: 'No push notifications',
        },
    ] : _e, _f = _a.register, register = _f === void 0 ? undefined : _f;
    var formRadioGroup = (_jsxs("fieldset", __assign({ className: "mt-6" }, { children: [_jsxs("div", { children: [hiddenLabel ? (_jsx("legend", __assign({ className: "sr-only" }, { children: label }), void 0)) : (_jsx("legend", __assign({ className: "text-base font-medium text-gray-900" }, { children: label }), void 0)), _jsx("p", __assign({ className: "text-sm text-gray-500" }, { children: description }), void 0)] }, void 0), _jsx("div", __assign({ className: "mt-4 space-y-4" }, { children: items.map(function (item) { return (_jsxs("div", __assign({ className: "flex items-center" }, { children: [_jsx("input", __assign({ id: item.value, value: item.value, name: item.name, type: "radio", className: "focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300" }, register), void 0), _jsx("label", __assign({ htmlFor: item.value, className: "ml-3 block text-sm font-medium text-gray-700" }, { children: item.label }), void 0)] }), item.value)); }) }), void 0)] }), void 0));
    return formRadioGroup;
};
export var FileInput = function (_a) {
    var _b, _c, _d;
    var _e = _a.label, label = _e === void 0 ? '' : _e, _f = _a.hiddenLabel, hiddenLabel = _f === void 0 ? false : _f, _g = _a.name, name = _g === void 0 ? '' : _g, _h = _a.multiple, multiple = _h === void 0 ? false : _h, _j = _a.accept, accept = _j === void 0 ? undefined : _j, props = __rest(_a, ["label", "hiddenLabel", "name", "multiple", "accept"]);
    var _k = useState([]), selectedFiles = _k[0], setSelectedFiles = _k[1];
    var fileInputRef = useRef(null);
    function handleFileInputChange(e) {
        var _a;
        var files = Array.from((_a = e.target.files) !== null && _a !== void 0 ? _a : []);
        if (files.length) {
            setSelectedFiles(files !== null && files !== void 0 ? files : selectedFiles);
        }
    }
    return (_jsxs("div", { children: [hiddenLabel ? (_jsx("label", __assign({ htmlFor: name, className: "sr-only" }, { children: label }), void 0)) : (_jsx("label", __assign({ htmlFor: name, className: "block text-sm font-medium text-gray-700" }, { children: label }), void 0)), _jsx(EmptyState, __assign({ className: "mt-1", icon: (_b = props.icon) !== null && _b !== void 0 ? _b : (_jsx("svg", __assign({ className: "mx-auto h-12 w-12 text-gray-400", stroke: "currentColor", fill: "none", viewBox: "0 0 48 48", "aria-hidden": "true" }, { children: _jsx("path", { d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0) }), void 0)), title: (_c = props.title) !== null && _c !== void 0 ? _c : (_jsxs("span", { children: [_jsx("span", __assign({ className: "text-primary-600 hover:text-primary-500" }, { children: "Upload a file" }), void 0), ' ', "or drag and drop"] }, void 0)), description: (_d = props.description) !== null && _d !== void 0 ? _d : 'PNG, JPG, GIF up to 10MB', onClick: function () {
                    var _a;
                    (_a = fileInputRef === null || fileInputRef === void 0 ? void 0 : fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
                }, onDragOver: function (e) {
                    e.preventDefault();
                }, onDrop: function (e) {
                    if (multiple) {
                        setSelectedFiles(Array.from(e.dataTransfer.files));
                    }
                    else {
                        setSelectedFiles([Array.from(e.dataTransfer.files)[0]]);
                    }
                    e.preventDefault();
                } }, { children: selectedFiles.length > 0 ? (_jsx("div", __assign({ className: classNames(multiple ? 'grid grid-cols-3 gap-x-4' : 'flex') }, { children: selectedFiles.map(function (file) { return (_jsx(FilePreview, { file: file }, file.name)); }) }), void 0)) : null }), void 0), _jsx("input", { ref: fileInputRef, type: "file", name: name, multiple: multiple, onChange: handleFileInputChange, accept: accept, hidden: true }, void 0)] }, void 0));
};
export var Input = Object.assign(InputComponent, {
    type: InputType,
    Secure: SecureInput,
    Checkbox: CheckboxInput,
    TextArea: TextAreaInput,
    RadioGroup: RadioGroupInput,
    CheckboxGroup: CheckboxGroup,
    File: FileInput,
});
export default Input;
