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
import { jsx as _jsx } from "react/jsx-runtime";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
var CodeComponent = function (_a) {
    var children = _a.children;
    return (_jsx(SyntaxHighlighter, __assign({ language: "tsx", style: style, showLineNumbers: true, wrapLongLines: true }, { children: children }), void 0));
};
export default CodeComponent;
