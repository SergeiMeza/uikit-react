import React from 'react';
export declare type SlideOverProps = {
    header?: JSX.Element;
    title?: string | JSX.Element;
    backgroundOverlay?: boolean;
    stickyFooter?: JSX.Element;
    closeButtonPosition?: SlideOverCloseButtonPosition;
    type?: SlideOverType;
    show: boolean;
    setShow: (show: boolean) => void;
};
declare enum SlideOverCloseButtonPosition {
    inside = "inside",
    outside = "outside"
}
declare enum SlideOverType {
    wide = "max-w-2xl",
    default = "max-w-md"
}
export declare type SlideOverTitleProps = {
    title?: string;
    textColor?: string;
};
export declare type SlideOverHeaderProps = {
    backgroundColor?: string;
    closeButtonColor?: string;
    setShow: (show: boolean) => void;
};
export declare type SlideOverStickyFooterProps = {
    border?: boolean;
    setShow: (show: boolean) => void;
};
export declare const SlideOver: React.FC<SlideOverProps> & {
    closeButtonPosition: typeof SlideOverCloseButtonPosition;
    type: typeof SlideOverType;
    Title: React.FC<SlideOverTitleProps>;
    Header: React.FC<SlideOverHeaderProps>;
    Footer: React.FC<SlideOverStickyFooterProps>;
};
export default SlideOver;
