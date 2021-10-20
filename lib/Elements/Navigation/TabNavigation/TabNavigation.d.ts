import React from 'react';
import { NavigationItem } from '../NavigationItem';
export declare type TabNavigationProps = {
    tabs?: NavigationItem[];
    type?: TabNavigationType;
    tabItemClassNames?: string;
    tabItemSelectedClassNames?: string;
    showBadge?: boolean;
    showIcons?: boolean;
    isNavBar?: boolean;
    onTabSelected?: (tab: NavigationItem) => void;
};
declare enum TabNavigationType {
    default = "default",
    pills = "pills"
}
export declare const TabNavigation: React.FC<TabNavigationProps> & {
    type: typeof TabNavigationType;
};
export default TabNavigation;
