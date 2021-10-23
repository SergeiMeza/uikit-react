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
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, } from '@heroicons/react/solid';
import { Anchor } from '../..';
var PaginationComponent = function (_a) {
    var _b = _a.currentPage, currentPage = _b === void 0 ? 4 : _b, _c = _a.pages, pages = _c === void 0 ? Array.from(Array(10).keys()).map(function (_) { return ({ href: '#' }); }) : _c, _d = _a.previousText, previousText = _d === void 0 ? 'Previous' : _d, _e = _a.nextText, nextText = _e === void 0 ? 'Next' : _e, _f = _a.previousProps, previousProps = _f === void 0 ? { href: '#' } : _f, _g = _a.nextProps, nextProps = _g === void 0 ? { href: '#' } : _g;
    return (_jsxs("nav", __assign({ className: "border-t border-gray-200 px-4 flex items-center justify-between sm:px-0" }, { children: [_jsx("div", __assign({ className: "-mt-px w-0 flex-1 flex" }, { children: _jsxs(Anchor, __assign({}, previousProps, { className: "border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300" }, { children: [_jsx(ArrowNarrowLeftIcon, { className: "mr-3 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0), previousText] }), void 0) }), void 0), _jsx("div", __assign({ className: "hidden md:-mt-px md:flex" }, { children: pages.map(function (p, i) { return (_createElement(Anchor, __assign({}, p, { className: i === currentPage
                        ? 'border-primary-500 text-primary-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium', key: "p-" + i }), i + 1)); }) }), void 0), _jsx("div", __assign({ className: "-mt-px w-0 flex-1 flex justify-end" }, { children: _jsxs(Anchor, __assign({}, nextProps, { className: "border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300" }, { children: [nextText, _jsx(ArrowNarrowRightIcon, { className: "ml-3 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0)] }), void 0) }), void 0)] }), void 0));
};
export var Pagination = Object.assign(PaginationComponent, {});
export default Pagination;
