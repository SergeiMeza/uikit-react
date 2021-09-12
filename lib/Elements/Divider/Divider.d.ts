import React from 'react';
import { ButtonProps } from '../Button/Button';
export declare type DividerProps = {
    className?: string;
    title?: string;
    titleSize?: DividerTitleSize;
    contentPosition?: DividerContentPosition;
};
declare enum DividerContentPosition {
    start = "justify-start",
    center = "justify-center",
    end = "justify-end"
}
declare enum DividerTitleSize {
    small = "text-sm text-gray-500",
    medium = "text-base font-medium text-gray-700",
    large = "text-lg font-medium text-gray-900"
}
export declare const Divider: React.FC<DividerProps> & {
    Text: React.FC<{}>;
    Button: React.FC<ButtonProps>;
    titleSize: typeof DividerTitleSize;
    contentPosition: typeof DividerContentPosition;
};
export default Divider;
