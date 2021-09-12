import React from 'react';
export declare type ButtonProps = {
    className?: string;
    title?: string;
    size?: ButtonSize;
    shape?: ButtonShape;
    buttonType?: ButtonType;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
declare enum ButtonSize {
    small = "px-2.5 py-1.5 text-xs",
    medium = "px-3 py-2 text-sm leading-4",
    large = "px-4 py-2 text-sm",
    xl = "px-4 py-2 text-base",
    xxl = "px-6 py-3 text-base"
}
declare enum ButtonType {
    primary = "border border-transparent shadow-sm text-white bg-primary-600 hover:bg-primary-700",
    secondary = "border border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200",
    outline = "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
    transparent = "text-gray-700"
}
declare enum ButtonShape {
    default = "rounded rounded-md",
    round = "rounded-full",
    circular = "rounded-full p-2"
}
export declare type InlineButtonProps = {
    className?: string;
    title?: string;
    href?: string;
    to?: string;
};
export declare const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> & {
    size: typeof ButtonSize;
    buttonType: typeof ButtonType;
    shape: typeof ButtonShape;
    focus: string;
    Inline: React.FC<InlineButtonProps>;
};
export default Button;
