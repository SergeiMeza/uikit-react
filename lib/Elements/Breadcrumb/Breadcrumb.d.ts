import React from 'react';
export declare type BreadcrumbProps = {
    type?: BreadcrumbType;
    pages?: any[];
    homeName?: string;
    homeRef?: string;
    homeIcon?: JSX.Element;
};
declare enum BreadcrumbType {
    containedBar = "containedBar",
    fullWidthBar = "fullWidthBar",
    simpleWithChevrons = "simpleWithChevrons",
    simpleWithSlashes = "simpleWithSlashes"
}
export declare const Breadcrumb: React.FC<BreadcrumbProps> & {
    type: typeof BreadcrumbType;
};
export default Breadcrumb;
