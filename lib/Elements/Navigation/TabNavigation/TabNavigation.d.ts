import React from 'react';
import { NavigationItem } from '../NavigationItem';
export declare type TabNavigationProps = {
    tabs?: NavigationItem[];
    type?: TabNavigationType;
    showIcons?: boolean;
    onTabSelected?: (tab: NavigationItem) => void;
};
declare enum TabNavigationType {
    default = "default",
    pills = "pills"
}
export declare const TabNavigation: React.FC<TabNavigationProps>;
export default TabNavigation;
