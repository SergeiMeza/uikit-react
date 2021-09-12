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
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { BanIcon, BellIcon, CheckIcon, DocumentTextIcon, ExclamationIcon, FingerPrintIcon, GiftIcon, HeartIcon, InformationCircleIcon, LockClosedIcon, LockOpenIcon, MailIcon, QuestionMarkCircleIcon, SparklesIcon, TrendingDownIcon, TrendingUpIcon, XIcon, } from '@heroicons/react/outline';
import { classNames } from '../../helpers/methods';
import Button from '../Button/Button';
var ModalSuccessIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-green-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-green-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(CheckIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalFailureIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-red-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-red-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(XIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalQuestionMarkIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-gray-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-gray-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(QuestionMarkCircleIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalBellIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-gray-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-gray-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(BellIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalInformationIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-gray-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-gray-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(InformationCircleIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalBanIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-gray-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-gray-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(BanIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalDocumentIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-gray-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-gray-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(DocumentTextIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalAlertIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-yellow-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-yellow-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(ExclamationIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalGiftIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-green-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-green-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(GiftIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalSecurityIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-gray-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-gray-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(FingerPrintIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalHeartIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-red-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-red-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(HeartIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalMailIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-gray-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-gray-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(MailIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalLockClosedIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-gray-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-gray-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(LockClosedIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalLockOpenIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-gray-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-gray-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(LockOpenIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalSparklesIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-yellow-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-yellow-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(SparklesIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalTrendingUpIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-green-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-green-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(TrendingUpIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalTrendingDownIcon = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? 'bg-red-100' : _b, _c = _a.iconColor, iconColor = _c === void 0 ? 'text-red-600' : _c, _d = _a.shape, shape = _d === void 0 ? 'rounded-full' : _d, _e = _a.bgSize, bgSize = _e === void 0 ? 'h-12 w-12' : _e, _f = _a.iconSize, iconSize = _f === void 0 ? 'h-6 w-6' : _f;
    return (_jsx("div", __assign({ className: classNames(bgColor, bgSize, shape, 'mx-auto flex items-center justify-center') }, { children: _jsx(TrendingDownIcon, { className: classNames(iconColor, iconSize), "aria-hidden": "true" }, void 0) }), void 0));
};
var ModalCardButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.title, title = _c === void 0 ? 'Dismiss' : _c, props = __rest(_a, ["className", "title"]);
    return (_jsx(Button, __assign({ className: classNames(className, 'inline-flex justify-center w-full px-4 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm'), title: title }, props), void 0));
};
var ModalCard = function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'Your company products are trending right now' : _b, _c = _a.body, body = _c === void 0 ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.' : _c, _d = _a.setShow, setShow = _d === void 0 ? function () { } : _d, _e = _a.cta, cta = _e === void 0 ? null : _e;
    return (_jsxs("div", __assign({ className: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" }, { children: [_jsxs("div", { children: [_jsx(ModalTrendingUpIcon, {}, void 0), _jsxs("div", __assign({ className: "mt-3 text-center sm:mt-5" }, { children: [_jsx(Dialog.Title, __assign({ as: "h3", className: "text-lg leading-6 font-medium text-gray-900" }, { children: title }), void 0), _jsx("div", __assign({ className: "mt-2" }, { children: _jsx("p", __assign({ className: "text-sm text-gray-500" }, { children: body }), void 0) }), void 0)] }), void 0)] }, void 0), _jsx("div", __assign({ className: "mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense" }, { children: cta !== null && cta !== void 0 ? cta : (_jsxs(_Fragment, { children: [_jsx(ModalCardButton, { buttonType: Button.buttonType.outline, onClick: function () { return setShow(false); } }, void 0), _jsx(ModalCardButton, { title: "Promote", onClick: function () { return setShow(false); } }, void 0)] }, void 0)) }), void 0)] }), void 0));
};
var ModalComponent = function (_a) {
    var show = _a.show, setShow = _a.setShow, children = _a.children;
    return (_jsx(Transition.Root, __assign({ show: show, as: Fragment }, { children: _jsx(Dialog, __assign({ as: "div", className: "fixed z-10 inset-0 overflow-y-auto", onClose: setShow }, { children: _jsxs("div", __assign({ className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, { children: [_jsx(Transition.Child, __assign({ as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: _jsx(Dialog.Overlay, { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0) }), void 0), _jsx("span", __assign({ className: "hidden sm:inline-block sm:align-middle sm:h-screen", "aria-hidden": "true" }, { children: "\u200B" }), void 0), _jsx(Transition.Child, __assign({ as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }, { children: _jsx("div", __assign({ className: "inline-block align-bottom overflow-hidden transform transition-all sm:align-middle sm:max-w-sm sm:w-full" }, { children: _jsx(ModalCard, { setShow: setShow }, void 0) }), void 0) }), void 0)] }), void 0) }), void 0) }), void 0));
};
export var Modal = Object.assign(ModalComponent, {
    Card: ModalCard,
    SuccessIcon: ModalSuccessIcon,
    FailureIcon: ModalFailureIcon,
    QuestionMarkIcon: ModalQuestionMarkIcon,
    BellIcon: ModalBellIcon,
    InformationIcon: ModalInformationIcon,
    BanIcon: ModalBanIcon,
    DocumentIcon: ModalDocumentIcon,
    AlertIcon: ModalAlertIcon,
    SecurityIcon: ModalSecurityIcon,
    GiftIcon: ModalGiftIcon,
    HeartIcon: ModalHeartIcon,
    MailIcon: ModalMailIcon,
    LockClosedIcon: ModalLockClosedIcon,
    LockOpenIcon: ModalLockOpenIcon,
    SparklesIcon: ModalSparklesIcon,
    TrendingUpIcon: ModalTrendingUpIcon,
    TrendingDownIcon: ModalTrendingDownIcon,
});
export default Modal;
