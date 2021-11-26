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
import { classNames } from '../..';
var AnimatedBlobBackgroundType;
(function (AnimatedBlobBackgroundType) {
    AnimatedBlobBackgroundType[AnimatedBlobBackgroundType["small"] = 0] = "small";
    AnimatedBlobBackgroundType[AnimatedBlobBackgroundType["medium"] = 1] = "medium";
    AnimatedBlobBackgroundType[AnimatedBlobBackgroundType["large"] = 2] = "large";
    AnimatedBlobBackgroundType[AnimatedBlobBackgroundType["extraLarge"] = 3] = "extraLarge";
})(AnimatedBlobBackgroundType || (AnimatedBlobBackgroundType = {}));
var AnimatedBlobBackgroundComponent = function (_a) {
    var _b;
    var _c = _a.type, type = _c === void 0 ? AnimatedBlobBackgroundType.small : _c, _d = _a.colors, colors = _d === void 0 ? ['bg-purple-300', 'bg-yellow-300', 'bg-pink-300', 'bg-skyBlue-300'] : _d, content = _a.content, children = _a.children;
    var sampleContent = (_jsxs("div", __assign({ className: "space-y-4" }, { children: [_jsxs("div", __assign({ className: "p-5 bg-white rounded-lg flex items-center justify-between space-x-8" }, { children: [_jsx("div", __assign({ className: "flex-1" }, { children: _jsx("div", { className: "h-4 w-48 bg-gray-300 rounded" }, void 0) }), void 0), _jsx("div", { children: _jsx("div", { className: "w-24 h-10 rounded-lg bg-purple-300" }, void 0) }, void 0)] }), void 0), _jsxs("div", __assign({ className: "p-5 bg-white rounded-lg flex items-center justify-between space-x-8" }, { children: [_jsx("div", __assign({ className: "flex-1" }, { children: _jsx("div", { className: "h-4 w-56 bg-gray-300 rounded" }, void 0) }), void 0), _jsx("div", { children: _jsx("div", { className: "w-24 h-10 rounded-lg bg-yellow-300" }, void 0) }, void 0)] }), void 0), _jsxs("div", __assign({ className: "p-5 bg-white rounded-lg flex items-center justify-between space-x-8" }, { children: [_jsx("div", __assign({ className: "flex-1" }, { children: _jsx("div", { className: "h-4 w-44 bg-gray-300 rounded" }, void 0) }), void 0), _jsx("div", { children: _jsx("div", { className: "w-24 h-10 rounded-lg bg-pink-300" }, void 0) }, void 0)] }), void 0)] }), void 0));
    var containerWidth = type === AnimatedBlobBackgroundType.extraLarge
        ? 'max-w-3xl'
        : type === AnimatedBlobBackgroundType.large
            ? 'max-w-3xl'
            : type === AnimatedBlobBackgroundType.medium
                ? 'max-w-2xl'
                : 'max-w-lg';
    var smallBackground = (_jsxs(_Fragment, { children: [_jsx("div", { className: classNames(colors[0 % colors.length], 'absolute top-0 -left-8', 'w-80 h-80 rounded-full', 'mix-blend-multiply filter blur-2xl opacity-70', 'animate-blob ease-in-out') }, void 0), _jsx("div", { className: classNames(colors[1 % colors.length], 'absolute bottom-0 -right-8', 'w-80 h-80 rounded-full', 'mix-blend-multiply filter blur-2xl opacity-70', 'animate-blob ease-in-out', 'animation-delay-4000') }, void 0)] }, void 0));
    var mediumBackground = (_jsxs(_Fragment, { children: [_jsx("div", { className: classNames(colors[0 % colors.length], 'absolute top-0 -left-2', 'w-96 h-96 rounded-full', 'mix-blend-multiply filter blur-2xl opacity-70', 'animate-blob ease-in-out') }, void 0), _jsx("div", { className: classNames(colors[1 % colors.length], 'absolute bottom-0 -right-2', 'w-96 h-96 rounded-full', 'mix-blend-multiply filter blur-2xl opacity-70', 'animate-blob ease-in-out', 'animation-delay-4000') }, void 0)] }, void 0));
    var largeBackground = (_jsxs(_Fragment, { children: [_jsx("div", { className: classNames(colors[0 % colors.length], 'absolute -top-4 -left-4', 'w-80 h-80 rounded-full', 'mix-blend-multiply filter blur-2xl opacity-80', 'animate-blob ease-in-out') }, void 0), _jsx("div", { className: classNames(colors[1 % colors.length], 'absolute top-10 right-0 left-0 mx-auto', 'w-64 h-64 rounded-full', 'mix-blend-multiply filter blur-3xl opacity-70', 'animate-blob ease-in-out', 'animation-delay-2000') }, void 0), _jsx("div", { className: classNames(colors[2 % colors.length], 'absolute -bottom-4 -right-4', 'w-72 h-72 rounded-full', 'mix-blend-multiply filter blur-2xl opacity-60', 'animate-blob ease-in-out', 'animation-delay-4000') }, void 0)] }, void 0));
    var extraLargeBackground = (_jsxs(_Fragment, { children: [_jsx("div", { className: classNames(colors[0 % colors.length], 'absolute -top-4 left-8', 'w-96 h-96 rounded-full', 'mix-blend-multiply filter blur-2xl opacity-80', 'animate-blob ease-in-out') }, void 0), _jsx("div", { className: classNames(colors[1 % colors.length], 'absolute -top-4 right-8', 'w-72 h-72 rounded-full', 'mix-blend-multiply filter blur-3xl opacity-60', 'animate-blob ease-in-out', 'animation-delay-2000') }, void 0), _jsx("div", { className: classNames(colors[3 % colors.length], 'absolute -bottom-8 right-12', 'w-80 h-80 rounded-full', 'mix-blend-multiply filter blur-2xl opacity-70', 'animate-blob ease-in-out', 'animation-delay-6000') }, void 0), _jsx("div", { className: classNames(colors[2 % colors.length], 'absolute -bottom-4 left-0', 'w-72 h-72 rounded-full', 'mix-blend-multiply filter blur-3xl opacity-70', 'animate-blob ease-in-out', 'animation-delay-4000') }, void 0)] }, void 0));
    return (_jsx("div", __assign({ className: "flex items-center justify-center px-16" }, { children: _jsxs("div", __assign({ className: classNames('relative w-full', containerWidth) }, { children: [type === AnimatedBlobBackgroundType.small
                    ? smallBackground
                    : type === AnimatedBlobBackgroundType.medium
                        ? mediumBackground
                        : type === AnimatedBlobBackgroundType.large
                            ? largeBackground
                            : extraLargeBackground, _jsx("div", __assign({ className: "m-8 relative" }, { children: (_b = content !== null && content !== void 0 ? content : children) !== null && _b !== void 0 ? _b : sampleContent }), void 0)] }), void 0) }), void 0));
};
var AnimatedBlobBackground = Object.assign(AnimatedBlobBackgroundComponent, {
    type: AnimatedBlobBackgroundType,
});
export default AnimatedBlobBackground;
