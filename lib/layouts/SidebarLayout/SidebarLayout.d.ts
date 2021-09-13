import React from 'react';
export declare type SidebarLayoutProps = {
    className?: string;
    header?: JSX.Element;
    sidebarNavigation?: JSX.Element;
    title?: string | JSX.Element;
    type?: SidebarLayoutType;
};
declare enum SidebarLayoutType {
    simple = "simple"
}
export declare const SidebarLayout: React.FC<SidebarLayoutProps> & {
    type: typeof SidebarLayoutType;
};
export default SidebarLayout;
