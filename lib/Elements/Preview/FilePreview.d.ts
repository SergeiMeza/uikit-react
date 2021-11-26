import React from 'react';
export declare type FilePreviewProps = {
    file: File;
    type?: FilePreviewType;
};
declare enum FilePreviewType {
    default = "default",
    square = "square",
    circle = "circle"
}
export declare const FilePreview: React.FC<FilePreviewProps> & {
    type: typeof FilePreviewType;
};
export default FilePreview;
