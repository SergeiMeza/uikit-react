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
import { VerticalNavigation } from '../..';
var SidebarNavigationComponent = function (_a) {
    var _b = _a.icon, icon = _b === void 0 ? undefined : _b, items = _a.items, secondaryNavigationTitle = _a.secondaryNavigationTitle, secondaryItems = _a.secondaryItems, showIcons = _a.showIcons, onItemSelected = _a.onItemSelected, _c = _a.bottomSlot, bottomSlot = _c === void 0 ? undefined : _c;
    return (_jsxs("div", __assign({ className: "flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white" }, { children: [_jsxs("div", __assign({ className: "flex-1 flex flex-col pt-5 pb-4 overflow-y-auto" }, { children: [_jsx("div", __assign({ className: "flex items-center flex-shrink-0 px-4" }, { children: icon }), void 0), _jsx("nav", __assign({ className: "mt-5 flex-1 px-2 bg-white space-y-1", "aria-label": "Sidebar" }, { children: _jsx(VerticalNavigation, { items: items, secondaryNavigationTitle: secondaryNavigationTitle, secondaryItems: secondaryItems, showIcons: showIcons, onItemSelected: onItemSelected }, void 0) }), void 0)] }), void 0), bottomSlot && (_jsx("div", __assign({ className: "flex-shrink-0 flex border-t border-gray-200 p-4" }, { children: bottomSlot }), void 0))] }), void 0));
};
export var SidebarNavigation = Object.assign(SidebarNavigationComponent, {});
export default SidebarNavigation;
