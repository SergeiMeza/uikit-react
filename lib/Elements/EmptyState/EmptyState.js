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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from '../../helpers/methods';
var EmptyStateType;
(function (EmptyStateType) {
    EmptyStateType["simple"] = "simple";
    EmptyStateType["dashedBorder"] = "dashedBorder";
})(EmptyStateType || (EmptyStateType = {}));
var EmptyStateComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.type, type = _c === void 0 ? EmptyStateType.dashedBorder : _c, _d = _a.icon, icon = _d === void 0 ? (_jsx("svg", __assign({ className: "mx-auto h-12 w-12 text-gray-400", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", fill: "none", viewBox: "0 0 48 48", "aria-hidden": "true" }, { children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" }, void 0) }), void 0)) : _d, _e = _a.title, title = _e === void 0 ? 'Create a new database' : _e, _f = _a.description, description = _f === void 0 ? 'Get started by creating a new database' : _f, _g = _a.button, button = _g === void 0 ? undefined : _g, _h = _a.onClick, onClick = _h === void 0 ? function () { return console.log('on call to action'); } : _h, _j = _a.onDragOver, onDragOver = _j === void 0 ? undefined : _j, _k = _a.onDrop, onDrop = _k === void 0 ? undefined : _k, children = _a.children;
    var dashedBorderView = (_jsx("div", { children: _jsx("button", __assign({ type: "button", className: classNames(className, 'relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'), onClick: function (e) {
                e.preventDefault();
                onClick();
            }, onDragOver: onDragOver, onDrop: onDrop }, { children: children !== null && children !== void 0 ? children : (_jsxs(_Fragment, { children: [icon, title && typeof title === 'string' ? (_jsx("span", __assign({ className: "mt-2 block text-sm font-medium text-gray-900" }, { children: title }), void 0)) : (title), description && (_jsx("p", __assign({ className: "mt-1 text-sm text-gray-500" }, { children: description }), void 0))] }, void 0)) }), void 0) }, void 0));
    var simpleView = (_jsxs("div", __assign({ className: "text-center" }, { children: [icon, title && (_jsx("h3", __assign({ className: "mt-2 text-sm font-medium text-gray-900" }, { children: title }), void 0)), description && (_jsx("p", __assign({ className: "mt-1 text-sm text-gray-500" }, { children: description }), void 0)), _jsx("div", __assign({ className: "mt-6" }, { children: button }), void 0)] }), void 0));
    return type === EmptyStateType.dashedBorder ? dashedBorderView : simpleView;
};
export var EmptyState = Object.assign(EmptyStateComponent, {});
export default EmptyState;
