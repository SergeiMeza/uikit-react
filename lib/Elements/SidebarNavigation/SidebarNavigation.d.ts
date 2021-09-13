import React from 'react';
import { VerticalNavigationProps } from '../Navigation/VerticalNavigation/VerticalNavigation';
export declare type SidebarNavigationProps = {
    icon?: JSX.Element;
    bottomSlot?: JSX.Element;
};
export declare const SidebarNavigation: React.FC<VerticalNavigationProps & SidebarNavigationProps>;
export default SidebarNavigation;
