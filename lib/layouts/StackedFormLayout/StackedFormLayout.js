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
import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Input/Input';
import SelectMenu from '../../Elements/SelectMenu/SelectMenu';
export var StackedFormLayout = function (_a) {
    return (_jsxs("form", __assign({ className: "space-y-8 divide-y divide-gray-200" }, { children: [_jsxs("div", __assign({ className: "space-y-8 divide-y divide-gray-200" }, { children: [_jsxs("div", { children: [_jsxs("div", { children: [_jsx("h3", __assign({ className: "text-lg leading-6 font-medium text-gray-900" }, { children: "Profile" }), void 0), _jsx("p", __assign({ className: "mt-1 text-sm text-gray-500" }, { children: "This information will be displayed publicly so be careful what you share." }), void 0)] }, void 0), _jsxs("div", __assign({ className: "mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6" }, { children: [_jsx("div", __assign({ className: "sm:col-span-4" }, { children: _jsx(Input, { label: "Username", placeholder: "", description: "", type: Input.type.text, trimmed: true, autoComplete: "username" }, void 0) }), void 0), _jsx("div", __assign({ className: "sm:col-span-6" }, { children: _jsx(Input.TextArea, { label: "About", name: "about", description: "Write a few sentences about yourself.", rows: 3, defaultValue: "" }, void 0) }), void 0), _jsxs("div", __assign({ className: "sm:col-span-6" }, { children: [_jsx("label", __assign({ htmlFor: "photo", className: "block text-sm font-medium text-gray-700" }, { children: "Photo" }), void 0), _jsxs("div", __assign({ className: "mt-1 flex items-center" }, { children: [_jsx("span", __assign({ className: "h-12 w-12 rounded-full overflow-hidden bg-gray-100" }, { children: _jsx("svg", __assign({ className: "h-full w-full text-gray-300", fill: "currentColor", viewBox: "0 0 24 24" }, { children: _jsx("path", { d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" }, void 0) }), void 0) }), void 0), _jsx(Button, { className: "ml-5", type: "button", title: "Change", buttonType: Button.buttonType.outline, size: Button.size.medium, onClick: function () { return console.log('onFileUpload'); } }, void 0)] }), void 0)] }), void 0), _jsx("div", __assign({ className: "sm:col-span-6" }, { children: _jsx(Input.File, { label: "Cover photo", name: "coverPhoto", accept: "image/*,.jpeg,.jpg,.png,.gif" }, void 0) }), void 0)] }), void 0)] }, void 0), _jsxs("div", __assign({ className: "pt-8" }, { children: [_jsxs("div", { children: [_jsx("h3", __assign({ className: "text-lg leading-6 font-medium text-gray-900" }, { children: "Personal Information" }), void 0), _jsx("p", __assign({ className: "mt-1 text-sm text-gray-500" }, { children: "Use a permanent address where you can receive mail." }), void 0)] }, void 0), _jsxs("div", __assign({ className: "mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6" }, { children: [_jsx("div", __assign({ className: "sm:col-span-3" }, { children: _jsx(Input, { type: "text", label: "First name", name: "firstName", placeholder: "", autoComplete: "given-name", description: "" }, void 0) }), void 0), _jsx("div", __assign({ className: "sm:col-span-3" }, { children: _jsx(Input, { type: "text", label: "Last name", name: "lastName", placeholder: "", autoComplete: "family-name", description: "" }, void 0) }), void 0), _jsx("div", __assign({ className: "sm:col-span-4" }, { children: _jsx(Input, { type: Input.type.email, label: "Email address", name: "email", placeholder: "", autoComplete: "email", description: "" }, void 0) }), void 0), _jsx("div", __assign({ className: "sm:col-span-3" }, { children: _jsx(SelectMenu, { label: "Country / Region", name: "country", autoComplete: "country", options: [
                                                { name: 'United States', value: 'usa' },
                                                { name: 'Canada', value: 'canada' },
                                                { name: 'Mexico', value: 'mexico' },
                                                { name: 'Japan', value: 'japan' },
                                            ], selectedItem: { name: 'United States', value: 'usa' } }, void 0) }), void 0), _jsx("div", __assign({ className: "sm:col-span-6" }, { children: _jsx(Input, { type: "text", autoComplete: "street-address", name: "streetAddress", label: "Street address", placeholder: "", description: "" }, void 0) }), void 0), _jsx("div", __assign({ className: "sm:col-span-2" }, { children: _jsx(Input, { type: "text", autoComplete: "address-level2", name: "city", label: "City", placeholder: "", description: "" }, void 0) }), void 0), _jsx("div", __assign({ className: "sm:col-span-2" }, { children: _jsx(Input, { type: "text", autoComplete: "address-level1", name: "state", label: "State / Province", placeholder: "", description: "" }, void 0) }), void 0), _jsx("div", __assign({ className: "sm:col-span-2" }, { children: _jsx(Input, { type: "text", autoComplete: "postal-code", name: "zip", label: "ZIP / Postal", placeholder: "", description: "" }, void 0) }), void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: "pt-8" }, { children: [_jsxs("div", { children: [_jsx("h3", __assign({ className: "text-lg leading-6 font-medium text-gray-900" }, { children: "Notifications" }), void 0), _jsx("p", __assign({ className: "mt-1 text-sm text-gray-500" }, { children: "We'll always let you know about important changes, but you pick what else you want to hear about." }), void 0)] }, void 0), _jsxs("div", __assign({ className: "mt-6" }, { children: [_jsx(Input.CheckboxGroup, { label: "By Email", items: [
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
                                        ] }, void 0), _jsx(Input.RadioGroup, {}, void 0)] }), void 0)] }), void 0)] }), void 0), _jsx("div", __assign({ className: "pt-5" }, { children: _jsxs("div", __assign({ className: "flex justify-end" }, { children: [_jsx(Button, { type: "button", title: "Cancel", buttonType: Button.buttonType.outline, size: Button.size.large }, void 0), _jsx(Button, { className: "ml-3", type: "submit", title: "Save", size: Button.size.large }, void 0)] }), void 0) }), void 0)] }), void 0));
};
export default StackedFormLayout;
