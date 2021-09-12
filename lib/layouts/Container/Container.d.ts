import React from 'react';
export declare type ContainerProps = {
    className?: string;
    narrowContentConstraint?: string;
    containerType?: ContainerType;
};
declare enum ContainerType {
    paddedContent = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    fullWidthMobilePaddedContent = "max-w-7xl mx-auto sm:px-6 lg:px-8",
    fullWidthMobilePaddedContentBreakpoint = "container mx-auto px-4 sm:px-6 lg:px-8",
    paddedContentNarrow = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
}
export declare const Container: React.FC<ContainerProps> & {
    type: typeof ContainerType;
};
export default Container;
