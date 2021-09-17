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
import { DocumentIcon } from '@heroicons/react/outline';
import { useEffect } from 'react';
import { classNames } from '../../helpers/methods';
var FilePreviewType;
(function (FilePreviewType) {
    FilePreviewType["default"] = "default";
    FilePreviewType["square"] = "square";
    FilePreviewType["circle"] = "circle";
})(FilePreviewType || (FilePreviewType = {}));
var FilePreviewComponent = function (_a) {
    var file = _a.file, _b = _a.type, type = _b === void 0 ? FilePreviewType.default : _b;
    useEffect(function () {
        if (file.type.includes('image')) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                var _a, _b, _c;
                (_a = document
                    .getElementById(file.name)) === null || _a === void 0 ? void 0 : _a.setAttribute('src', String((_c = (_b = e === null || e === void 0 ? void 0 : e.target) === null || _b === void 0 ? void 0 : _b.result) !== null && _c !== void 0 ? _c : ''));
            };
        }
        else if (file.type.includes('video')) {
            var media = URL.createObjectURL(file);
            var source = document.getElementById(file.name);
            var video = document.getElementById("video-" + file.name);
            source.src = media;
            video.play();
        }
    }, [file]);
    var imagePreviewClassNames = classNames(type === FilePreviewType.default ? 'w-auto max-w-lg rounded' : '', type === FilePreviewType.square ? 'w-32 h-32 rounded' : '', type === FilePreviewType.circle ? 'w-32 h-32 rounded-full' : '', 'object-cover');
    return (_jsx("div", __assign({ className: type === FilePreviewType.circle
            ? 'border border-gray-300 rounded-full'
            : 'border border-gray-300 rounded' }, { children: file.type.includes('image') ? (_jsx("img", { className: imagePreviewClassNames, src: "", alt: file.name, id: file.name }, void 0)) : file.type.includes('video') ? (_jsxs("video", __assign({ id: "video-" + file.name, width: "320", height: "240", controls: true }, { children: [_jsx("source", { id: file.name, src: file.name, type: file.type }, void 0), "Your browser does not support the video tag."] }), void 0)) : (_jsxs("div", __assign({ className: "flex flex-col items-center px-4 py-4" }, { children: [_jsx(DocumentIcon, { className: "text-gray-600 h-8 w-8" }, void 0), _jsx("span", __assign({ className: "text-sm font-medium text-gray-900 mt-2" }, { children: file.name }), void 0)] }), void 0)) }), void 0));
};
export var FilePreview = Object.assign(FilePreviewComponent, {
    type: FilePreviewType,
});
export default FilePreview;
