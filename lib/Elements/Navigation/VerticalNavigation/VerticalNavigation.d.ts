import React from 'react';
import { NavigationItem } from '../NavigationItem';
export declare type VerticalNavigationProps = {
    items?: NavigationItem[];
    secondaryNavigationTitle?: string;
    secondaryItems?: NavigationItem[];
    showIcons?: boolean;
    onItemSelected?: (item: NavigationItem) => void;
};
export declare const VerticalNavigation: React.FC<VerticalNavigationProps>;
export default VerticalNavigation;
