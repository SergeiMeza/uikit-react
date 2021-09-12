import React from 'react';
export declare type BreadcrumbPage = {
    name: string;
    current: boolean;
    to?: string;
    href?: string;
};
export declare type BreadcrumbProps = {
    type?: BreadcrumbType;
    pages?: (BreadcrumbPage & any)[];
    homeName?: string;
    homeRef?: string;
    homeTo?: string;
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
