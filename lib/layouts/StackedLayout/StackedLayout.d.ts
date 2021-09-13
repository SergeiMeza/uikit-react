import React from 'react';
export declare type StackedLayoutProps = {
    className?: string;
    navBar?: JSX.Element;
    title?: string | JSX.Element;
    stackedLayoutType?: StackedLayoutType;
};
declare enum StackedLayoutType {
    simple = "simple"
}
export declare const StackedLayout: React.FC<StackedLayoutProps> & {
    type: typeof StackedLayoutType;
};
export default StackedLayout;
