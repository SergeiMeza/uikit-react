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
import { useState, useRef, useCallback, useEffect } from 'react';
export var ResizableContainer = function (_a) {
    var _b = _a.minWidth, minWidth = _b === void 0 ? 100 : _b, children = _a.children;
    var containerRef = useRef(null);
    var _c = useState(false), isResizing = _c[0], setIsResizing = _c[1];
    var _d = useState(null), containerWidth = _d[0], setContainerWidth = _d[1];
    var startResizing = useCallback(function () {
        setIsResizing(true);
    }, []);
    var stopResizing = useCallback(function () {
        setIsResizing(false);
    }, []);
    var resize = useCallback(function (mouseMoveEvent) {
        if (isResizing) {
            setContainerWidth(mouseMoveEvent.clientX -
                (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current.getBoundingClientRect().left));
        }
    }, [isResizing]);
    useEffect(function () {
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResizing);
        return function () {
            window.removeEventListener('mousemove', resize);
            window.removeEventListener('mouseup', stopResizing);
        };
    }, [resize, stopResizing]);
    return (_jsxs("div", __assign({ ref: containerRef, className: "flex flex-grow-0 flex-shrink-0 min-x-min max-w-6xl bg-gray-200 border", style: { width: containerWidth }, onMouseDown: function (e) { return e.preventDefault(); } }, { children: [children, _jsx("div", { className: "container-resizer", onMouseDown: startResizing }, void 0)] }), void 0));
};
