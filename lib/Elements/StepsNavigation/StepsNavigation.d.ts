import React from 'react';
import { StepNavigationStatus, StepsNavigationItem } from '../Navigation/NavigationItem';
export declare type StepsNavigationProps = {
    steps: StepsNavigationItem[];
    type?: StepsNavigationType;
};
declare enum StepsNavigationType {
    simple = "simple",
    panels = "panels",
    bullets = "bullets",
    panelsBorder = "panelsBorder",
    circles = "circles",
    bulletsText = "bulletsText",
    circlesText = "circlesText"
}
export declare const StepsNavigation: React.FC<StepsNavigationProps> & {
    stepStatus: typeof StepNavigationStatus;
    type: typeof StepsNavigationType;
};
export default StepsNavigation;
