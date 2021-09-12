import React from 'react';
export declare type PageHeadingProps = {
    className?: string;
    title?: string | JSX.Element;
    actions?: JSX.Element;
    back?: JSX.Element;
    breadcrumb?: JSX.Element;
    meta?: JSX.Element;
};
export declare const PageHeading: React.FC<PageHeadingProps>;
export default PageHeading;
