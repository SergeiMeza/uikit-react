import React from 'react';
export declare type BadgeProps = {
    title?: string;
    size?: BadgeSize;
    shape?: BadgeShape;
    color?: BadgeColor;
    dot?: boolean;
    dotColor?: DotColor;
    removeButton?: boolean;
    removeButtonColor?: RemoveButtonColor;
    onRemoveButtonClick?: () => void;
};
declare enum BadgeSize {
    small = "inline-flex items-center px-1.5 py-0.5 text-xs font-medium",
    large = "inline-flex items-center px-2 py-0.5 text-sm font-medium"
}
declare enum BadgeShape {
    rounded = "rounded-full",
    default = "rounded"
}
declare enum BadgeColor {
    gray = "bg-gray-100 text-gray-800",
    red = "bg-red-100 text-red-800",
    yellow = "bg-yellow-100 text-yellow-800",
    green = "bg-green-100 text-green-800",
    blue = "bg-blue-100 text-blue-800",
    indigo = "bg-indigo-100 text-indigo-800",
    purple = "bg-purple-100 text-purple-800",
    pink = "bg-pink-100 text-pink-800",
    primary = "bg-primary-100 text-primary-800"
}
declare enum DotColor {
    gray = "text-gray-400",
    red = "text-red-400",
    yellow = "text-yellow-400",
    green = "text-green-400",
    blue = "text-blue-400",
    indigo = "text-indigo-400",
    purple = "text-purple-400",
    pink = "text-pink-400",
    primary = "text-primary-400"
}
declare enum RemoveButtonColor {
    gray = "text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500",
    red = "text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500",
    yellow = "text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500",
    green = "text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500",
    blue = "text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-500",
    indigo = "text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500",
    purple = "text-purple-400 hover:bg-purple-200 hover:text-purple-500 focus:bg-purple-500",
    pink = "text-pink-400 hover:bg-pink-200 hover:text-pink-500 focus:bg-pink-500",
    primary = "text-primary-400 hover:bg-primary-200 hover:text-primary-500 focus:bg-primary-500"
}
declare type BadgeRemoveButtonProps = {
    color: RemoveButtonColor;
    onClick?: () => void;
};
export declare const Badge: React.FC<BadgeProps> & {
    size: typeof BadgeSize;
    shape: typeof BadgeShape;
    color: typeof BadgeColor;
    dotColor: typeof DotColor;
    RemoveButton: React.FC<BadgeRemoveButtonProps> & {
        color: typeof RemoveButtonColor;
    };
};
export default Badge;
